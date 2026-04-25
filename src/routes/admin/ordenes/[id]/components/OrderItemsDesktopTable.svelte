<script lang="ts">
  import { Input } from '$lib/components/ui/input';
  import * as Table from '$lib/components/ui/table';
  import { formatARS, type OrderItem } from '$lib/mocks/data';

  interface Props {
    items: OrderItem[];
    fulfilledQtys: number[];
  }
  let { items, fulfilledQtys = $bindable() }: Props = $props();
</script>

<div class="hidden overflow-x-auto md:block">
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head>Producto</Table.Head>
        <Table.Head class="text-right">Cant. Pedida</Table.Head>
        <Table.Head class="text-right">Cant. Enviada</Table.Head>
        <Table.Head class="text-right">Precio</Table.Head>
        <Table.Head class="text-right">Subtotal</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each items as item, i (item.name)}
        <Table.Row>
          <Table.Cell class="font-medium text-[#0F172A]">{item.name}</Table.Cell
          >
          <Table.Cell class="text-right text-[#64748B] tabular-nums"
            >{item.requestedQty}</Table.Cell
          >
          <Table.Cell class="text-right">
            <Input
              type="number"
              bind:value={fulfilledQtys[i]}
              min={0}
              max={item.requestedQty}
              class="w-20 text-right tabular-nums"
            />
          </Table.Cell>
          <Table.Cell class="text-right text-[#64748B] tabular-nums"
            >{formatARS(item.pricePerUnit)}</Table.Cell
          >
          <Table.Cell
            class="text-right font-semibold text-[#0F172A] tabular-nums"
          >
            {formatARS((fulfilledQtys[i] ?? 0) * item.pricePerUnit)}
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
