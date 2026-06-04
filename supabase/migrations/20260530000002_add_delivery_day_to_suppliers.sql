SET search_path = public, extensions;

ALTER TABLE public.suppliers
ADD COLUMN delivery_day INTEGER NOT NULL DEFAULT 0 CHECK (delivery_day BETWEEN 0 AND 6);
-- 0 = Sunday, 1 = Monday, ..., 6 = Saturday