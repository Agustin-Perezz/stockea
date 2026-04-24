<script lang="ts">
  import { BookOpen, Package, Users } from 'lucide-svelte';
</script>

<aside
  class="hidden w-56 shrink-0 flex-col border-r border-[#E2E8F0] bg-white py-6 lg:flex"
>
  <div class="mb-8 px-5">
    <span
      class="text-lg font-semibold text-[#0F172A]"
      style="font-family: 'Rubik', sans-serif;">Stockea</span
    >
    <span class="ml-2 text-xs font-medium text-[#94A3B8]">Admin</span>
  </div>
  <nav class="flex flex-col gap-1 px-3">
    <a
      href="/admin/ordenes"
      class="flex items-center gap-2.5 rounded-lg bg-[#EFF6FF] px-3 py-2 text-sm font-medium text-[#2563EB]"
    >
      <Package size={16} />
      Órdenes
    </a>
    <a
      href="/admin/clientes"
      class="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-[#64748B] transition-colors duration-150 hover:bg-[#F8FAFC] hover:text-[#0F172A]"
    >
      <Users size={16} />
      Clientes
    </a>
    <a
      href="/admin/catalogo"
      class="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-[#64748B] transition-colors duration-150 hover:bg-[#F8FAFC] hover:text-[#0F172A]"
    >
      <BookOpen size={16} />
      Catálogo
    </a>
  </nav>
</aside>
