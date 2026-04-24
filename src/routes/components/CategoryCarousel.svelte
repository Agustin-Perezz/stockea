<script lang="ts">
  import { ChevronRight } from 'lucide-svelte';

  import ProductCard from '$lib/components/product/ProductCard.svelte';
  import type { Product } from '$lib/mocks/data';

  interface Props {
    title: string;
    slug: string;
    products: Product[];
    pageSize?: number;
  }

  let { title, slug, products, pageSize }: Props = $props();

  let page = $state(0);
  const totalPages = $derived(
    pageSize ? Math.ceil(products.length / pageSize) : 1
  );
  const visible = $derived(
    pageSize ? products.slice(page * pageSize, (page + 1) * pageSize) : products
  );
  const hasMore = $derived(pageSize ? products.length > pageSize : false);

  function next() {
    page = (page + 1) % totalPages;
  }
</script>

<section class="mb-6">
  <div class="mx-auto mb-3 flex max-w-5xl items-center gap-2 px-4">
    <h2
      class="text-[17px] font-semibold text-[#0F172A]"
      style="font-family: 'Rubik', sans-serif;"
    >
      {title}
    </h2>
    <a href="/categoria/{slug}" class="text-sm font-semibold text-[#2563EB]"
      >Ver más</a
    >
  </div>

  <!-- Mobile: horizontal scroll -->
  <div
    class="flex gap-3 overflow-x-auto px-4 sm:hidden"
    style="scrollbar-width: none;"
  >
    {#each visible as product (product.id)}
      <div class="w-56 shrink-0">
        <ProductCard {product} />
      </div>
    {/each}
  </div>

  <!-- Desktop: paginated grid -->
  <div class="relative mx-auto hidden max-w-5xl px-4 sm:block">
    <div class="grid grid-cols-4 gap-4">
      {#each visible as product (product.id)}
        <ProductCard {product} />
      {/each}
    </div>

    {#if hasMore}
      <button
        onclick={next}
        class="absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#0F172A] shadow-md transition-colors hover:bg-[#F8FAFC]"
        aria-label="Ver más productos"
      >
        <ChevronRight size={18} />
      </button>
    {/if}
  </div>
</section>
