CREATE TYPE order_status AS ENUM ('pending', 'preparing', 'shipped', 'delivered');

CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v7(),
  consumer_id UUID NOT NULL REFERENCES public.consumers(id) ON DELETE CASCADE,
  status order_status NOT NULL DEFAULT 'pending',
  delivery_label TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_orders_consumer_id ON public.orders (consumer_id);
CREATE INDEX idx_orders_status ON public.orders (status);
CREATE INDEX idx_orders_consumer_status ON public.orders (consumer_id, status);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Consumers can view their own orders
CREATE POLICY "Consumers can view own orders"
  ON public.orders FOR SELECT
  USING (auth.uid() = (SELECT user_id FROM consumers WHERE id = consumer_id));

CREATE POLICY "Consumers can insert own orders"
  ON public.orders FOR INSERT
  WITH CHECK (auth.uid() = (SELECT user_id FROM consumers WHERE id = consumer_id));

CREATE POLICY "Consumers can update own orders"
  ON public.orders FOR UPDATE
  USING (auth.uid() = (SELECT user_id FROM consumers WHERE id = consumer_id));

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TABLE IF NOT EXISTS public.order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v7(),
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id),
  requested_qty INTEGER NOT NULL,
  fulfilled_qty INTEGER NOT NULL DEFAULT 0,
  price_per_unit NUMERIC NOT NULL
);

CREATE UNIQUE INDEX idx_order_items_order_product ON public.order_items (order_id, product_id);
CREATE INDEX idx_order_items_product_id ON public.order_items (product_id);

ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- Users can view order items for their own orders
CREATE POLICY "Users can view own order items"
  ON public.order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_id
      AND orders.consumer_id IN (SELECT id FROM consumers WHERE user_id = auth.uid())
    )
  );

-- Consumers can insert order items for their own orders
CREATE POLICY "Users can insert own order items"
  ON public.order_items FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_id
      AND orders.consumer_id IN (SELECT id FROM consumers WHERE user_id = auth.uid())
    )
  );

-- Consumers can update order items for their own orders
CREATE POLICY "Users can update own order items"
  ON public.order_items FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_id
      AND orders.consumer_id IN (SELECT id FROM consumers WHERE user_id = auth.uid())
    )
  );

-- Consumers can delete order items for their own orders
CREATE POLICY "Users can delete own order items"
  ON public.order_items FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_id
      AND orders.consumer_id IN (SELECT id FROM consumers WHERE user_id = auth.uid())
    )
  );