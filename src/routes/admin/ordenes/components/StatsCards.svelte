<script lang="ts">
  import { Clock, DollarSign, ShoppingBag } from 'lucide-svelte';

  import { formatARS, ORDERS, orderTotal } from '$lib/mocks/data';

  const totalRevenue = ORDERS.reduce((sum, o) => sum + orderTotal(o.items), 0);
  const totalOrders = ORDERS.length;
  const pendingOrders = ORDERS.filter((o) => o.status === 'Pendiente').length;

  const cards = [
    {
      label: 'Ingresos Totales',
      value: formatARS(totalRevenue),
      sub: 'de todas las órdenes',
      icon: DollarSign,
      accent: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100'
    },
    {
      label: 'Órdenes Totales',
      value: String(totalOrders),
      sub: 'en el sistema',
      icon: ShoppingBag,
      accent: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-100'
    },
    {
      label: 'Órdenes Pendientes',
      value: String(pendingOrders),
      sub: 'aguardando preparación',
      icon: Clock,
      accent: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-100'
    }
  ];
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
  {#each cards as card (card.label)}
    <div
      class="flex items-start gap-4 rounded-xl border {card.border} bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div class="rounded-lg {card.bg} {card.accent} mt-0.5 shrink-0 p-2.5">
        <svelte:component this={card.icon} size={18} />
      </div>
      <div class="min-w-0">
        <p class="truncate text-xs font-medium text-slate-500">{card.label}</p>
        <p
          class="mt-1 text-2xl leading-none font-bold tracking-tight text-slate-900"
        >
          {card.value}
        </p>
        <p class="mt-1.5 text-[11px] text-slate-400">{card.sub}</p>
      </div>
    </div>
  {/each}
</div>
