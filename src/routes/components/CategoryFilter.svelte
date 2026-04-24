<script lang="ts">
  import { CATEGORY_EMOJIS, DISPLAY_CATEGORIES } from '$lib/mocks/data';
  import { homeSearch } from '$lib/stores/homeSearch.svelte';
</script>

<div
  class="scrollbar-hide mx-auto mb-8 hidden max-w-5xl gap-3 overflow-x-auto px-4 sm:flex"
>
  {#each DISPLAY_CATEGORIES as cat (cat)}
    <button
      onclick={() =>
        (homeSearch.activeCategory =
          homeSearch.activeCategory === cat ? null : cat)}
      class="flex h-[162px] w-[155px] shrink-0 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg transition-colors
				{homeSearch.activeCategory === cat
        ? 'bg-[#EFF6FF] text-[#2563EB]'
        : 'bg-white text-[#0F172A]'}"
    >
      <span class="text-2xl">{CATEGORY_EMOJIS[cat]}</span>
      <span class="text-xs font-semibold">{cat}</span>
    </button>
  {/each}
</div>
