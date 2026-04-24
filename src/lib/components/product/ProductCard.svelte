<script lang="ts">
  import { ShoppingCart } from 'lucide-svelte';

  import { discountPct, formatARS, type Product } from '$lib/mocks/data';
  import { cart } from '$lib/stores/cart.svelte';

  interface Props {
    product: Product;
  }

  let { product }: Props = $props();

  const qty = $derived(cart.getQty(product.id));
  const pct = $derived(discountPct(product));
</script>

<div
  class="flex h-[430px] w-[227px] flex-col overflow-hidden rounded-xl border border-[#E5E5E5] bg-white shadow-sm"
>
  <!-- Image area -->
  <div class="relative h-1/2 shrink-0 bg-white">
    {#if product.imageUrl}
      <img
        src={product.imageUrl}
        alt={product.name}
        class="h-full w-full object-contain p-3"
      />
    {:else}
      <div class="flex h-full w-full items-center justify-center text-4xl">
        📦
      </div>
    {/if}

    <div class="absolute right-2 bottom-2">
      {#if qty === 0}
        <button
          onclick={() => cart.setQty(product, 1)}
          class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-[#2563EB] shadow-md transition-colors hover:bg-[#EFF6FF]"
          aria-label="Agregar al carrito"
        >
          <ShoppingCart size={18} />
        </button>
      {:else}
        <div
          class="flex items-center overflow-hidden rounded-full border border-[#E2E8F0] bg-white shadow-md"
        >
          <button
            onclick={() => cart.setQty(product, qty - 1)}
            class="flex h-8 w-8 cursor-pointer items-center justify-center text-base font-medium text-[#64748B] transition-colors hover:bg-[#F1F5F9]"
            aria-label="Reducir">−</button
          >
          <span
            class="min-w-6 text-center text-sm font-bold text-[#0F172A] tabular-nums"
            >{qty}</span
          >
          <button
            onclick={() => cart.setQty(product, qty + 1)}
            class="flex h-8 w-8 cursor-pointer items-center justify-center text-base font-medium text-[#2563EB] transition-colors hover:bg-[#EFF6FF]"
            aria-label="Aumentar">+</button
          >
        </div>
      {/if}
    </div>
  </div>

  <!-- Info -->
  <div class="flex flex-1 flex-col gap-1.5 p-3">
    {#if product.isBestSeller}
      <span
        class="self-start rounded bg-[#FF6B35] px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase"
      >
        Más vendido
      </span>
    {/if}

    <p class="line-clamp-2 text-sm leading-snug font-semibold text-[#0F172A]">
      {product.name}
    </p>

    {#if product.originalPrice}
      <p class="text-xs text-[#94A3B8] line-through">
        {formatARS(product.originalPrice)}
      </p>
    {/if}

    <div class="flex flex-wrap items-center gap-1.5">
      <span class="text-base font-bold text-[#0F172A]"
        >{formatARS(product.pricePerUnit)}</span
      >
      {#if pct}
        <span
          class="rounded bg-[#DCFCE7] px-1.5 py-0.5 text-[10px] font-semibold text-[#16A34A]"
          >{pct}% OFF</span
        >
      {/if}
    </div>

    {#if product.deliveryLabel}
      <span
        class="self-start rounded-full border border-[#86EFAC] px-2 py-0.5 text-[11px] font-medium text-[#16A34A]"
      >
        {product.deliveryLabel}
      </span>
    {/if}
  </div>
</div>
