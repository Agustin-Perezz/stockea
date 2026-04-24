<script lang="ts">
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger
  } from '$lib/components/ui/select';
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
  <Select bind:value={selectedStatus}>
    <SelectTrigger class="w-44 text-sm">
      {selectedStatus === 'all'
        ? 'Todos los estados'
        : selectedStatus === 'pendiente'
          ? 'Pendiente'
          : selectedStatus === 'preparacion'
            ? 'En Preparación'
            : 'En Camino'}
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="all">Todos los estados</SelectItem>
      <SelectItem value="pendiente">Pendiente</SelectItem>
      <SelectItem value="preparacion">En Preparación</SelectItem>
      <SelectItem value="camino">En Camino</SelectItem>
    </SelectContent>
  </Select>
</header>
