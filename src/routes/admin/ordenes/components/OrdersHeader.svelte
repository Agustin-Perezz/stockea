<script lang="ts">
  import { ChevronDown, Download } from 'lucide-svelte';

  let period = $state('Hoy');
  const periods = ['Hoy', 'Esta semana', 'Este mes', 'Este año'];
  let open = $state(false);
</script>

<div class="border-b border-slate-100 bg-white px-7 py-6">
  <div class="flex items-start justify-between gap-4">
    <div>
      <h1 class="text-2xl font-bold tracking-tight text-slate-900">
        Dashboard
      </h1>
      <p class="mt-0.5 text-sm text-slate-500">
        Bienvenido · Aquí está lo que está pasando hoy.
      </p>
    </div>

    <div class="flex shrink-0 items-center gap-2.5">
      <div class="relative">
        <button
          onclick={() => (open = !open)}
          class="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-xs transition hover:bg-slate-50"
        >
          {period}
          <ChevronDown
            size={14}
            class="text-slate-400 transition-transform duration-150 {open
              ? 'rotate-180'
              : ''}"
          />
        </button>
        {#if open}
          <div
            class="absolute top-full right-0 z-20 mt-1.5 w-40 rounded-xl border border-slate-100 bg-white py-1 shadow-lg"
          >
            {#each periods as p (p)}
              <button
                onclick={() => {
                  period = p;
                  open = false;
                }}
                class="w-full px-4 py-2 text-left text-sm transition-colors hover:bg-slate-50 {period ===
                p
                  ? 'font-semibold text-slate-900'
                  : 'text-slate-600'}"
              >
                {p}
              </button>
            {/each}
          </div>
        {/if}
      </div>

      <button
        class="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition hover:bg-orange-600 active:scale-95"
      >
        <Download size={14} />
        Exportar
      </button>
    </div>
  </div>
</div>
