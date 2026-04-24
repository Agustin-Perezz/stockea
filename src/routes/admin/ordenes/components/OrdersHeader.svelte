<script lang="ts">
  import { ORDERS } from '$lib/mocks/data';

  let selectedStatus = $state('all');
</script>

<header
  class="flex items-center justify-between border-b border-[#E2E8F0] bg-white px-6 py-4"
>
  <div>
    <h1
      class="text-base font-semibold text-[#0F172A]"
      style="font-family: 'Rubik', sans-serif;"
    >
      Panel de Órdenes
    </h1>
    <p class="mt-0.5 text-xs text-[#64748B]">{ORDERS.length} órdenes activas</p>
  </div>
  <select
    bind:value={selectedStatus}
    class="w-44 rounded-md border border-[#E2E8F0] bg-white px-3 py-2 text-sm text-[#0F172A] shadow-sm focus:outline-none"
  >
    <option value="all">Todos los estados</option>
    <option value="pendiente">Pendiente</option>
    <option value="preparacion">En Preparación</option>
    <option value="camino">En Camino</option>
  </select>
</header>
