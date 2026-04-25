<script lang="ts">
  import AdminSidebar from './components/AdminSidebar.svelte';
  import OrdersHeader from './components/OrdersHeader.svelte';
  import OrdersTable from './components/OrdersTable.svelte';
  import StatsCards from './components/StatsCards.svelte';
</script>

<div class="flex min-h-dvh bg-slate-50">
  <AdminSidebar />
  <div class="flex min-w-0 flex-1 flex-col">
    <OrdersHeader />
    <main class="flex flex-col gap-6 p-7">
      <StatsCards />
      <OrdersTable />
    </main>
  </div>
</div>
