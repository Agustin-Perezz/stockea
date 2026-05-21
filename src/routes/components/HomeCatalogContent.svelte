<script lang="ts">
  import type { ProductsByCategoryResponseDto } from '$application/use-cases/products/get-products-by-root-category/get-products-by-root-category.response.dto';
  import type { CategoryData } from '$domain/entities/category.entity';

  import type { ProductData } from '$lib/shared/domain/product.types';
  import { homeSearch } from '$lib/stores/homeSearch.svelte';
  import CategoryCarousel from './CategoryCarousel.svelte';
  import CategoryFilter from './CategoryFilter.svelte';
  import HomeEmptyState from './HomeEmptyState.svelte';

  interface Props {
    categories: CategoryData[];
    productsByCategory: Record<string, ProductsByCategoryResponseDto>;
  }

  let { categories, productsByCategory }: Props = $props();

  const categoryGroups = $derived(
    categories
      .map((cat) => {
        const data = productsByCategory[cat.id];
        const products: ProductData[] = data?.products ?? [];
        const filtered = products.filter(
          (p) =>
            homeSearch.query === '' ||
            p.name.toLowerCase().includes(homeSearch.query.toLowerCase())
        );
        return {
          cat,
          slug: cat.path,
          products: filtered,
          totalCount: data?.totalCount ?? 0
        };
      })
      .filter((g) => g.products.length > 0)
  );

  const filteredGroups = $derived(
    homeSearch.activeCategory
      ? categoryGroups.filter((g) => g.cat.id === homeSearch.activeCategory)
      : categoryGroups
  );
</script>

<main class="py-4 pb-28">
  <div
    class="mx-auto mb-8 flex h-[98px] max-w-[74rem] items-center justify-center gap-12 rounded-lg bg-white px-6 shadow-sm"
  >
    <span class="text-base font-semibold text-[#0F172A]"
      >10% en tu primera compra</span
    >
    <span class="h-8 w-px bg-[#E2E8F0]"></span>
    <span class="text-base font-semibold text-[#0F172A]">Envios en el dia</span>
  </div>

  <CategoryFilter {categories} />
  {#if filteredGroups.length === 0}
    <HomeEmptyState query={homeSearch.query} />
  {:else}
    {#each filteredGroups as { cat, slug, products, totalCount } (cat.id)}
      <CategoryCarousel title={cat.name} {slug} {products} {totalCount} />
    {/each}
  {/if}
</main>
