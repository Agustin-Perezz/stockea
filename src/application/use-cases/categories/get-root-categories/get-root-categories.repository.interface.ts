import type { Category } from '$domain/entities/category.entity';

export interface IGetRootCategoriesRepository {
  findAll(): Promise<Category[]>;
}
