<script lang="ts">
  import EmailForm from './components/EmailForm.svelte';
  import SocialButtons from './components/SocialButtons.svelte';

  export let data;
</script>

<div
  class="flex min-h-dvh items-center justify-center bg-[#F8FAFC] px-4 py-12"
  style="font-family: 'Nunito Sans', sans-serif;"
>
  <div class="w-full max-w-sm">
    <div class="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
      <div class="mb-6 text-center">
        <span
          class="text-xl font-semibold text-[#0F172A]"
          style="font-family: 'Rubik', sans-serif;">Stockea</span
        >
        <h1
          class="mt-4 text-xl font-semibold text-[#0F172A]"
          style="font-family: 'Rubik', sans-serif;"
        >
          Bienvenido
        </h1>
        <p class="mt-1 text-sm text-[#64748B]">
          Ingresá para gestionar tus pedidos
        </p>
      </div>

      <SocialButtons />

      <div class="my-5 flex items-center gap-3">
        <div class="h-px flex-1 bg-[#E2E8F0]"></div>
        <span class="text-xs font-medium text-[#94A3B8]">o</span>
        <div class="h-px flex-1 bg-[#E2E8F0]"></div>
      </div>

      <EmailForm form={data.form} />

      <div
        class="mt-6 flex items-center justify-center gap-4 border-t border-[#F1F5F9] pt-5"
      >
        <a
          href="/"
          class="text-xs text-[#94A3B8] transition-colors hover:text-[#64748B]"
          >Ayuda</a
        >
        <span class="text-xs text-[#E2E8F0]">·</span>
        <a
          href="/"
          class="text-xs text-[#94A3B8] transition-colors hover:text-[#64748B]"
          >Términos de servicio</a
        >
        <span class="text-xs text-[#E2E8F0]">·</span>
        <a
          href="/"
          class="text-xs text-[#94A3B8] transition-colors hover:text-[#64748B]"
          >Privacidad</a
        >
      </div>
    </div>
  </div>
</div>
