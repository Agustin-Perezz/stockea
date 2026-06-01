import type { ProductData } from '$lib/shared/domain/product.types';

export interface SubcategoryWithProductsData {
  categoryId: string;
  categoryPath: string;
  categoryName: string;
  imageUrl: string | null;
  products: ProductData[];
}

export type { SubcategoryWithProductsData as GetSubcategoriesWithProductsResponseDto };
