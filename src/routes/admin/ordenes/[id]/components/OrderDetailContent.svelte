<script lang="ts">
  import { untrack } from 'svelte';

  import type { Order } from '$lib/mocks/data';
  import OrderActionBar from './OrderActionBar.svelte';
  import OrderItemsTable from './OrderItemsTable.svelte';
  import OrderStatusAlert from './OrderStatusAlert.svelte';
  import OrderTotalSummary from './OrderTotalSummary.svelte';

  let { order }: { order: Order } = $props();

  let fulfilledQtys = $state(
    untrack(() => order.items.map((item) => item.requestedQty))
  );
  let actionState = $state<'idle' | 'en-camino' | 'entregado'>('idle');
</script>

<main class="mx-auto max-w-4xl px-4 py-6 pb-28 lg:px-6">
  <OrderStatusAlert {actionState} />
  <OrderItemsTable items={order.items} bind:fulfilledQtys />
  <OrderTotalSummary items={order.items} {fulfilledQtys} />
</main>

<OrderActionBar
  onEnCamino={() => (actionState = 'en-camino')}
  onEntregado={() => (actionState = 'entregado')}
/>
