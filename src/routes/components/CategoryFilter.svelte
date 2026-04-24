<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { CATEGORY_EMOJIS, DISPLAY_CATEGORIES } from '$lib/mocks/data';
  import { homeSearch } from '$lib/stores/homeSearch.svelte';
  import { cn } from '$lib/utils';
</script>

<div
  class="scrollbar-hide mx-auto mb-8 hidden max-w-5xl gap-3 overflow-x-auto px-4 sm:flex"
>
  {#each DISPLAY_CATEGORIES as cat (cat)}
    <Button
      variant="ghost"
      onclick={() =>
        (homeSearch.activeCategory =
          homeSearch.activeCategory === cat ? null : cat)}
      class={cn(
        'flex h-[162px] w-[155px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg',
        homeSearch.activeCategory === cat
          ? 'bg-[#EFF6FF] text-[#2563EB] hover:bg-[#EFF6FF] hover:text-[#2563EB]'
          : 'bg-white text-[#0F172A]'
      )}
    >
      <span class="text-2xl">{CATEGORY_EMOJIS[cat]}</span>
      <span class="text-xs font-semibold">{cat}</span>
    </Button>
  {/each}
</div>
