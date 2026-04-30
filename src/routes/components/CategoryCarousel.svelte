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

<section class="mb-8">
  <div
    class="mx-auto mb-4 flex max-w-[74rem] items-center justify-between px-4 md:px-0"
  >
    <h2 class="text-lg font-semibold" style="font-family: 'Rubik', sans-serif;">
      {title}
    </h2>
    <a href="/categoria/{slug}" class="text-sm font-semibold">Ver más</a>
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
  <div class="relative mx-auto hidden max-w-[74rem] lg:block">
    <div class="grid grid-cols-5 gap-4">
      {#each visible as product (product.id)}
        <ProductCard {product} />
      {/each}
    </div>

    {#if hasMore}
      <button
        onclick={next}
        class="absolute top-1/2 -right-8 z-10 flex h-16 w-16 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-[#00a0ff] shadow-sm transition-all hover:shadow-md lg:-right-10"
        aria-label="Ver más productos"
      >
        <ChevronRight size={38} />
      </button>
    {/if}
  </div>
</section>
