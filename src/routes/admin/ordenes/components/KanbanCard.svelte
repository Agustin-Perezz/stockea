<script lang="ts">
  import {
    elapsedTime,
    formatARS,
    STATUS_CLASSES,
    type Order
  } from '$lib/mocks/data';

  let { order }: { order: Order } = $props();
  const total = $derived(
    order.items.reduce((s, i) => s + i.fulfilledQty * i.pricePerUnit, 0)
  );
</script>

<div
  class="rounded-xl border border-[#E2E8F0] bg-white p-4 transition-all duration-150 hover:border-[#CBD5E1] hover:shadow-sm"
>
  <div class="mb-2 flex items-start justify-between">
    <span class="text-xs font-semibold text-[#2563EB]">#{order.id}</span>
    <span
      class="text-xs {STATUS_CLASSES[
        order.status
      ]} rounded-full px-2 py-0.5 font-medium">{order.status}</span
    >
  </div>
  <p class="mb-0.5 text-sm font-semibold text-[#0F172A]">{order.clientName}</p>
  <p class="text-xs text-[#94A3B8]">{elapsedTime(order.createdAt)}</p>
  <div
    class="mt-3 flex items-center justify-between border-t border-[#F1F5F9] pt-3"
  >
    <span class="text-sm font-semibold text-[#0F172A] tabular-nums"
      >{formatARS(total)}</span
    >
    <a
      href="/admin/ordenes/{order.id}"
      class="text-xs font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
    >
      Ver Detalle →
    </a>
  </div>
</div>
