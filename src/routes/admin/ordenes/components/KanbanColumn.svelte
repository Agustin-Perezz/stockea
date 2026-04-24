<script lang="ts">
  import {
    elapsedTime,
    formatARS,
    type Order,
    type OrderStatus
  } from '$lib/mocks/data';

  const statusColors: Record<OrderStatus, string> = {
    Pendiente: 'bg-[#FEF9C3] text-[#854D0E]',
    'En Preparación': 'bg-[#DBEAFE] text-[#1E40AF]',
    'En Camino': 'bg-[#DCFCE7] text-[#166534]',
    Entregado: 'bg-[#F1F5F9] text-[#64748B]'
  };

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
      {@const total = order.items.reduce(
        (s, i) => s + i.fulfilledQty * i.pricePerUnit,
        0
      )}
      <div
        class="rounded-xl border border-[#E2E8F0] bg-white p-4 transition-all duration-150 hover:border-[#CBD5E1] hover:shadow-sm"
      >
        <div class="mb-2 flex items-start justify-between">
          <span
            class="text-xs font-semibold text-[#2563EB]"
            style="font-family: 'Rubik', sans-serif;"
          >
            #{order.id}
          </span>
          <span
            class="text-xs {statusColors[
              order.status
            ]} rounded-full px-2 py-0.5 font-medium"
          >
            {order.status}
          </span>
        </div>
        <p class="mb-0.5 text-sm font-semibold text-[#0F172A]">
          {order.clientName}
        </p>
        <p class="text-xs text-[#94A3B8]">{elapsedTime(order.createdAt)}</p>
        <div
          class="mt-3 flex items-center justify-between border-t border-[#F1F5F9] pt-3"
        >
          <span
            class="text-sm font-semibold text-[#0F172A] tabular-nums"
            style="font-family: 'Rubik', sans-serif;"
          >
            {formatARS(total)}
          </span>
          <a
            href="/admin/ordenes/{order.id}"
            class="text-xs font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
          >
            Ver Detalle →
          </a>
        </div>
      </div>
    {/each}
  </div>
</div>
