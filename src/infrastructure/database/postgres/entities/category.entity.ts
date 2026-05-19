import type { Database } from '$lib/shared/domain/database.types';

export type CategoryEntity = Database['public']['Tables']['categories']['Row'];
