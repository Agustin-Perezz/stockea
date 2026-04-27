import { superValidate } from 'sveltekit-superforms';
import { zod4 as zod } from 'sveltekit-superforms/adapters';

import type { PageServerLoad } from './$types';
import { productSchema } from './product.schema';

export const load: PageServerLoad = async () => {
  const productForm = await superValidate(zod(productSchema));
  return { productForm };
};
