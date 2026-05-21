SET search_path = public, extensions;

CREATE OR REPLACE FUNCTION get_products_by_root_category(
  p_root_path TEXT,
  p_limit INT DEFAULT 10,
  p_offset INT DEFAULT 0
)
RETURNS TABLE (
  id UUID,
  supplier_id UUID,
  category_id UUID,
  name TEXT,
  price_per_unit NUMERIC,
  original_price NUMERIC,
  pack_size INTEGER,
  is_best_seller BOOLEAN,
  delivery_label TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  total_count BIGINT
) AS $$
  SELECT
    p.id,
    p.supplier_id,
    p.category_id,
    p.name,
    p.price_per_unit,
    p.original_price,
    p.pack_size,
    p.is_best_seller,
    p.delivery_label,
    p.image_url,
    p.created_at,
    p.updated_at,
    COUNT(*) OVER() AS total_count
  FROM public.products p
  INNER JOIN public.categories c ON c.id = p.category_id
  WHERE c.path <@ p_root_path::ltree
  ORDER BY p.name ASC
  LIMIT p_limit OFFSET p_offset;
$$ LANGUAGE sql STABLE;