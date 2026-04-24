<script lang="ts">
  import { Info } from 'lucide-svelte';

  import { cart } from '$lib/stores/cart.svelte';
  import CartItemList from './CartItemList.svelte';
  import CheckoutEmptyState from './CheckoutEmptyState.svelte';
  import CheckoutFooter from './CheckoutFooter.svelte';
  import OrderConfirmed from './OrderConfirmed.svelte';
  import OrderSummary from './OrderSummary.svelte';

  const DELIVERY_FEE = 0;
  let confirmed = $state(false);

  function confirm() {
    confirmed = true;
    cart.clear();
  }
</script>

{#if confirmed}
  <OrderConfirmed />
{:else if cart.items.length === 0}
  <CheckoutEmptyState />
{:else}
  <main class="flex flex-col gap-4 px-4 py-4 pb-32">
    <CartItemList />
    <OrderSummary deliveryFee={DELIVERY_FEE} />
    <div class="flex gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
      <Info size={16} class="mt-0.5 shrink-0 text-[#64748B]" />
      <p class="text-xs leading-relaxed text-[#64748B]">
        El pago se realiza al momento de la entrega. No se requiere tarjeta
        ahora.
      </p>
    </div>
  </main>
  <CheckoutFooter onConfirm={confirm} />
{/if}
