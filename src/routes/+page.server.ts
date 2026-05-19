import { createCategoriesContainer } from '$lib/containers/categories.container';

export async function load({ locals }) {
  const { getRootCategories } = createCategoriesContainer(locals.supabase);
  const categories = await getRootCategories.execute();
  return { categories };
}
