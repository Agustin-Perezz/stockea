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

<div class="mb-4 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">
  <!-- Desktop table -->
  <div class="hidden overflow-x-auto md:block">
    <table class="w-full text-sm">
      <thead>
        <tr class="border-b border-[#F1F5F9]">
          <th
            class="px-4 py-3 text-left text-xs font-semibold tracking-wide text-[#64748B] uppercase"
            >Producto</th
          >
          <th
            class="px-4 py-3 text-right text-xs font-semibold tracking-wide text-[#64748B] uppercase"
            >Cant. Pedida</th
          >
          <th
            class="px-4 py-3 text-right text-xs font-semibold tracking-wide text-[#64748B] uppercase"
            >Cant. Enviada</th
          >
          <th
            class="px-4 py-3 text-right text-xs font-semibold tracking-wide text-[#64748B] uppercase"
            >Precio</th
          >
          <th
            class="px-4 py-3 text-right text-xs font-semibold tracking-wide text-[#64748B] uppercase"
            >Subtotal</th
          >
        </tr>
      </thead>
      <tbody>
        {#each items as item, i (item.name)}
          <tr class="border-b border-[#F8FAFC] last:border-none">
            <td class="px-4 py-3.5 font-medium text-[#0F172A]">{item.name}</td>
            <td class="px-4 py-3.5 text-right text-[#64748B] tabular-nums"
              >{item.requestedQty}</td
            >
            <td class="px-4 py-3.5 text-right">
              <Input
                type="number"
                bind:value={fulfilledQtys[i]}
                min={0}
                max={item.requestedQty}
                class="w-20 text-right tabular-nums"
              />
            </td>
            <td class="px-4 py-3.5 text-right text-[#64748B] tabular-nums"
              >{formatARS(item.pricePerUnit)}</td
            >
            <td
              class="px-4 py-3.5 text-right font-semibold text-[#0F172A] tabular-nums"
              style="font-family: 'Rubik', sans-serif;"
            >
              {formatARS((fulfilledQtys[i] ?? 0) * item.pricePerUnit)}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- Mobile list -->
  <div class="divide-y divide-[#F1F5F9] md:hidden">
    {#each items as item, i (item.name)}
      <div class="flex flex-col gap-2 p-4">
        <p class="text-sm font-semibold text-[#0F172A]">{item.name}</p>
        <div class="flex items-center justify-between">
          <span class="text-xs text-[#64748B]">Pedido: {item.requestedQty}</span
          >
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
          <span
            class="text-sm font-semibold text-[#0F172A] tabular-nums"
            style="font-family: 'Rubik', sans-serif;"
          >
            {formatARS((fulfilledQtys[i] ?? 0) * item.pricePerUnit)}
          </span>
        </div>
      </div>
    {/each}
  </div>
</div>
