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
  delivery_day INTEGER,
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
    s.delivery_day,
    p.image_url,
    p.created_at,
    p.updated_at,
    COUNT(*) OVER() AS total_count
  FROM public.products p
  INNER JOIN public.categories c ON c.id = p.category_id
  LEFT JOIN public.suppliers s ON p.supplier_id = s.id
  WHERE c.path <@ p_root_path::ltree
  ORDER BY p.name ASC
  LIMIT p_limit OFFSET p_offset;
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public', 'extensions';

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
        SELECT jsonb_agg(
          jsonb_build_object(
            'id', p.id,
            'supplier_id', p.supplier_id,
            'category_id', p.category_id,
            'name', p.name,
            'price_per_unit', p.price_per_unit,
            'original_price', p.original_price,
            'pack_size', p.pack_size,
            'is_best_seller', p.is_best_seller,
            'image_url', p.image_url,
            'created_at', p.created_at,
            'updated_at', p.updated_at,
            'delivery_day', s.delivery_day
          ) ORDER BY p.name ASC, p.id ASC
        )
        FROM (
          SELECT p_inner.id, p_inner.supplier_id, p_inner.category_id,
                 p_inner.name, p_inner.price_per_unit, p_inner.original_price,
                 p_inner.pack_size, p_inner.is_best_seller, p_inner.image_url,
                 p_inner.created_at, p_inner.updated_at
          FROM public.products p_inner
          WHERE category_id IN (
            SELECT id FROM public.categories
            WHERE path <@ sub.path
          )
          ORDER BY name ASC, id ASC
          LIMIT p_product_limit
        ) p
        LEFT JOIN public.suppliers s ON p.supplier_id = s.id
      ), '[]'::jsonb)
    )
    ORDER BY sub.position
  ), '[]'::jsonb)
  FROM public.categories sub
  WHERE sub.path <@ p_parent_path::ltree
    AND extensions.nlevel(sub.path) = extensions.nlevel(p_parent_path::ltree) + 1;
$$ LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public', 'extensions';