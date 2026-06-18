import type { SupabaseClient } from '@supabase/supabase-js';

import type { ProductData } from '$lib/shared/domain/product.types';

export interface SubcategoryWithProducts {
  categoryId: string;
  categoryPath: string;
  categoryName: string;
  imageUrl: string | null;
  products: ProductData[];
}

export interface IGetSubcategoriesWithProductsRepository {
  findSubcategoriesWithProducts(
    parentPath: string,
    productLimit: number
  ): Promise<SubcategoryWithProducts[]>;
}

type SubcategoryProductRow = {
  id: string;
  supplier_id: string;
  category_id: string;
  name: string;
  price_per_unit: number;
  original_price: number | null;
  pack_size: number;
  is_best_seller: boolean;
  image_url: string | null;
  created_at: string;
  updated_at: string;
  delivery_day: number;
};

type SubcategoriesWithProductsRow = {
  category_id: string;
  category_path: string;
  category_name: string;
  image_url: string | null;
  products: SubcategoryProductRow[];
}[];

export class SupabaseGetSubcategoriesWithProductsRepository implements IGetSubcategoriesWithProductsRepository {
  constructor(private readonly supabase: SupabaseClient) {}

  async findSubcategoriesWithProducts(
    parentPath: string,
    productLimit: number
  ): Promise<SubcategoryWithProducts[]> {
    const { data, error } = await this.supabase.rpc(
      'get_subcategories_with_products',
      {
        p_parent_path: parentPath,
        p_product_limit: productLimit
      }
    );
    if (error) throw error;

    const rows = data as SubcategoriesWithProductsRow;
    return (rows ?? []).map((row) => ({
      categoryId: row.category_id,
      categoryPath: String(row.category_path),
      categoryName: row.category_name,
      imageUrl: row.image_url,
      products: (row.products ?? []).map(
        (p): ProductData => ({
          id: p.id,
          supplierId: p.supplier_id,
          categoryId: p.category_id,
          name: p.name,
          pricePerUnit: Number(p.price_per_unit),
          originalPrice:
            p.original_price != null ? Number(p.original_price) : null,
          packSize: p.pack_size,
          isBestSeller: p.is_best_seller,
          imageUrl: p.image_url,
          createdAt: p.created_at,
          updatedAt: p.updated_at,
          supplierDeliveryDay: p.delivery_day
        })
      )
    }));
  }
}
