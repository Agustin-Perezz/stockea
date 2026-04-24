<script lang="ts">
  import { CircleCheck, Loader2 } from '@lucide/svelte';
  import { magicLinkSchema } from '$modules/auth/domain/AuthSchemas';
  import { superForm } from 'sveltekit-superforms';
  import { zod4Client as zodClient } from 'sveltekit-superforms/adapters';

  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';

  export let form;

  const {
    form: formData,
    enhance,
    message,
    submitting,
    errors
  } = superForm(form, {
    validators: zodClient(magicLinkSchema)
  });
</script>

<form method="POST" action="?/magic" use:enhance class="flex flex-col gap-3">
  {#if $message}
    <div
      class="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800"
    >
      <CircleCheck class="mt-0.5 h-4 w-4 shrink-0" />
      {$message}
    </div>
  {/if}

  <div>
    <Label for="email" class="mb-1.5 block">Email</Label>
    <Input
      id="email"
      bind:value={$formData.email}
      type="email"
      placeholder="tu@empresa.com"
      autocomplete="email"
      data-testid="email-input"
    />
    {#if $errors.email}
      <p class="mt-1 text-xs text-red-600">{$errors.email}</p>
    {/if}
  </div>

  <Button
    type="submit"
    disabled={$submitting}
    class="w-full gap-2"
    data-testid="magic-link-submit"
  >
    {#if $submitting}
      <Loader2 class="h-4 w-4 animate-spin" />
      Enviando...
    {:else}
      Continuar
    {/if}
  </Button>
</form>
