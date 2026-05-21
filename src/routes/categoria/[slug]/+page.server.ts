import { createCategoriesContainer } from '$lib/containers/categories.container';
import { createProductsContainer } from '$lib/containers/products.container';

export async function load({ params, locals }) {
  const { getRootCategories } = createCategoriesContainer(locals.supabase);
  const { getProductsByRootCategory } = createProductsContainer(
    locals.supabase
  );

  const categories = await getRootCategories.execute();
  const category = categories.find((c) => c.path === params.slug);

  if (!category) {
    return { category: null, products: [], totalCount: 0 };
  }

  const result = await getProductsByRootCategory.execute({
    rootPath: category.path,
    limit: 50,
    offset: 0
  });

  return {
    category,
    products: result.products
  };
}
