SET search_path = public, extensions;

CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  path extensions.ltree NOT NULL UNIQUE,
  position INTEGER NOT NULL DEFAULT 0,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

  CONSTRAINT categories_path_label_format
    CHECK (path::text ~ '^[a-z][a-z0-9]*(_[a-z0-9]+)*(\.[a-z][a-z0-9]*(_[a-z0-9]+)*)*$'),

  CONSTRAINT categories_max_depth CHECK (extensions.nlevel(path) <= 3)
);

CREATE INDEX idx_categories_path_gist ON public.categories USING GIST (path);
CREATE INDEX idx_categories_path_btree ON public.categories (path);
CREATE INDEX idx_categories_root ON public.categories (position) WHERE extensions.nlevel(path) = 1;

CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are publicly readable"
  ON public.categories FOR SELECT
  USING (true);

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
  SELECT * FROM public.categories WHERE extensions.nlevel(path) = 1 ORDER BY position;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION get_child_categories(parent_path extensions.ltree)
RETURNS SETOF public.categories AS $$
  SELECT * FROM public.categories
  WHERE path <@ parent_path
    AND path != parent_path
    AND extensions.nlevel(path) = extensions.nlevel(parent_path) + 1
  ORDER BY position;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION get_descendant_categories(parent_path extensions.ltree)
RETURNS SETOF public.categories AS $$
  SELECT * FROM public.categories
  WHERE path <@ parent_path AND path != parent_path
  ORDER BY path;
$$ LANGUAGE sql STABLE;

CREATE OR REPLACE FUNCTION get_ancestor_categories(node_path extensions.ltree)
RETURNS SETOF public.categories AS $$
  SELECT * FROM public.categories
  WHERE path @> node_path
  ORDER BY extensions.nlevel(path);
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