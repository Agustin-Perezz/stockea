<script lang="ts">
  import { ArrowLeft } from 'lucide-svelte';
</script>

<header class="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white">
  <div class="flex h-14 items-center gap-3 px-4">
    <a
      href="/"
      class="-ml-1.5 rounded-lg p-1.5 text-[#0F172A] transition-colors duration-150 hover:bg-[#F1F5F9]"
      aria-label="Volver"
    >
      <ArrowLeft size={20} />
    </a>
    <h1
      class="text-base font-semibold text-[#0F172A]"
      style="font-family: 'Rubik', sans-serif;"
    >
      Tu Pedido
    </h1>
  </div>
</header>
