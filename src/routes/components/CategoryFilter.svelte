<script lang="ts">
  import { CATEGORY_EMOJIS, DISPLAY_CATEGORIES } from '$lib/mocks/data';
  import { homeSearch } from '$lib/stores/homeSearch.svelte';
  import { cn } from '$lib/utils';
</script>

<div
  class="scrollbar-hide mx-auto mb-8 hidden max-w-[74rem] gap-3 overflow-x-auto px-4 pb-2 sm:flex md:px-0"
>
  {#each DISPLAY_CATEGORIES as cat (cat)}
    <button
      onclick={() =>
        (homeSearch.activeCategory =
          homeSearch.activeCategory === cat ? null : cat)}
      class={cn(
        'flex h-[162px] w-[155px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-white shadow-sm transition-all',
        homeSearch.activeCategory === cat
          ? 'shadow-md ring-1 ring-[#6366F1]'
          : 'hover:shadow-md'
      )}
    >
      <span class="text-3xl">{CATEGORY_EMOJIS[cat]}</span>
      <span class="text-xs font-semibold">{cat}</span>
    </button>
  {/each}
</div>
