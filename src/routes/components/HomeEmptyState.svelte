<script lang="ts">
  let { query }: { query: string } = $props();
</script>

<div class="flex flex-col items-center justify-center px-4 py-20 text-center">
  <p class="text-sm text-[#64748B]">
    Sin resultados para "<span class="font-medium">{query}</span>"
  </p>
</div>
