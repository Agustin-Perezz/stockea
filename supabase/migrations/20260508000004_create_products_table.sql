CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  supplier_id UUID NOT NULL REFERENCES public.suppliers(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE RESTRICT,
  name TEXT NOT NULL,
  price_per_unit NUMERIC NOT NULL,
  original_price NUMERIC,
  pack_size INTEGER NOT NULL,
  is_best_seller BOOLEAN NOT NULL DEFAULT false,
  delivery_label TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_products_supplier_id ON public.products (supplier_id);
CREATE INDEX idx_products_category_id ON public.products (category_id);
CREATE INDEX idx_products_supplier_category ON public.products (supplier_id, category_id);

CREATE OR REPLACE FUNCTION get_supplier_id_for_user(user_uuid UUID)
RETURNS UUID AS $$
  SELECT id FROM suppliers WHERE user_id = user_uuid;
$$ LANGUAGE sql SECURITY DEFINER;

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Products are publicly readable"
  ON public.products FOR SELECT
  USING (true);

-- Suppliers can manage their own products (via supplier lookup from user_id)

CREATE POLICY "Suppliers can insert own products"
  ON public.products FOR INSERT
  WITH CHECK (auth.uid() = (SELECT user_id FROM suppliers WHERE id = supplier_id));

CREATE POLICY "Suppliers can update own products"
  ON public.products FOR UPDATE
  USING (auth.uid() = (SELECT user_id FROM suppliers WHERE id = supplier_id));

CREATE POLICY "Suppliers can delete own products"
  ON public.products FOR DELETE
  USING (auth.uid() = (SELECT user_id FROM suppliers WHERE id = supplier_id));

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enforce that products can only reference leaf categories
CREATE TRIGGER enforce_product_leaf_category_insert
  BEFORE INSERT ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION enforce_product_leaf_category();

CREATE TRIGGER enforce_product_leaf_category_update
  BEFORE UPDATE OF category_id ON public.products
  FOR EACH ROW
  WHEN (NEW.category_id IS DISTINCT FROM OLD.category_id)
  EXECUTE FUNCTION enforce_product_leaf_category();