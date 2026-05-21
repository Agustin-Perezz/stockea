import type { SupabaseClient } from '@supabase/supabase-js';
import { GetProductsByRootCategoryUseCase } from '$application/use-cases/products/get-products-by-root-category/get-products-by-root-category.use-case';
import { SupabaseGetProductsByRootCategoryRepository } from '$infrastructure/database/postgres/repositories/products/supabase-get-products-by-root-category.repository';

import type { Database } from '$lib/shared/domain/database.types';

export interface ProductsContainer {
  getProductsByRootCategory: GetProductsByRootCategoryUseCase;
}

export function createProductsContainer(
  supabase: SupabaseClient<Database>
): ProductsContainer {
  const repo = new SupabaseGetProductsByRootCategoryRepository(supabase);
  return {
    getProductsByRootCategory: new GetProductsByRootCategoryUseCase(repo)
  };
}
