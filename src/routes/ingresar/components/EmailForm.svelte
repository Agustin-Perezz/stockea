<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';

  let email = $state('');
</script>

<div class="flex flex-col gap-3">
  <div>
    <Label for="email" class="mb-1.5 block">Email</Label>
    <Input
      id="email"
      bind:value={email}
      type="email"
      placeholder="tu@empresa.com"
      autocomplete="email"
    />
  </div>
  <Button class="w-full">Continuar</Button>
</div>
