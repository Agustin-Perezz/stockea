import type { IGetProductsByRootCategoryRepository } from './get-products-by-root-category.repository.interface';
import type { GetProductsByRootCategoryRequestDto } from './get-products-by-root-category.request.dto';
import {
  toProductsByCategoryResponseDto,
  type ProductsByCategoryResponseDto
} from './get-products-by-root-category.response.dto';

export class GetProductsByRootCategoryUseCase {
  constructor(
    private readonly repository: IGetProductsByRootCategoryRepository
  ) {}

  async execute(
    request: GetProductsByRootCategoryRequestDto
  ): Promise<ProductsByCategoryResponseDto> {
    const { products, totalCount } =
      await this.repository.findByRootCategoryPath(
        request.rootPath,
        request.limit,
        request.offset
      );
    return toProductsByCategoryResponseDto(products, totalCount);
  }
}
