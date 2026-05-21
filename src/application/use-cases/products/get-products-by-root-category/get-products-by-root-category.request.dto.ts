import { z } from 'zod';

export const getProductsByRootCategoryRequestSchema = z.object({
  rootPath: z.string().min(1),
  limit: z.number().int().positive().default(10),
  offset: z.number().int().nonnegative().default(0)
});

export type GetProductsByRootCategoryRequestDto = z.infer<
  typeof getProductsByRootCategoryRequestSchema
>;
