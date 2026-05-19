import type { SupabaseClient } from '@supabase/supabase-js';
import type { IGetRootCategoriesRepository } from '$application/use-cases/categories/get-root-categories/get-root-categories.repository.interface';
import { Category } from '$domain/entities/category.entity';
import type { CategoryEntity } from '$infrastructure/database/postgres/entities/category.entity';

import type { Database } from '$lib/shared/domain/database.types';

export class SupabaseGetRootCategoriesRepository implements IGetRootCategoriesRepository {
  constructor(private readonly supabase: SupabaseClient<Database>) {}

  async findAll(): Promise<Category[]> {
    const { data, error } = await this.supabase.rpc('get_root_categories');
    if (error) throw error;
    return (data ?? []).map((row) => this.toDomain(row));
  }

  private toDomain(row: CategoryEntity): Category {
    return Category.reconstruct({
      id: row.id,
      name: row.name,
      path: String(row.path),
      position: row.position,
      imageUrl: row.image_url,
      createdAt: new Date(row.created_at),
      updatedAt: new Date(row.updated_at)
    });
  }
}
