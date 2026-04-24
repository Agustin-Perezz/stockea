<script lang="ts">
  import { page } from '$app/state';

  import { getOrderById } from '$lib/mocks/data';
  import OrderDetailContent from './components/OrderDetailContent.svelte';
  import OrderHeader from './components/OrderHeader.svelte';

  const order = getOrderById(page.params.id ?? '');
</script>

<div
  class="min-h-dvh bg-[#F8FAFC]"
  style="font-family: 'Nunito Sans', sans-serif;"
>
  {#if !order}
    <div
      class="flex flex-col items-center justify-center px-8 py-24 text-center"
    >
      <p class="text-sm text-[#64748B]">Orden no encontrada.</p>
      <a
        href="/admin/ordenes"
        class="mt-4 text-sm font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
        >← Volver a órdenes</a
      >
    </div>
  {:else}
    <OrderHeader {order} />
    <OrderDetailContent {order} />
  {/if}
</div>
