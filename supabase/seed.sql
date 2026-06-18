SET search_path = public, extensions;

INSERT INTO public.users (id, email, full_name, role) VALUES
  ('a0000000-0000-0000-0000-000000000001', 'supplier@test.com', 'Test Supplier', 'supplier'),
  ('a0000000-0000-0000-0000-000000000002', 'consumer@test.com', 'Test Consumer', 'consumer')
ON CONFLICT (email) DO NOTHING;

INSERT INTO public.suppliers (user_id, business_name, address, phone, delivery_day) VALUES
  ('a0000000-0000-0000-0000-000000000001', 'Test Distribuidora', 'Av. Test 123', '011-1234-5678', 1)
ON CONFLICT (user_id) DO UPDATE SET
  delivery_day = EXCLUDED.delivery_day;

INSERT INTO public.consumers (user_id, shop_name, address, phone) VALUES
  ('a0000000-0000-0000-0000-000000000002', 'Test Kiosk', 'Calle Test 456', '011-8765-4321')
ON CONFLICT (user_id) DO NOTHING;

INSERT INTO public.categories (name, path, position) VALUES
  ('Fiambres', 'fiambres', 1),
  ('Bondiola', 'fiambres.bondiola', 1),
  ('Jamon Cocido', 'fiambres.jamon_cocido', 2),
  ('Quesos', 'quesos', 2),
  ('Mozzarella', 'quesos.mozzarella', 1),
  ('Cremoso', 'quesos.cremoso', 2)
ON CONFLICT (path) DO NOTHING;

INSERT INTO public.products (supplier_id, category_id, name, price_per_unit, original_price, pack_size, is_best_seller, image_url)
SELECT
  s.id, c.id, v.product_name, v.price, v.original_price, v.pack_size, v.best_seller, v.image_url
FROM (VALUES
  ('Test Distribuidora', 'fiambres.bondiola', 'Bondiola Picada x 100g', 2850, 3200, 10, true, NULL),
  ('Test Distribuidora', 'fiambres.jamon_cocido', 'Jamon Cocido Fete x 100g', 3100, 3500, 10, false, NULL),
  ('Test Distribuidora', 'quesos.mozzarella', 'Mozzarella x kg', 5800, 6200, 2, true, NULL),
  ('Test Distribuidora', 'quesos.cremoso', 'Cremoso Barra x kg', 4500, 4800, 2, false, NULL)
) AS v(supplier_name, cat_path, product_name, price, original_price, pack_size, best_seller, image_url)
JOIN public.suppliers s ON s.business_name = v.supplier_name
JOIN public.categories c ON c.path = v.cat_path::ltree;

INSERT INTO public.orders (consumer_id, status, delivery_label)
SELECT c.id, 'pending', 'Llega el Lunes'
FROM public.consumers c
WHERE c.shop_name = 'Test Kiosk'
LIMIT 1;

INSERT INTO public.order_items (order_id, product_id, requested_qty, fulfilled_qty, price_per_unit)
SELECT
  o.id, p.id, 5, 0, 2850
FROM public.orders o, public.products p
WHERE o.delivery_label = 'Llega el Lunes'
  AND p.name = 'Bondiola Picada x 100g'
LIMIT 1;