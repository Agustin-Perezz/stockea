import type { Database } from '$lib/shared/domain/database.types';

export type BookEntity = Database['public']['Tables']['books']['Row'];
