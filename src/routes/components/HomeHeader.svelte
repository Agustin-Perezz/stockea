<script lang="ts">
  import { Search } from 'lucide-svelte';

  import { Input } from '$lib/components/ui/input';
  import { homeSearch } from '$lib/stores/homeSearch.svelte';
</script>

<header class="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white">
  <div class="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
    <span
      class="text-lg font-semibold text-[#0F172A]"
      style="font-family: 'Rubik', sans-serif;">Stockea</span
    >
    <a
      href="/ingresar"
      class="rounded-lg border border-[#E2E8F0] px-3 py-1.5 text-sm font-medium text-[#0F172A] transition-colors duration-150 hover:bg-[#F8FAFC]"
    >
      Ingresar
    </a>
  </div>
  <div class="mx-auto max-w-5xl px-4 pb-3">
    <div class="flex items-center gap-2 rounded-lg bg-[#F1F5F9] px-3 py-2.5">
      <Search size={16} class="shrink-0 text-[#94A3B8]" />
      <Input
        bind:value={homeSearch.query}
        type="text"
        placeholder="Buscar productos..."
        class="h-auto border-none bg-transparent px-0 py-0 text-sm shadow-none focus-visible:ring-0"
      />
    </div>
  </div>
</header>
