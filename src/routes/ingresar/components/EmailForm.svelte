<script lang="ts">
  let email = $state('');
</script>

<div class="flex flex-col gap-3">
  <div>
    <label for="email" class="mb-1.5 block text-sm font-medium text-[#0F172A]"
      >Email</label
    >
    <input
      id="email"
      bind:value={email}
      type="email"
      placeholder="tu@empresa.com"
      autocomplete="email"
      class="w-full rounded-lg border border-[#E2E8F0] px-3 py-2.5 text-sm text-[#0F172A] transition-all duration-150 outline-none placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"
    />
  </div>
  <button
    class="w-full cursor-pointer rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8]"
  >
    Continuar
  </button>
</div>
