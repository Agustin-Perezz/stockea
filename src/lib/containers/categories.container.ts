import type { SupabaseClient } from '@supabase/supabase-js';
import { GetRootCategoriesUseCase } from '$application/use-cases/categories/get-root-categories/get-root-categories.use-case';
import { GetSubcategoriesWithProductsUseCase } from '$application/use-cases/categories/get-subcategories-with-products/get-subcategories-with-products.use-case';
import { SupabaseGetRootCategoriesRepository } from '$infrastructure/database/postgres/repositories/categories/supabase-get-root-categories.repository';
import { SupabaseGetSubcategoriesWithProductsRepository } from '$infrastructure/database/postgres/repositories/categories/supabase-get-subcategories-with-products.repository';

import type { Database } from '$lib/shared/domain/database.types';

export interface CategoriesContainer {
  getRootCategories: GetRootCategoriesUseCase;
  getSubcategoriesWithProducts: GetSubcategoriesWithProductsUseCase;
}

export function createCategoriesContainer(
  supabase: SupabaseClient<Database>
): CategoriesContainer {
  const getRootCategoriesRepo = new SupabaseGetRootCategoriesRepository(
    supabase
  );
  const getSubcategoriesWithProductsRepo =
    new SupabaseGetSubcategoriesWithProductsRepository(supabase);
  return {
    getRootCategories: new GetRootCategoriesUseCase(getRootCategoriesRepo),
    getSubcategoriesWithProducts: new GetSubcategoriesWithProductsUseCase(
      getSubcategoriesWithProductsRepo
    )
  };
}
