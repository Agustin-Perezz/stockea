<script lang="ts">
  let { onConfirm }: { onConfirm: () => void } = $props();
</script>

<div
  class="fixed right-0 bottom-0 left-0 z-50 border-t border-[#E2E8F0] bg-white p-4"
>
  <button
    onclick={onConfirm}
    class="w-full cursor-pointer rounded-xl bg-[#2563EB] py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8]"
    style="font-family: 'Rubik', sans-serif;"
  >
    Confirmar Pedido
  </button>
</div>
