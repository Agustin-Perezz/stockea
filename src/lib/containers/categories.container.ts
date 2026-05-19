import type { SupabaseClient } from '@supabase/supabase-js';
import { GetRootCategoriesUseCase } from '$application/use-cases/categories/get-root-categories/get-root-categories.use-case';
import { SupabaseGetRootCategoriesRepository } from '$infrastructure/database/postgres/repositories/categories/supabase-get-root-categories.repository';

import type { Database } from '$lib/shared/domain/database.types';

export interface CategoriesContainer {
  getRootCategories: GetRootCategoriesUseCase;
}

export function createCategoriesContainer(
  supabase: SupabaseClient<Database>
): CategoriesContainer {
  const getRootCategoriesRepo = new SupabaseGetRootCategoriesRepository(
    supabase
  );
  return {
    getRootCategories: new GetRootCategoriesUseCase(getRootCategoriesRepo)
  };
}
