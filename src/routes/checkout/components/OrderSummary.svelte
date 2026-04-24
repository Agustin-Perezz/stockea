<script lang="ts">
  import { formatARS } from '$lib/mocks/data';
  import { cart } from '$lib/stores/cart.svelte';

  interface Props {
    deliveryFee: number;
  }

  let { deliveryFee }: Props = $props();
</script>

<div
  class="flex flex-col gap-2 rounded-xl border border-[#E2E8F0] bg-white p-4"
>
  <div class="flex items-center justify-between text-sm">
    <span class="text-[#64748B]">Subtotal</span>
    <span class="font-medium text-[#0F172A] tabular-nums"
      >{formatARS(cart.total)}</span
    >
  </div>
  <div class="flex items-center justify-between text-sm">
    <span class="text-[#64748B]">Envío</span>
    <span class="font-medium text-[#16A34A] tabular-nums"
      >{deliveryFee === 0 ? 'Gratis' : formatARS(deliveryFee)}</span
    >
  </div>
  <div class="my-1 h-px bg-[#E2E8F0]"></div>
  <div class="flex items-center justify-between">
    <span class="text-sm font-semibold text-[#0F172A]">Total</span>
    <span
      class="text-lg font-bold text-[#0F172A] tabular-nums"
      style="font-family: 'Rubik', sans-serif;"
    >
      {formatARS(cart.total + deliveryFee)}
    </span>
  </div>
</div>
