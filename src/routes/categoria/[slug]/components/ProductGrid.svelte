<script lang="ts">
  import ProductCard from '$lib/components/product/ProductCard.svelte';
  import type { Product } from '$lib/mocks/data';

  interface Props {
    products: Product[];
  }

  let { products }: Props = $props();
</script>

<div
  class="grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
>
  {#each products as product (product.id)}
    <ProductCard {product} />
  {/each}
</div>
