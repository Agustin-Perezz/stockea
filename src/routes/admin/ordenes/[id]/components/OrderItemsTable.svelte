<script lang="ts">
  import type { OrderItem } from '$lib/mocks/data';
  import OrderItemsDesktopTable from './OrderItemsDesktopTable.svelte';
  import OrderItemsMobileList from './OrderItemsMobileList.svelte';

  interface Props {
    items: OrderItem[];
    fulfilledQtys: number[];
  }
  let { items, fulfilledQtys = $bindable() }: Props = $props();
</script>

<div class="mb-4 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">
  <OrderItemsDesktopTable {items} bind:fulfilledQtys />
  <OrderItemsMobileList {items} bind:fulfilledQtys />
</div>
