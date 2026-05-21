import type { PaginatedProductResult } from '$domain/types/paginated-product-result.type';

export interface IGetProductsByRootCategoryRepository {
  findByRootCategoryPath(
    rootPath: string,
    limit: number,
    offset: number
  ): Promise<PaginatedProductResult>;
}
