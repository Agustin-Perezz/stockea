<script lang="ts">
  import { AlertTriangle } from 'lucide-svelte';

  import { Button } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog';

  interface Props {
    open: boolean;
    productName: string;
    onClose: () => void;
    onConfirm: () => void;
  }

  let {
    open = $bindable(false),
    productName,
    onClose,
    onConfirm
  }: Props = $props();

  function handleConfirm() {
    console.log('[ProductDeleteConfirm] Eliminando producto:', productName);
    onConfirm();
    onClose();
  }
</script>

<Dialog.Root bind:open onOpenChange={(v) => !v && onClose()}>
  <Dialog.Content class="sm:max-w-md">
    <Dialog.Header>
      <div class="flex items-center gap-3">
        <div
          class="bg-destructive/10 flex h-10 w-10 items-center justify-center rounded-full"
        >
          <AlertTriangle class="text-destructive size-5" />
        </div>
        <Dialog.Title>Eliminar producto</Dialog.Title>
      </div>
      <Dialog.Description>
        ¿Estás seguro de que querés eliminar <strong>{productName}</strong>?
        Esta acción no se puede deshacer.
      </Dialog.Description>
    </Dialog.Header>

    <Dialog.Footer>
      <Button variant="outline" onclick={onClose}>Cancelar</Button>
      <Button variant="destructive" onclick={handleConfirm}>Eliminar</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
