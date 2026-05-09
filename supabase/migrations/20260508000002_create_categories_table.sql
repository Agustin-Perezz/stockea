CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  position INTEGER NOT NULL
);

CREATE INDEX idx_categories_slug ON public.categories (slug);
CREATE INDEX idx_categories_position ON public.categories (position);

-- Seed data for the 8 categories
INSERT INTO public.categories (name, slug, position) VALUES
  ('Bebidas', 'bebidas', 1),
  ('Lácteos', 'lacteos', 2),
  ('Almacén', 'almacen', 3),
  ('Limpieza', 'limpieza', 4),
  ('Snacks', 'snacks', 5),
  ('Carnes', 'carnes', 6),
  ('Verduras', 'verduras', 7),
  ('Panadería', 'panaderia', 8)
ON CONFLICT (slug) DO NOTHING;