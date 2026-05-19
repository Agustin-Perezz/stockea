import type { Category, CategoryData } from '$domain/entities/category.entity';

export type GetRootCategoriesResponseDto = CategoryData;

export function toGetRootCategoriesResponseDto(
  category: Category
): GetRootCategoriesResponseDto {
  return category.toJSON();
}
