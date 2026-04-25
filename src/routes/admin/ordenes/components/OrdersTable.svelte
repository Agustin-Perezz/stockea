<script lang="ts">
  import { ORDERS, type OrderStatus } from '$lib/mocks/data';
  import OrdersFilterBar from './OrdersFilterBar.svelte';
  import OrdersTableBody from './OrdersTableBody.svelte';

  const statuses = [
    { value: 'all', label: 'Todos' },
    { value: 'Pendiente', label: 'Pendiente' },
    { value: 'En Preparación', label: 'En Preparación' },
    { value: 'En Camino', label: 'En Camino' },
    { value: 'Entregado', label: 'Entregado' }
  ];

  let statusFilter = $state('all');
  const filtered = $derived(
    statusFilter === 'all'
      ? ORDERS
      : ORDERS.filter((o) => o.status === (statusFilter as OrderStatus))
  );
</script>

<div class="flex flex-col gap-4">
  <OrdersFilterBar
    {statuses}
    {statusFilter}
    count={filtered.length}
    onFilterChange={(v) => (statusFilter = v)}
  />
  <OrdersTableBody orders={filtered} />
</div>
