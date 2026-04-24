<script lang="ts">
  import {
    CATEGORY_SLUGS,
    DISPLAY_CATEGORIES,
    PRODUCTS
  } from '$lib/mocks/data';
  import { homeSearch } from '$lib/stores/homeSearch.svelte';
  import AdBanner from './AdBanner.svelte';
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
  <CategoryFilter />
  {#if filteredGroups.length === 0}
    <HomeEmptyState query={homeSearch.query} />
  {:else}
    {#each filteredGroups as { cat, slug, products }, i (cat)}
      <CategoryCarousel title={cat} {slug} {products} pageSize={4} />
      {#if i === 0}
        <AdBanner />
      {/if}
    {/each}
  {/if}
</main>
