<script lang="ts">
  import { Plus } from 'lucide-svelte';

  import { Button } from '$lib/components/ui/button';

  interface Props {
    onCreate: () => void;
  }

  let { onCreate }: Props = $props();
</script>

<div class="border-b border-slate-100 bg-white px-7 py-6">
  <div class="flex items-start justify-between gap-4">
    <div>
      <h1 class="text-2xl font-bold tracking-tight text-slate-900">Catálogo</h1>
      <p class="mt-0.5 text-sm text-slate-500">Gestioná tus productos</p>
    </div>
    <Button onclick={onCreate}>
      <Plus class="size-4" />
      Nuevo Producto
    </Button>
  </div>
</div>
