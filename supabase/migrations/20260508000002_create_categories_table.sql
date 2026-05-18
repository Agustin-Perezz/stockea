-- Enable ltree extension for hierarchical category paths
CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;

-- Drop flat categories table (CASCADE removes FK on products.category_id automatically)
DROP TABLE IF EXISTS public.categories CASCADE;

CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  path LTREE NOT NULL UNIQUE,
  position INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  -- Path labels: lowercase ASCII snake_case only (no accents, spaces, uppercase)
  CONSTRAINT categories_path_label_format
    CHECK (path::text ~ '^[a-z][a-z0-9]*(_[a-z0-9]+)*(\.[a-z][a-z0-9]*(_[a-z0-9]+)*)*$'),

  -- Max hierarchy depth of 3 levels
  CONSTRAINT categories_max_depth CHECK (nlevel(path) <= 3)
);

-- GiST index: accelerates <@ (descendant), @> (ancestor), ~ (lquery match)
CREATE INDEX idx_categories_path_gist ON public.categories USING GIST (path);

-- B-tree index: exact path lookups and ordering
CREATE INDEX idx_categories_path_btree ON public.categories (path);

-- Partial index: fast root category queries
CREATE INDEX idx_categories_root ON public.categories (position) WHERE nlevel(path) = 1;

-- Trigger: auto-update updated_at
CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS: categories are publicly readable
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are publicly readable"
  ON public.categories FOR SELECT
  USING (true);

-- ============================================================
-- Trigger function: prevent products from referencing non-leaf categories
-- (The trigger itself is attached in the products migration)
-- ============================================================

CREATE OR REPLACE FUNCTION enforce_product_leaf_category()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM public.categories c
    WHERE c.id = NEW.category_id
    AND EXISTS (
      SELECT 1 FROM public.categories sub
      WHERE sub.path <@ c.path AND sub.path != c.path
    )
  ) THEN
    RAISE EXCEPTION 'Products can only reference leaf categories. Category % is not a leaf node.',
      (SELECT path FROM public.categories WHERE id = NEW.category_id);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_root_categories()
RETURNS SETOF public.categories AS $$
  SELECT * FROM public.categories WHERE nlevel(path) = 1 ORDER BY position;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION get_child_categories(parent_path LTREE)
RETURNS SETOF public.categories AS $$
  SELECT * FROM public.categories
  WHERE path <@ parent_path
    AND path != parent_path
    AND nlevel(path) = nlevel(parent_path) + 1
  ORDER BY position;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION get_descendant_categories(parent_path LTREE)
RETURNS SETOF public.categories AS $$
  SELECT * FROM public.categories
  WHERE path <@ parent_path AND path != parent_path
  ORDER BY path;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION get_ancestor_categories(node_path LTREE)
RETURNS SETOF public.categories AS $$
  SELECT * FROM public.categories
  WHERE path @> node_path
  ORDER BY nlevel(path);
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION get_leaf_categories()
RETURNS SETOF public.categories AS $$
  SELECT c.* FROM public.categories c
  WHERE NOT EXISTS (
    SELECT 1 FROM public.categories child
    WHERE child.path <@ c.path AND child.path != c.path
  )
  ORDER BY c.path;
$$ LANGUAGE sql STABLE;