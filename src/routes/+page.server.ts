import type { ProductsByCategoryResponseDto } from '$application/use-cases/products/get-products-by-root-category/get-products-by-root-category.response.dto';

import { createCategoriesContainer } from '$lib/containers/categories.container';
import { createProductsContainer } from '$lib/containers/products.container';

const PRODUCTS_PER_CATEGORY = 10;

export async function load({ locals }) {
  const { getRootCategories } = createCategoriesContainer(locals.supabase);
  const { getProductsByRootCategory } = createProductsContainer(
    locals.supabase
  );

  const categories = await getRootCategories.execute();

  const productsByCategory: Record<string, ProductsByCategoryResponseDto> = {};

  await Promise.all(
    categories.map(async (cat) => {
      productsByCategory[cat.id] = await getProductsByRootCategory.execute({
        rootPath: cat.path,
        limit: PRODUCTS_PER_CATEGORY,
        offset: 0
      });
    })
  );

  return {
    categories: categories ?? [],
    productsByCategory
  };
}
