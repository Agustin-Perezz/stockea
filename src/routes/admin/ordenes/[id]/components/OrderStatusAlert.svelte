<script lang="ts">
  import { Alert } from '$lib/components/ui/alert';

  let { actionState }: { actionState: 'idle' | 'en-camino' | 'entregado' } =
    $props();
</script>

{#if actionState === 'entregado'}
  <Alert class="mb-6 border-[#BBF7D0] bg-[#DCFCE7] text-center text-[#166534]">
    <p class="text-sm font-semibold">
      ✓ Orden cerrada como Entregada y Cobrada
    </p>
  </Alert>
{:else if actionState === 'en-camino'}
  <Alert class="mb-6 border-[#BFDBFE] bg-[#DBEAFE] text-center text-[#1E40AF]">
    <p class="text-sm font-semibold">Orden marcada como En Camino</p>
  </Alert>
{/if}
