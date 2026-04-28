<script lang="ts">
  import { ImageIcon, X } from 'lucide-svelte';

  import * as Button from '$lib/components/ui/button';
  import {
    ACCEPT_IMAGE,
    Root,
    Trigger,
    type FileRejectedReason
  } from '$lib/components/ui/file-drop-zone';

  interface Props {
    images: string[];
    maxImages?: number;
    onImagesChange: (images: string[]) => void;
  }

  let { images, maxImages = 5, onImagesChange }: Props = $props();

  // eslint-disable-next-line svelte/prefer-writable-derived
  let previews = $state<{ url: string; isNew: boolean; id: string }[]>([]);
  let editingIndex = $state<number | null>(null);
  let uploadTrigger: HTMLLabelElement | null = null;

  $effect(() => {
    previews = images.map((url, i) => ({
      url,
      isNew: false,
      id: `existing-${i}`
    }));
  });

  async function handleUpload(files: File[]) {
    const remainingSlots = maxImages - previews.length;
    const filesToProcess = files.slice(0, remainingSlots);

    for (const file of filesToProcess) {
      const url = await readFileAsDataURL(file);
      if (editingIndex !== null) {
        previews[editingIndex] = { url, isNew: true, id: `new-${Date.now()}` };
        editingIndex = null;
      } else {
        previews = [
          ...previews,
          { url, isNew: true, id: `new-${Date.now()}-${Math.random()}` }
        ];
      }
    }

    onImagesChange(previews.map((p) => p.url));
  }

  function readFileAsDataURL(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function removeImage(index: number) {
    previews = previews.filter((_, i) => i !== index);
    onImagesChange(previews.map((p) => p.url));
  }

  function replaceImage(index: number) {
    editingIndex = index;
    uploadTrigger?.click();
  }

  function handleFileRejection(opts: {
    reason: FileRejectedReason;
    file: File;
  }) {
    console.warn(`File ${opts.file.name} rejected: ${opts.reason}`);
  }
</script>

<div class="flex flex-col gap-4">
  <div class="text-sm font-medium">
    Imágenes ({previews.length}/{maxImages})
  </div>

  {#if previews.length > 0}
    <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
      {#each previews as preview, i (preview.id)}
        <div
          class="group bg-muted relative aspect-square overflow-hidden rounded-lg border"
        >
          <img
            src={preview.url}
            alt="Preview {i + 1}"
            class="h-full w-full object-cover"
          />
          <div
            class="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100"
          >
            <Button.Root
              variant="secondary"
              size="icon"
              class="h-8 w-8"
              onclick={() => replaceImage(i)}
            >
              <ImageIcon class="h-4 w-4" />
            </Button.Root>
            <Button.Root
              variant="destructive"
              size="icon"
              class="h-8 w-8"
              onclick={() => removeImage(i)}
            >
              <X class="h-4 w-4" />
            </Button.Root>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  {#if previews.length < maxImages}
    <Root
      onUpload={handleUpload}
      maxFiles={maxImages - previews.length}
      accept={ACCEPT_IMAGE}
      onFileRejected={handleFileRejection}
    >
      <Trigger bind:ref={uploadTrigger}>
        <div
          class="border-muted-foreground/25 hover:border-muted-foreground/50 cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors"
        >
          <ImageIcon class="text-muted-foreground mx-auto mb-2 h-8 w-8" />
          <p class="text-muted-foreground text-sm">
            Click or drag to upload images
          </p>
        </div>
      </Trigger>
    </Root>
  {/if}
</div>
