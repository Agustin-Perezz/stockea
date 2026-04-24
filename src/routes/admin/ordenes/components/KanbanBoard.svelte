<script lang="ts">
  import { KANBAN_COLUMNS, ORDERS } from '$lib/mocks/data';
  import KanbanColumn from './KanbanColumn.svelte';

  const columnGroups = $derived(
    KANBAN_COLUMNS.map((col) => ({
      ...col,
      orders: ORDERS.filter((o) => o.status === col.status)
    }))
  );
</script>

<main class="flex-1 overflow-auto p-6">
  <div class="flex min-w-[640px] items-start gap-4">
    {#each columnGroups as col (col.status)}
      <KanbanColumn label={col.label} orders={col.orders} />
    {/each}
  </div>
</main>
