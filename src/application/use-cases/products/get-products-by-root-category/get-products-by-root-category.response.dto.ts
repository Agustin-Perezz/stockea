import type { ProductData } from '$domain/entities/product.entity';

export interface ProductsByCategoryResponseDto {
  products: ProductData[];
  totalCount: number;
}

export function toProductsByCategoryResponseDto(
  products: { toJSON: () => ProductData }[],
  totalCount: number
): ProductsByCategoryResponseDto {
  return {
    products: products.map((p) => p.toJSON()),
    totalCount
  };
}
