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
            'supplier_delivery_day', s.delivery_day
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
    AND nlevel(sub.path) = nlevel(p_parent_path::ltree) + 1;
$$ LANGUAGE sql STABLE;