<script lang="ts">
  import { Button } from '$lib/components/ui/button';

  let { onConfirm }: { onConfirm: () => void } = $props();
</script>

<div
  class="fixed right-0 bottom-0 left-0 z-50 border-t border-[#E2E8F0] bg-white p-4"
>
  <Button onclick={onConfirm} class="h-12 w-full">Confirmar Pedido</Button>
</div>
