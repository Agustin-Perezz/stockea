<script lang="ts">
  import { Button } from '$lib/components/ui/button';

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
    <Button onclick={onEnCamino} variant="outline" class="flex-1 lg:flex-none">
      Marcar En Camino
    </Button>
    <Button onclick={onEntregado} class="flex-1 lg:flex-none">
      Cerrar: Entregado y Cobrado
    </Button>
  </div>
</div>
