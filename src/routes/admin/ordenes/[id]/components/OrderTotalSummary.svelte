<script lang="ts">
  import { formatARS, type OrderItem } from '$lib/mocks/data';

  interface Props {
    items: OrderItem[];
    fulfilledQtys: number[];
  }

  let { items, fulfilledQtys }: Props = $props();

  const dynamicTotal = $derived(
    items.reduce(
      (sum, item, i) => sum + (fulfilledQtys[i] ?? 0) * item.pricePerUnit,
      0
    )
  );
  const hasAdjustments = $derived(
    items.some((item, i) => (fulfilledQtys[i] ?? 0) < item.requestedQty)
  );
</script>

<div class="mb-4 rounded-xl border border-[#E2E8F0] bg-white p-4">
  <div class="flex items-center justify-between">
    <span class="text-sm text-[#64748B]">Total calculado</span>
    <span
      class="text-xl font-bold text-[#0F172A] tabular-nums"
      style="font-family: 'Inter', sans-serif;"
    >
      {formatARS(dynamicTotal)}
    </span>
  </div>
  {#if hasAdjustments}
    <p class="mt-1.5 text-xs text-[#F97316]">
      ⚠ Algunas cantidades fueron ajustadas
    </p>
  {/if}
</div>
