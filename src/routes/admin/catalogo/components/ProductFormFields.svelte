<script lang="ts">
  import FormField from '$lib/components/ui/form-field/form-field.svelte';
  import * as Select from '$lib/components/ui/select';
  import { DISPLAY_CATEGORIES } from '$lib/mocks/data';

  interface Props {
    name: string;
    category: string;
    pricePerUnit: number;
    stock: number;
    estado: 'Activo' | 'Inactivo';
    errors?: {
      name?: string;
      category?: string;
      pricePerUnit?: string;
      stock?: string;
      estado?: string;
    };
    onNameChange: (v: string) => void;
    onCategoryChange: (v: string) => void;
    onPriceChange: (v: number) => void;
    onStockChange: (v: number) => void;
    onEstadoChange: (v: 'Activo' | 'Inactivo') => void;
  }

  let {
    name,
    category,
    pricePerUnit,
    stock,
    estado,
    errors = {},
    onNameChange,
    onCategoryChange,
    onPriceChange,
    onStockChange,
    onEstadoChange
  }: Props = $props();

  let categoryValue = $derived(category);

  let priceStr = $state('');
  let stockStr = $state('');

  $effect(() => {
    priceStr = pricePerUnit ? String(pricePerUnit) : '';
    stockStr = stock ? String(stock) : '';
  });

  function handlePriceInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    priceStr = val;
    const parsed = parseFloat(val);
    if (!isNaN(parsed)) onPriceChange(parsed);
  }

  function handleStockInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    stockStr = val;
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed)) onStockChange(parsed);
  }
</script>

<div class="flex flex-col gap-4">
  <FormField
    label="Nombre"
    name="name"
    type="text"
    value={name}
    error={errors.name}
    oninput={(e) => onNameChange((e.target as HTMLInputElement).value)}
  />

  <div class="grid gap-2">
    <label class="text-sm font-medium" for="category">Categoría</label>
    <Select.Root
      type="single"
      value={categoryValue}
      onValueChange={(v) => onCategoryChange(v)}
    >
      <Select.Trigger id="category" name="category">
        <span class={categoryValue ? '' : 'text-muted-foreground'}>
          {categoryValue || 'Seleccionar categoría'}
        </span>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Group>
            <Select.Label>Categorías</Select.Label>
            {#each DISPLAY_CATEGORIES as cat (cat)}
              <Select.Item value={cat}>{cat}</Select.Item>
            {/each}
          </Select.Group>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
    {#if errors.category}
      <p class="text-destructive text-sm">{errors.category}</p>
    {/if}
  </div>

  <FormField
    label="Precio por unidad ($)"
    name="pricePerUnit"
    type="text"
    value={priceStr}
    error={errors.pricePerUnit}
    oninput={handlePriceInput}
  />

  <FormField
    label="Stock"
    name="stock"
    type="text"
    value={stockStr}
    error={errors.stock}
    oninput={handleStockInput}
  />

  <div class="grid gap-2">
    <label class="text-sm font-medium" for="estado">Estado</label>
    <Select.Root
      type="single"
      value={estado}
      onValueChange={(v) => onEstadoChange(v as 'Activo' | 'Inactivo')}
    >
      <Select.Trigger id="estado" name="estado">
        <span class={estado ? '' : 'text-muted-foreground'}>
          {estado || 'Seleccionar estado'}
        </span>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Item value="Activo">Activo</Select.Item>
          <Select.Item value="Inactivo">Inactivo</Select.Item>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
    {#if errors.estado}
      <p class="text-destructive text-sm">{errors.estado}</p>
    {/if}
  </div>
</div>
