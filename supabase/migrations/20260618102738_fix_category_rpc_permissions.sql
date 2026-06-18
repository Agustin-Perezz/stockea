SET search_path = public, extensions;

GRANT SELECT ON public.categories TO anon, authenticated;

CREATE OR REPLACE FUNCTION get_root_categories()
RETURNS SETOF public.categories AS $$
  SELECT * FROM public.categories WHERE extensions.nlevel(path) = 1 ORDER BY position;
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public', 'extensions';

CREATE OR REPLACE FUNCTION get_child_categories(parent_path extensions.ltree)
RETURNS SETOF public.categories AS $$
  SELECT * FROM public.categories
  WHERE path <@ parent_path
    AND path != parent_path
    AND extensions.nlevel(path) = extensions.nlevel(parent_path) + 1
  ORDER BY position;
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public', 'extensions';

CREATE OR REPLACE FUNCTION get_descendant_categories(parent_path extensions.ltree)
RETURNS SETOF public.categories AS $$
  SELECT * FROM public.categories
  WHERE path <@ parent_path AND path != parent_path
  ORDER BY path;
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public', 'extensions';

CREATE OR REPLACE FUNCTION get_ancestor_categories(node_path extensions.ltree)
RETURNS SETOF public.categories AS $$
  SELECT * FROM public.categories
  WHERE path @> node_path
  ORDER BY extensions.nlevel(path);
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public', 'extensions';

CREATE OR REPLACE FUNCTION get_leaf_categories()
RETURNS SETOF public.categories AS $$
  SELECT c.* FROM public.categories c
  WHERE NOT EXISTS (
    SELECT 1 FROM public.categories child
    WHERE child.path <@ c.path AND child.path != c.path
  )
  ORDER BY c.path;
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public', 'extensions';