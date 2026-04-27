<script lang="ts">
  import { ChevronsLeft, ChevronsRight } from 'lucide-svelte';

  import { Button } from '$lib/components/ui/button';
  import CatalogoHeader from './components/CatalogoHeader.svelte';
  import CatalogoTable from './components/CatalogoTable.svelte';
  import ProductDeleteConfirm from './components/ProductDeleteConfirm.svelte';
  import ProductModal from './components/ProductModal.svelte';
  import AdminSidebar from '../ordenes/components/AdminSidebar.svelte';

  let { data } = $props();

  interface Product {
    id: string;
    name: string;
    category: string;
    pricePerUnit: number;
    stock: number;
    estado: 'Activo' | 'Inactivo';
  }

  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Agua Mineral 500ml',
      category: 'Bebidas',
      pricePerUnit: 350,
      stock: 240,
      estado: 'Activo'
    },
    {
      id: '2',
      name: 'Gaseosa Cola 1.5L',
      category: 'Bebidas',
      pricePerUnit: 890,
      stock: 120,
      estado: 'Activo'
    },
    {
      id: '3',
      name: 'Jugo de Naranja 1L',
      category: 'Bebidas',
      pricePerUnit: 720,
      stock: 85,
      estado: 'Activo'
    },
    {
      id: '4',
      name: 'Leche Entera 1L',
      category: 'Lácteos',
      pricePerUnit: 620,
      stock: 144,
      estado: 'Activo'
    },
    {
      id: '5',
      name: 'Yogur Natural 200g',
      category: 'Lácteos',
      pricePerUnit: 480,
      stock: 96,
      estado: 'Inactivo'
    },
    {
      id: '6',
      name: 'Queso Cremoso 500g',
      category: 'Lácteos',
      pricePerUnit: 2100,
      stock: 40,
      estado: 'Activo'
    },
    {
      id: '7',
      name: 'Arroz Largo Fino 1kg',
      category: 'Almacén',
      pricePerUnit: 980,
      stock: 100,
      estado: 'Activo'
    },
    {
      id: '8',
      name: 'Fideos Spaghetti 500g',
      category: 'Almacén',
      pricePerUnit: 540,
      stock: 200,
      estado: 'Activo'
    }
  ];

  const PAGE_SIZE = 5;

  let currentPage = $state(1);
  let modalOpen = $state(false);
  let modalMode = $state<'create' | 'edit'>('create');
  let selectedProduct = $state<Product | undefined>(undefined);
  let deleteOpen = $state(false);
  let productToDelete = $state<Product | undefined>(undefined);

  const totalPages = $derived(Math.ceil(mockProducts.length / PAGE_SIZE));
  const paginatedProducts = $derived(
    mockProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
  );

  function openCreate() {
    selectedProduct = undefined;
    modalMode = 'create';
    modalOpen = true;
  }

  function openEdit(product: Product) {
    selectedProduct = product;
    modalMode = 'edit';
    modalOpen = true;
  }

  function openDelete(product: Product) {
    productToDelete = product;
    deleteOpen = true;
  }

  function closeModal() {
    modalOpen = false;
    selectedProduct = undefined;
  }

  function closeDelete() {
    deleteOpen = false;
    productToDelete = undefined;
  }

  function handleDeleteConfirm() {
    if (!productToDelete) return;
  }
</script>

<div class="flex min-h-dvh bg-slate-50">
  <AdminSidebar />
  <div class="flex min-w-0 flex-1 flex-col">
    <CatalogoHeader onCreate={openCreate} />
    <main class="flex flex-col gap-6 p-7">
      <CatalogoTable
        products={paginatedProducts}
        onEdit={openEdit}
        onDelete={openDelete}
      />

      {#if totalPages > 1}
        <div class="flex items-center justify-between">
          <p class="text-sm text-slate-500">
            Mostrando {(currentPage - 1) * PAGE_SIZE + 1}–{Math.min(
              currentPage * PAGE_SIZE,
              mockProducts.length
            )} de {mockProducts.length}
          </p>
          <div class="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onclick={() => currentPage--}
            >
              <ChevronsLeft class="size-4" />
              Anterior
            </Button>
            <span class="text-sm text-slate-600">
              Página {currentPage} de {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onclick={() => currentPage++}
            >
              Siguiente
              <ChevronsRight class="size-4" />
            </Button>
          </div>
        </div>
      {/if}
    </main>
  </div>
</div>

<ProductModal
  bind:open={modalOpen}
  mode={modalMode}
  product={selectedProduct}
  productForm={data.productForm}
  onClose={closeModal}
/>

<ProductDeleteConfirm
  bind:open={deleteOpen}
  productName={productToDelete?.name ?? ''}
  onClose={closeDelete}
  onConfirm={handleDeleteConfirm}
/>
