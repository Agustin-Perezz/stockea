CREATE TABLE IF NOT EXISTS public.suppliers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v7(),
  user_id UUID NOT NULL UNIQUE REFERENCES public.users(id) ON DELETE CASCADE,
  business_name TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_suppliers_user_id ON public.suppliers (user_id);

ALTER TABLE public.suppliers ENABLE ROW LEVEL SECURITY;

-- Users with supplier role can manage their own supplier profile
CREATE POLICY "Suppliers can view own profile"
  ON public.suppliers FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Suppliers can insert own profile"
  ON public.suppliers FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Suppliers can update own profile"
  ON public.suppliers FOR UPDATE
  USING (auth.uid() = user_id);

CREATE TRIGGER update_suppliers_updated_at
  BEFORE UPDATE ON public.suppliers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TABLE IF NOT EXISTS public.consumers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v7(),
  user_id UUID NOT NULL UNIQUE REFERENCES public.users(id) ON DELETE CASCADE,
  shop_name TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_consumers_user_id ON public.consumers (user_id);

ALTER TABLE public.consumers ENABLE ROW LEVEL SECURITY;

-- Users with consumer role can manage their own consumer profile
CREATE POLICY "Consumers can view own profile"
  ON public.consumers FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Consumers can insert own profile"
  ON public.consumers FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Consumers can update own profile"
  ON public.consumers FOR UPDATE
  USING (auth.uid() = user_id);

CREATE TRIGGER update_consumers_updated_at
  BEFORE UPDATE ON public.consumers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();