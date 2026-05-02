<script lang="ts">
  import { onMount } from 'svelte';
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';

  import ProductCard from '$lib/components/product/ProductCard.svelte';
  import {
    Carousel,
    CarouselContent,
    CarouselItem
  } from '$lib/components/ui/carousel';
  import type { CarouselAPI } from '$lib/components/ui/carousel/context';
  import type { Product } from '$lib/mocks/data';

  interface Props {
    title: string;
    slug: string;
    products: Product[];
  }

  let { title, slug, products }: Props = $props();
  let desktop = $state(false);
  let api: CarouselAPI | undefined = $state();
  let canScrollPrev = $state(false);
  let canScrollNext = $state(false);

  function onCarouselInit(emblaApi: CarouselAPI | undefined) {
    if (!emblaApi) return;
    api = emblaApi;
    canScrollPrev = emblaApi.canScrollPrev();
    canScrollNext = emblaApi.canScrollNext();
    emblaApi.on('select', () => {
      canScrollPrev = emblaApi.canScrollPrev();
      canScrollNext = emblaApi.canScrollNext();
    });
  }

  onMount(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    desktop = mql.matches;
    const handler = (e: MediaQueryListEvent) => (desktop = e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  });
</script>

<section class="mb-8">
  <div
    class="mx-auto mb-4 flex max-w-[74rem] items-center justify-between px-4 md:px-0"
  >
    <h2 class="text-lg font-semibold" style="font-family: 'Rubik', sans-serif;">
      {title}
    </h2>
    <a href="/categoria/{slug}" class="text-sm font-semibold">Ver más</a>
  </div>

  <div class="mx-auto max-w-[74rem] px-4 md:px-0">
    {#if !desktop}
      <div class="flex gap-3 overflow-x-auto" style="scrollbar-width: none;">
        {#each products as product (product.id)}
          <div class="w-56 shrink-0">
            <ProductCard {product} />
          </div>
        {/each}
      </div>
    {:else}
      <Carousel
        opts={{ align: 'start', slidesToScroll: 5 }}
        setApi={onCarouselInit}
        class="relative w-full"
      >
        <CarouselContent class="-ml-4">
          {#each products as product (product.id)}
            <CarouselItem class="basis-1/5 pl-4">
              <ProductCard {product} />
            </CarouselItem>
          {/each}
        </CarouselContent>
        <button
          onclick={() => api?.scrollPrev()}
          class="absolute top-1/2 -left-5 z-10 flex h-14 w-14 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-[#00a0ff] shadow-sm transition-opacity hover:shadow-md disabled:pointer-events-none disabled:opacity-0"
          aria-label="Ver productos anteriores"
          disabled={!canScrollPrev}
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onclick={() => api?.scrollNext()}
          class="absolute top-1/2 -right-5 z-10 flex h-14 w-14 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-[#00a0ff] shadow-sm transition-opacity hover:shadow-md disabled:pointer-events-none disabled:opacity-0"
          aria-label="Ver más productos"
          disabled={!canScrollNext}
        >
          <ChevronRight size={28} />
        </button>
      </Carousel>
    {/if}
  </div>
</section>
