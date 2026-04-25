<script lang="ts">
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { formatARS, type OrderItem } from '$lib/mocks/data';

  interface Props {
    items: OrderItem[];
    fulfilledQtys: number[];
  }
  let { items, fulfilledQtys = $bindable() }: Props = $props();
</script>

<div class="divide-y divide-[#F1F5F9] md:hidden">
  {#each items as item, i (item.name)}
    <div class="flex flex-col gap-2 p-4">
      <p class="text-sm font-semibold text-[#0F172A]">{item.name}</p>
      <div class="flex items-center justify-between">
        <span class="text-xs text-[#64748B]">Pedido: {item.requestedQty}</span>
        <span class="text-xs text-[#64748B]"
          >{formatARS(item.pricePerUnit)}/u</span
        >
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Label for="qty-{i}" class="text-xs font-medium text-[#64748B]"
            >Enviar:</Label
          >
          <Input
            id="qty-{i}"
            type="number"
            bind:value={fulfilledQtys[i]}
            min={0}
            max={item.requestedQty}
            class="w-20 text-right tabular-nums"
          />
        </div>
        <span class="text-sm font-semibold text-[#0F172A] tabular-nums">
          {formatARS((fulfilledQtys[i] ?? 0) * item.pricePerUnit)}
        </span>
      </div>
    </div>
  {/each}
</div>
