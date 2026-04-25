<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';

  import * as Table from '$lib/components/ui/table';
  import { elapsedTime, STATUS_CLASSES, type Order } from '$lib/mocks/data';

  let { orders }: { orders: Order[] } = $props();
</script>

<div
  class="overflow-x-auto rounded-xl border border-slate-100 bg-white shadow-sm"
>
  <Table.Root class="min-w-[620px]">
    <Table.Header>
      <Table.Row class="bg-slate-50/70">
        <Table.Head>ID</Table.Head>
        <Table.Head>Kiosco / Cliente</Table.Head>
        <Table.Head>Estado</Table.Head>
        <Table.Head>Fecha</Table.Head>
        <Table.Head class="text-right">Acciones</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each orders as order (order.id)}
        <Table.Row class="group hover:bg-slate-50/80">
          <Table.Cell
            ><span class="font-mono text-xs font-semibold text-slate-500"
              >{order.id}</span
            ></Table.Cell
          >
          <Table.Cell>
            <span class="font-medium text-slate-800">{order.clientName}</span>
            <p class="mt-0.5 max-w-[180px] truncate text-[11px] text-slate-400">
              {order.clientAddress}
            </p>
          </Table.Cell>
          <Table.Cell>
            <span
              class="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold {STATUS_CLASSES[
                order.status
              ]}">{order.status}</span
            >
          </Table.Cell>
          <Table.Cell class="text-slate-500"
            >{elapsedTime(order.createdAt)}</Table.Cell
          >
          <Table.Cell class="text-right">
            <a
              href="/admin/ordenes/{order.id}"
              class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-xs transition-all hover:bg-slate-50 hover:text-slate-900"
            >
              Ver orden <ArrowRight size={12} />
            </a>
          </Table.Cell>
        </Table.Row>
      {/each}
      {#if orders.length === 0}
        <Table.Row>
          <Table.Cell colspan={5} class="py-12 text-center text-slate-400"
            >No hay órdenes para este estado.</Table.Cell
          >
        </Table.Row>
      {/if}
    </Table.Body>
  </Table.Root>
</div>
