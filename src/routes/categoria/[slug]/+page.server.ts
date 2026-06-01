import { createCategoriesContainer } from '$lib/containers/categories.container';

const PRODUCTS_PER_SUBATEGORY = 5;

export async function load({ params, locals }) {
  const { getRootCategories, getSubcategoriesWithProducts } =
    createCategoriesContainer(locals.supabase);

  const categories = await getRootCategories.execute();
  const category = categories.find((c) => c.path === params.slug);

  if (!category) {
    return { category: null, subcategories: [] };
  }

  const subcategories = await getSubcategoriesWithProducts.execute(
    category.path,
    PRODUCTS_PER_SUBATEGORY
  );

  return {
    category,
    subcategories
  };
}
