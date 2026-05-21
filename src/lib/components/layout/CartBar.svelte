<script lang="ts">
  import { ShoppingCart } from 'lucide-svelte';

  import { formatARS } from '$lib/shared/domain/format.utils';
  import { cart } from '$lib/stores/cart.svelte';
</script>

{#if cart.count > 0}
  <div
    class="fixed right-0 bottom-0 left-0 z-50 px-4 pt-8 pb-3"
    style="background: linear-gradient(to top, #F8FAFC 60%, transparent);"
  >
    <a
      href="/checkout"
      class="flex w-full items-center justify-between rounded-lg bg-[#0F172A] px-4 py-2.5 text-white shadow-md transition-colors duration-150 hover:bg-[#1E293B]"
    >
      <div class="flex items-center gap-2">
        <ShoppingCart size={16} />
        <span class="text-[13px] font-medium"
          >{cart.count} {cart.count === 1 ? 'producto' : 'productos'}</span
        >
      </div>
      <span
        class="text-[13px] font-semibold"
        style="font-family: 'Rubik', sans-serif;"
      >
        Ver Carrito · {formatARS(cart.total)}
      </span>
    </a>
  </div>
{/if}
