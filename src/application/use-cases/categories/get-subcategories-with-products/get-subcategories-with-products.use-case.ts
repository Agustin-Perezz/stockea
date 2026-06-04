import type {
  IGetSubcategoriesWithProductsRepository,
  SubcategoryWithProducts
} from '$infrastructure/database/postgres/repositories/categories/supabase-get-subcategories-with-products.repository';

import type { SubcategoryWithProductsData } from './get-subcategories-with-products.response.dto';

export class GetSubcategoriesWithProductsUseCase {
  constructor(
    private readonly repository: IGetSubcategoriesWithProductsRepository
  ) {}

  async execute(
    parentPath: string,
    productLimit: number
  ): Promise<SubcategoryWithProductsData[]> {
    const result = await this.repository.findSubcategoriesWithProducts(
      parentPath,
      productLimit
    );
    return result.map(toGetSubcategoriesWithProductsResponseDto);
  }
}

function toGetSubcategoriesWithProductsResponseDto(
  sub: SubcategoryWithProducts
): SubcategoryWithProductsData {
  return {
    categoryId: sub.categoryId,
    categoryPath: sub.categoryPath,
    categoryName: sub.categoryName,
    imageUrl: sub.imageUrl,
    products: sub.products.map((p) => ({
      id: p.id,
      supplierId: p.supplierId,
      categoryId: p.categoryId,
      name: p.name,
      pricePerUnit: p.pricePerUnit,
      originalPrice: p.originalPrice,
      packSize: p.packSize,
      isBestSeller: p.isBestSeller,
      supplierDeliveryDay: p.supplierDeliveryDay,
      imageUrl: p.imageUrl,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt
    }))
  };
}
