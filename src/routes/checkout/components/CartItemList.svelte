<script lang="ts">
  import { Trash2 } from 'lucide-svelte';

  import { formatARS } from '$lib/mocks/data';
  import { cart } from '$lib/stores/cart.svelte';
</script>

<div class="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">
  {#each cart.items as item, i (item.product.id)}
    <div
      class="flex items-center gap-3 px-4 py-3.5 {i < cart.items.length - 1
        ? 'border-b border-[#F1F5F9]'
        : ''}"
    >
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-medium text-[#0F172A]">
          {item.product.name}
        </p>
        <p class="mt-0.5 text-xs text-[#64748B]">
          {item.qty} × {formatARS(item.product.pricePerUnit)}
        </p>
      </div>
      <span
        class="shrink-0 text-sm font-semibold text-[#0F172A] tabular-nums"
        style="font-family: 'Rubik', sans-serif;"
      >
        {formatARS(item.product.pricePerUnit * item.qty)}
      </span>
      <button
        onclick={() => cart.removeItem(item.product.id)}
        class="shrink-0 cursor-pointer rounded-lg p-1.5 text-[#94A3B8] transition-colors duration-150 hover:bg-[#FEF2F2] hover:text-[#DC2626]"
        aria-label="Eliminar {item.product.name}"
      >
        <Trash2 size={15} />
      </button>
    </div>
  {/each}
</div>
