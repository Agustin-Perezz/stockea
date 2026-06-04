SET search_path = public, extensions;

ALTER TABLE public.products
DROP COLUMN IF EXISTS delivery_label;