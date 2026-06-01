SET search_path = public, extensions;

CREATE OR REPLACE FUNCTION get_subcategories_with_products(
  p_parent_path TEXT,
  p_product_limit INT DEFAULT 5
)
RETURNS JSONB AS $$
  SELECT COALESCE(jsonb_agg(
    jsonb_build_object(
      'category_id', sub.id,
      'category_path', sub.path,
      'category_name', sub.name,
      'image_url', sub.image_url,
      'products', COALESCE((
        SELECT jsonb_agg(to_jsonb(p.*) ORDER BY p.name ASC, p.id ASC)
        FROM (
          SELECT * FROM public.products
          WHERE category_id IN (
            SELECT id FROM public.categories
            WHERE path <@ sub.path
          )
          ORDER BY name ASC, id ASC
          LIMIT p_product_limit
        ) p
      ), '[]'::jsonb)
    )
    ORDER BY sub.position
  ), '[]'::jsonb)
  FROM public.categories sub
  WHERE sub.path <@ p_parent_path::ltree
    AND nlevel(sub.path) = nlevel(p_parent_path::ltree) + 1;
$$ LANGUAGE sql STABLE;