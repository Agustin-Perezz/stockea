<script lang="ts">
  import type { Order } from '$lib/mocks/data';
  import KanbanCard from './KanbanCard.svelte';

  interface Props {
    label: string;
    orders: Order[];
  }

  let { label, orders }: Props = $props();
</script>

<div class="min-w-[200px] flex-1">
  <div class="mb-3 flex items-center gap-2">
    <h2 class="text-xs font-semibold tracking-wide text-[#64748B] uppercase">
      {label}
    </h2>
    <span
      class="rounded-full bg-[#F1F5F9] px-1.5 py-0.5 text-xs font-medium text-[#64748B] tabular-nums"
    >
      {orders.length}
    </span>
  </div>

  <div class="flex flex-col gap-2.5">
    {#each orders as order (order.id)}
      <KanbanCard {order} />
    {/each}
  </div>
</div>
