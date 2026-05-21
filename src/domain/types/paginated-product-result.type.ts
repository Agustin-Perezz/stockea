import type { Product } from '$domain/entities/product.entity';

export type PaginatedProductResult = {
  products: Product[];
  totalCount: number;
};
