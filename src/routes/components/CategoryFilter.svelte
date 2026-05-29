<script lang="ts">
  import type { CategoryData } from '$domain/entities/category.entity';

  import { homeSearch } from '$lib/stores/homeSearch.svelte';
  import { cn } from '$lib/utils';

  interface Props {
    categories: CategoryData[];
  }

  let { categories }: Props = $props();
</script>

<div
  class="scrollbar-hide mx-auto mb-8 hidden max-w-[74rem] gap-3 overflow-x-auto px-4 pb-2 sm:flex md:px-0"
>
  {#each categories as cat (cat.id)}
    <button
      onclick={() =>
        (homeSearch.activeCategory =
          homeSearch.activeCategory === cat.id ? null : cat.id)}
      class={cn(
        'flex h-[162px] w-[155px] shrink-0 flex-col items-center justify-center gap-2 rounded-lg bg-white shadow-sm transition-all',
        homeSearch.activeCategory === cat.id
          ? 'shadow-md ring-1 ring-[#6366F1]'
          : 'hover:shadow-md'
      )}
    >
      {#if cat.imageUrl}
        <img
          src={cat.imageUrl}
          loading="lazy"
          decoding="async"
          alt={cat.name}
          class="h-14 w-14 rounded-full object-cover"
        />
      {:else}
        <span class="text-3xl">📦</span>
      {/if}
      <span class="text-xs font-semibold">{cat.name}</span>
    </button>
  {/each}
</div>
