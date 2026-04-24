<script lang="ts">
  import AdminSidebar from './components/AdminSidebar.svelte';
  import KanbanBoard from './components/KanbanBoard.svelte';
  import OrdersHeader from './components/OrdersHeader.svelte';
</script>

<div
  class="flex min-h-dvh bg-[#F8FAFC]"
  style="font-family: 'Nunito Sans', sans-serif;"
>
  <AdminSidebar />
  <div class="flex min-w-0 flex-1 flex-col">
    <OrdersHeader />
    <KanbanBoard />
  </div>
</div>
