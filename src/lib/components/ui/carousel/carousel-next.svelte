<script lang="ts">
  import type { WithoutChildren } from 'bits-ui';
  import { ArrowRight } from 'lucide-svelte';

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

  const emblaCtx = getEmblaContext('<Carousel.Next/>');
</script>

<Button
  data-slot="carousel-next"
  {variant}
  {size}
  aria-disabled={!emblaCtx.canScrollNext}
  class={cn(
    'absolute size-14 rounded-full aria-disabled:hidden',
    emblaCtx.orientation === 'horizontal'
      ? '-end-12 top-1/2 -translate-y-1/2'
      : 'start-1/2 -bottom-12 -translate-x-1/2 rotate-90',
    className
  )}
  onclick={emblaCtx.scrollNext}
  onkeydown={emblaCtx.handleKeyDown}
  bind:ref
  {...restProps}
>
  <ArrowRight class="size-6" />
  <span class="sr-only">Next slide</span>
</Button>
