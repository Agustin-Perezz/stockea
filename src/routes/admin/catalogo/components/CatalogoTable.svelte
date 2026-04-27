<script lang="ts">
  import { Pencil, Trash2 } from 'lucide-svelte';

  import { Badge } from '$lib/components/ui/badge';
  import { Button } from '$lib/components/ui/button';
  import * as Table from '$lib/components/ui/table';
  import { formatARS } from '$lib/mocks/data';

  interface Product {
    id: string;
    name: string;
    category: string;
    pricePerUnit: number;
    stock: number;
    estado: 'Activo' | 'Inactivo';
  }

  interface Props {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (product: Product) => void;
  }

  let { products, onEdit, onDelete }: Props = $props();
</script>

<div class="rounded-md border">
  <Table.Root class="min-w-160">
    <Table.Header>
      <Table.Row class="bg-muted/40">
        <Table.Head class="w-[30%]">Nombre</Table.Head>
        <Table.Head class="w-[15%]">Categoría</Table.Head>
        <Table.Head class="w-[15%]">Precio</Table.Head>
        <Table.Head class="w-[10%]">Stock</Table.Head>
        <Table.Head class="w-[15%]">Estado</Table.Head>
        <Table.Head class="w-[15%] text-right">Acciones</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each products as product (product.id)}
        <Table.Row class="group hover:bg-muted/30">
          <Table.Cell class="font-medium">{product.name}</Table.Cell>
          <Table.Cell class="text-muted-foreground"
            >{product.category}</Table.Cell
          >
          <Table.Cell>{formatARS(product.pricePerUnit)}</Table.Cell>
          <Table.Cell>{product.stock}</Table.Cell>
          <Table.Cell>
            {#if product.estado === 'Activo'}
              <Badge
                variant="default"
                class="border-emerald-200 bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
              >
                Activo
              </Badge>
            {:else}
              <Badge variant="outline" class="text-muted-foreground">
                Inactivo
              </Badge>
            {/if}
          </Table.Cell>
          <Table.Cell class="text-right">
            <div class="flex items-center justify-end gap-1">
              <Button
                variant="ghost"
                size="icon-sm"
                onclick={() => onEdit(product)}
                aria-label="Editar {product.name}"
              >
                <Pencil class="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon-sm"
                onclick={() => onDelete(product)}
                aria-label="Eliminar {product.name}"
              >
                <Trash2 class="text-destructive size-4" />
              </Button>
            </div>
          </Table.Cell>
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
