<script lang="ts">
  import { Search, ShoppingBag, User } from 'lucide-svelte';

  import { Input } from '$lib/components/ui/input';
  import { homeSearch } from '$lib/stores/homeSearch.svelte';
</script>

<header class="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white">
  <div
    class="mx-auto flex h-16 max-w-[74rem] items-center justify-between px-4 lg:px-6"
  >
    <span
      class="text-xl font-bold text-[#00a0ff]"
      style="font-family: 'Rubik', sans-serif;"
    >
      Stockea
    </span>

    <div class="flex items-center gap-2">
      <button
        class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-[#F1F5F9]"
        aria-label="Buscar"
      >
        <Search size={20} class="text-[#312E81]" />
      </button>
      <a
        href="/carrito"
        class="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-[#F1F5F9]"
        aria-label="Carrito"
      >
        <ShoppingBag size={20} class="text-[#312E81]" />
      </a>
      <a
        href="/ingresar"
        class="flex h-10 items-center gap-2 rounded-full bg-[#00a0ff] px-4 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <User size={16} />
        <span class="hidden sm:inline">Ingresar</span>
      </a>
    </div>
  </div>
  <div class="mx-auto max-w-[74rem] px-4 pb-3 lg:px-6">
    <div class="flex items-center gap-2 rounded-full bg-[#F1F5F9] px-4 py-3">
      <Search size={18} class="shrink-0 text-[#94A3B8]" />
      <Input
        bind:value={homeSearch.query}
        type="text"
        placeholder="Buscar productos..."
        class="h-auto border-none bg-transparent px-0 py-0 text-sm shadow-none focus-visible:ring-0"
      />
    </div>
  </div>
</header>
