<script lang="ts">
  import { ChevronDown } from 'lucide-svelte';

  import { ORDERS } from '$lib/mocks/data';
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
  <div class="relative">
    <select
      class="cursor-pointer appearance-none rounded-lg border border-[#E2E8F0] bg-white py-2 pr-8 pl-3 text-sm text-[#0F172A] transition-colors outline-none hover:border-[#CBD5E1] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
    >
      <option>Todos los estados</option>
      <option>Pendiente</option>
      <option>En Preparación</option>
      <option>En Camino</option>
    </select>
    <ChevronDown
      size={14}
      class="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-[#94A3B8]"
    />
  </div>
</header>
