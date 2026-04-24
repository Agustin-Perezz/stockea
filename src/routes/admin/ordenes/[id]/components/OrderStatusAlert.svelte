<script lang="ts">
  let { actionState }: { actionState: 'idle' | 'en-camino' | 'entregado' } =
    $props();
</script>

{#if actionState === 'entregado'}
  <div
    class="mb-6 rounded-xl border border-[#BBF7D0] bg-[#DCFCE7] p-5 text-center"
  >
    <p class="text-sm font-semibold text-[#166534]">
      ✓ Orden cerrada como Entregada y Cobrada
    </p>
  </div>
{:else if actionState === 'en-camino'}
  <div
    class="mb-6 rounded-xl border border-[#BFDBFE] bg-[#DBEAFE] p-5 text-center"
  >
    <p class="text-sm font-semibold text-[#1E40AF]">
      Orden marcada como En Camino
    </p>
  </div>
{/if}
