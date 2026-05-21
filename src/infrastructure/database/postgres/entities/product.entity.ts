import type { Database } from '$lib/shared/domain/database.types';

export type ProductEntity = Database['public']['Tables']['products']['Row'];
