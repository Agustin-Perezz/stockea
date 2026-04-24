<script lang="ts">
  interface Props {
    onEnCamino: () => void;
    onEntregado: () => void;
  }

  let { onEnCamino, onEntregado }: Props = $props();
</script>

<div
  class="fixed right-0 bottom-0 left-0 z-50 border-t border-[#E2E8F0] bg-white px-4 py-3"
>
  <div class="mx-auto flex max-w-4xl justify-end gap-2.5">
    <button
      onclick={onEnCamino}
      class="flex-1 cursor-pointer rounded-xl border border-[#E2E8F0] px-4 py-2.5 text-sm font-semibold text-[#0F172A] transition-colors duration-150 hover:bg-[#F8FAFC] lg:flex-none"
      style="font-family: 'Rubik', sans-serif;"
    >
      Marcar En Camino
    </button>
    <button
      onclick={onEntregado}
      class="flex-1 cursor-pointer rounded-xl bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] lg:flex-none"
      style="font-family: 'Rubik', sans-serif;"
    >
      Cerrar: Entregado y Cobrado
    </button>
  </div>
</div>
