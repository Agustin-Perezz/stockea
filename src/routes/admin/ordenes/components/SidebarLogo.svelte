<script lang="ts">
  import { TrendingUp } from 'lucide-svelte';
</script>

<div class="flex items-center gap-2.5 border-b border-white/8 px-5 py-6">
  <div
    class="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500 shadow-lg shadow-blue-500/30"
  >
    <TrendingUp size={14} class="text-white" />
  </div>
  <div>
    <span class="text-[15px] font-semibold tracking-tight text-white"
      >stockea</span
    >
    <span
      class="ml-1.5 rounded text-[10px] font-medium tracking-widest text-white/40 uppercase"
      >admin</span
    >
  </div>
</div>
