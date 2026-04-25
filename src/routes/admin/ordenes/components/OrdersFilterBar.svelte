<script lang="ts">
  import { Funnel } from 'lucide-svelte';

  interface Status {
    value: string;
    label: string;
  }

  interface Props {
    statuses: Status[];
    statusFilter: string;
    count: number;
    onFilterChange: (value: string) => void;
  }

  let { statuses, statusFilter, count, onFilterChange }: Props = $props();
</script>

<div class="flex items-center gap-2">
  <Funnel size={13} class="shrink-0 text-slate-400" />
  <div class="flex flex-wrap gap-1.5">
    {#each statuses as s (s.value)}
      <button
        onclick={() => onFilterChange(s.value)}
        class="rounded-full px-3 py-1 text-xs font-medium transition-all duration-150
          {statusFilter === s.value
          ? 'bg-slate-900 text-white shadow-sm'
          : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700'}"
      >
        {s.label}
      </button>
    {/each}
  </div>
  <span class="ml-auto text-xs text-slate-400"
    >{count} resultado{count !== 1 ? 's' : ''}</span
  >
</div>
