import type { ProductData } from '$domain/entities/product.entity';

export type { ProductData };

export function discountPct(p: ProductData): number | null {
  if (!p.originalPrice || p.originalPrice <= p.pricePerUnit) return null;
  return Math.round((1 - p.pricePerUnit / p.originalPrice) * 100);
}
