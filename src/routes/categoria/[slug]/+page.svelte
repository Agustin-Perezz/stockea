<script lang="ts">
  import { page } from '$app/stores';
  import { ArrowLeft } from 'lucide-svelte';

  import CartBar from '$lib/components/layout/CartBar.svelte';
  import { PRODUCTS, SLUG_TO_CATEGORY } from '$lib/mocks/data';
  import ProductGrid from './components/ProductGrid.svelte';

  const category = $derived(SLUG_TO_CATEGORY[$page.params.slug]);
  const products = $derived(
    category ? PRODUCTS.filter((p) => p.category === category) : []
  );
</script>

<div
  class="min-h-dvh bg-[#F8FAFC]"
  style="font-family: 'Nunito Sans', sans-serif;"
>
  <header class="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white">
    <div class="flex h-14 items-center gap-3 px-4">
      <a
        href="/"
        class="-ml-1 rounded-lg p-1 text-[#0F172A] transition-colors hover:bg-[#F1F5F9]"
      >
        <ArrowLeft size={20} />
      </a>
      <span
        class="text-base font-semibold text-[#0F172A]"
        style="font-family: 'Rubik', sans-serif;"
      >
        {category ?? 'Categoría'}
      </span>
    </div>
  </header>

  <main class="mx-auto max-w-5xl px-4 py-4 pb-28">
    {#if !category}
      <p class="mt-20 text-center text-sm text-[#64748B]">
        Categoría no encontrada.
      </p>
    {:else}
      <ProductGrid {products} />
    {/if}
  </main>

  <CartBar />
</div>
