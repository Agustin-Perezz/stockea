import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(2, 'Mínimo 2 caracteres'),
  category: z.string().min(1, 'Seleccioná una categoría'),
  pricePerUnit: z.number().positive('Debe ser mayor a 0'),
  stock: z.number().int().nonnegative('Debe ser un número entero no negativo'),
  estado: z.enum(['Activo', 'Inactivo']),
  images: z.array(z.string()).max(5, 'Máximo 5 imágenes').optional()
});

export type ProductFormData = z.infer<typeof productSchema>;
