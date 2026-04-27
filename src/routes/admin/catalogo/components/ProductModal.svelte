<script lang="ts">
  import { superForm, type SuperValidated } from 'sveltekit-superforms';
  import { zod4Client } from 'sveltekit-superforms/adapters';

  import { Button } from '$lib/components/ui/button';
  import * as Dialog from '$lib/components/ui/dialog';
  import ProductFormFields from './ProductFormFields.svelte';
  import { productSchema, type ProductFormData } from '../product.schema';

  interface Props {
    open: boolean;
    mode: 'create' | 'edit';
    product?: { id: string } & ProductFormData;
    productForm: SuperValidated<ProductFormData>;
    onClose: () => void;
  }

  let {
    open = $bindable(false),
    mode,
    product,
    productForm,
    onClose
  }: Props = $props();

  const { form, errors, enhance, reset } = superForm(productForm, {
    validators: zod4Client(productSchema),
    resetForm: false,
    SPA: true,
    onUpdate: ({ form: f }) => {
      if (!f.valid) return;
      console.log('[ProductModal] Guardando:', {
        mode,
        id: product?.id,
        ...f.data
      });
      onClose();
    }
  });

  $effect(() => {
    if (product) {
      reset({
        data: {
          name: product.name,
          category: product.category,
          pricePerUnit: product.pricePerUnit,
          stock: product.stock,
          estado: product.estado
        }
      });
    } else {
      reset();
    }
  });

  function handleClose() {
    reset();
    onClose();
  }
</script>

<Dialog.Root bind:open onOpenChange={(v) => !v && handleClose()}>
  <Dialog.Content class="sm:max-w-md">
    <Dialog.Header>
      <Dialog.Title>
        {mode === 'create' ? 'Crear Producto' : 'Editar Producto'}
      </Dialog.Title>
      <Dialog.Description>
        {mode === 'create'
          ? 'Completá los datos para crear un nuevo producto.'
          : 'Modificá los datos del producto.'}
      </Dialog.Description>
    </Dialog.Header>

    <form id="product-form" use:enhance>
      <ProductFormFields
        name={$form.name}
        category={$form.category}
        pricePerUnit={$form.pricePerUnit}
        stock={$form.stock}
        estado={$form.estado}
        errors={{
          name: $errors.name?.[0],
          category: $errors.category?.[0],
          pricePerUnit: $errors.pricePerUnit?.[0],
          stock: $errors.stock?.[0]
        }}
        onNameChange={(v) => ($form.name = v)}
        onCategoryChange={(v) => ($form.category = v)}
        onPriceChange={(v) => ($form.pricePerUnit = v)}
        onStockChange={(v) => ($form.stock = v)}
        onEstadoChange={(v) => ($form.estado = v)}
      />
    </form>

    <Dialog.Footer>
      <Button variant="outline" onclick={handleClose}>Cancelar</Button>
      <Button type="submit" form="product-form">
        {mode === 'create' ? 'Crear' : 'Guardar'}
      </Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
