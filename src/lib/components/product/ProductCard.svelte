<script lang="ts">
  import { optimize } from '$lib/image';
  import { formatARS } from '$lib/shared/domain/format.utils';
  import {
    discountPct,
    type ProductData
  } from '$lib/shared/domain/product.types';
  import { cart } from '$lib/stores/cart.svelte';

  interface Props {
    product: ProductData;
  }

  let { product }: Props = $props();

  const qty = $derived(cart.getQty(product.id));
  const pct = $derived(discountPct(product));
</script>

<div
  class="group flex h-full flex-col overflow-hidden rounded-lg border border-[#E8ECF0] bg-white transition-all duration-200 hover:border-[#D0D5DD]"
>
  <div class="relative h-1/2 shrink-0 bg-[#FAFAFA]">
    {#if product.imageUrl}
      <img
        src={product.imageUrl}
        srcset={optimize(product.imageUrl)}
        alt={product.name}
        class="h-full w-full object-contain p-4 transition-transform duration-200 group-hover:scale-[1.02]"
      />
    {:else}
      <div
        class="flex h-full w-full items-center justify-center text-[#94A3B8]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          ><path
            d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
          /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg
        >
      </div>
    {/if}
  </div>

  <div class="flex flex-1 flex-col gap-1 border-t border-[#F0F0F0] p-3">
    <p
      class="line-clamp-2 text-[13px] leading-snug font-medium text-[#1E293B] md:text-[13px]"
    >
      {product.name}
    </p>

    {#if product.originalPrice}
      <p class="text-[11px] text-[#94A3B8] line-through">
        {formatARS(product.originalPrice)}
      </p>
    {/if}

    <div class="flex flex-wrap items-baseline gap-1.5">
      <span class="text-[15px] font-medium text-[#0F172A] md:text-[15px]"
        >{formatARS(product.pricePerUnit)}</span
      >
      {#if pct}
        <span
          class="rounded-sm bg-[#16A34A] px-1.5 py-0.5 text-[10px] font-semibold text-white"
          >{pct}% OFF</span
        >
      {/if}
    </div>

    {#if product.deliveryLabel}
      <span class="text-[11px] font-normal text-[#64748B]">
        {product.deliveryLabel}
      </span>
    {/if}

    <div class="mt-auto pt-1">
      {#if qty === 0}
        <button
          onclick={() => cart.setQty(product, 1)}
          class="w-full cursor-pointer rounded-md border border-[#0F172A] bg-white px-3 py-[7px] text-[13px] font-medium text-[#0F172A] transition-colors hover:bg-[#0F172A] hover:text-white"
        >
          Agregar
        </button>
      {:else}
        <div
          class="flex items-center justify-center overflow-hidden rounded-md border border-[#E2E8F0]"
        >
          <button
            onclick={() => cart.setQty(product, qty - 1)}
            class="flex h-8 w-8 cursor-pointer items-center justify-center text-sm text-[#64748B] transition-colors hover:bg-[#F8FAFC]"
            aria-label="Reducir">−</button
          >
          <span
            class="min-w-6 text-center text-[13px] font-semibold text-[#0F172A] tabular-nums"
            >{qty}</span
          >
          <button
            onclick={() => cart.setQty(product, qty + 1)}
            class="flex h-8 w-8 cursor-pointer items-center justify-center text-sm text-[#1E293B] transition-colors hover:bg-[#F8FAFC]"
            aria-label="Aumentar">+</button
          >
        </div>
      {/if}
    </div>
  </div>
</div>
