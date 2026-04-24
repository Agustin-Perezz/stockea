<script lang="ts">
  import type { WithoutChildren } from 'bits-ui';
  import { ArrowLeft } from 'lucide-svelte';

  import { Button, type ButtonProps } from '$lib/components/ui/button/index.js';
  import { cn } from '$lib/utils.js';
  import { getEmblaContext } from './context.js';

  let {
    ref = $bindable(null),
    class: className,
    variant = 'outline',
    size = 'icon',
    ...restProps
  }: WithoutChildren<ButtonProps> = $props();

  const emblaCtx = getEmblaContext('<Carousel.Previous/>');
</script>

<Button
  data-slot="carousel-previous"
  {variant}
  {size}
  aria-disabled={!emblaCtx.canScrollPrev}
  class={cn(
    'absolute size-14 rounded-full aria-disabled:hidden',
    emblaCtx.orientation === 'horizontal'
      ? '-start-12 top-1/2 -translate-y-1/2'
      : 'start-1/2 -top-12 -translate-x-1/2 rotate-90',
    className
  )}
  onclick={emblaCtx.scrollPrev}
  onkeydown={emblaCtx.handleKeyDown}
  {...restProps}
  bind:ref
>
  <ArrowLeft class="size-6" />
  <span class="sr-only">Previous slide</span>
</Button>
