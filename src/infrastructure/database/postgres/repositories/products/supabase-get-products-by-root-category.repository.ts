import type { SupabaseClient } from '@supabase/supabase-js';
import type { IGetProductsByRootCategoryRepository } from '$application/use-cases/products/get-products-by-root-category/get-products-by-root-category.repository.interface';
import { Product } from '$domain/entities/product.entity';
import type { PaginatedProductResult } from '$domain/types/paginated-product-result.type';

import type { Database } from '$lib/shared/domain/database.types';

type ProductsByRootCategoryRow =
  Database['public']['Functions']['get_products_by_root_category']['Returns'][number];

export class SupabaseGetProductsByRootCategoryRepository implements IGetProductsByRootCategoryRepository {
  constructor(private readonly supabase: SupabaseClient<Database>) {}

  async findByRootCategoryPath(
    rootPath: string,
    limit: number,
    offset: number
  ): Promise<PaginatedProductResult> {
    const { data, error } = await this.supabase.rpc(
      'get_products_by_root_category',
      {
        p_root_path: rootPath,
        p_limit: limit,
        p_offset: offset
      }
    );
    if (error) throw error;

    let totalCount = 0;
    const products = (data ?? []).map((row: ProductsByRootCategoryRow) => {
      totalCount = Number(row.total_count);
      return this.toDomain(row);
    });

    return { products, totalCount };
  }

  private toDomain(row: ProductsByRootCategoryRow): Product {
    return Product.reconstruct({
      id: row.id,
      supplierId: row.supplier_id,
      categoryId: row.category_id,
      name: row.name,
      pricePerUnit: Number(row.price_per_unit),
      originalPrice:
        row.original_price != null ? Number(row.original_price) : null,
      packSize: row.pack_size,
      isBestSeller: row.is_best_seller,
      imageUrl: row.image_url,
      createdAt: new Date(row.created_at),
      updatedAt: new Date(row.updated_at),
      supplierDeliveryDay: row.supplier_delivery_day
    });
  }
}
