<script lang="ts">
  import {
    CATEGORY_SLUGS,
    DISPLAY_CATEGORIES,
    PRODUCTS
  } from '$lib/mocks/data';
  import { homeSearch } from '$lib/stores/homeSearch.svelte';
  import CategoryCarousel from './CategoryCarousel.svelte';
  import CategoryFilter from './CategoryFilter.svelte';
  import HomeEmptyState from './HomeEmptyState.svelte';

  const categoryGroups = $derived(
    DISPLAY_CATEGORIES.map((cat) => ({
      cat,
      slug: CATEGORY_SLUGS[cat],
      products: PRODUCTS.filter(
        (p) =>
          p.category === cat &&
          (homeSearch.query === '' ||
            p.name.toLowerCase().includes(homeSearch.query.toLowerCase()))
      )
    })).filter((g) => g.products.length > 0)
  );

  const filteredGroups = $derived(
    homeSearch.activeCategory
      ? categoryGroups.filter((g) => g.cat === homeSearch.activeCategory)
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
    <span class="text-base font-semibold text-[#0F172A]">Envíos en el día</span>
  </div>

  <CategoryFilter />
  {#if filteredGroups.length === 0}
    <HomeEmptyState query={homeSearch.query} />
  {:else}
    {#each filteredGroups as { cat, slug, products } (cat)}
      <CategoryCarousel title={cat} {slug} {products} />
    {/each}
  {/if}
</main>
