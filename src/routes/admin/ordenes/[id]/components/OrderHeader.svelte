<script lang="ts">
  import { ArrowLeft } from 'lucide-svelte';

  import type { Order, OrderStatus } from '$lib/mocks/data';

  const statusColors: Record<OrderStatus, string> = {
    Pendiente: 'bg-[#FEF9C3] text-[#854D0E]',
    'En Preparación': 'bg-[#DBEAFE] text-[#1E40AF]',
    'En Camino': 'bg-[#DCFCE7] text-[#166534]',
    Entregado: 'bg-[#F1F5F9] text-[#64748B]'
  };

  let { order }: { order: Order } = $props();
</script>

<header class="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white">
  <div class="flex h-14 items-center gap-3 px-6">
    <a
      href="/admin/ordenes"
      class="-ml-1.5 rounded-lg p-1.5 text-[#0F172A] transition-colors duration-150 hover:bg-[#F1F5F9]"
      aria-label="Volver"
    >
      <ArrowLeft size={20} />
    </a>
    <div class="min-w-0 flex-1">
      <div class="flex flex-wrap items-center gap-2">
        <span
          class="text-sm font-semibold text-[#2563EB]"
          style="font-family: 'Rubik', sans-serif;">#{order.id}</span
        >
        <span class="truncate text-sm font-semibold text-[#0F172A]"
          >{order.clientName}</span
        >
        <span
          class="text-xs {statusColors[
            order.status
          ]} rounded-full px-2 py-0.5 font-medium">{order.status}</span
        >
      </div>
      <p class="truncate text-xs text-[#94A3B8]">{order.clientAddress}</p>
    </div>
  </div>
</header>
