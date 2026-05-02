<script lang="ts">
  import { page } from '$app/state';
  import { BookOpen, Package, Users } from 'lucide-svelte';

  import SidebarLogo from './SidebarLogo.svelte';

  const nav = [
    { href: '/admin/ordenes', label: 'Órdenes', icon: Package },
    { href: '/admin/clientes', label: 'Clientes', icon: Users },
    { href: '/admin/catalogo', label: 'Catálogo', icon: BookOpen }
  ];
</script>

<aside class="hidden w-[220px] shrink-0 flex-col bg-[#0F172A] lg:flex">
  <SidebarLogo />

  <nav class="flex flex-1 flex-col gap-0.5 p-3">
    <p
      class="px-3 pt-3 pb-1.5 text-[10px] font-semibold tracking-widest text-white/30 uppercase"
    >
      Gestión
    </p>
    {#each nav as item (item.href)}
      {@const active = page.url.pathname.startsWith(item.href)}
      <a
        href={item.href}
        class="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-150
          {active
          ? 'bg-white/10 font-medium text-white'
          : 'font-normal text-white/50 hover:bg-white/5 hover:text-white/80'}"
      >
        <span
          class="transition-transform duration-150 {active
            ? 'scale-110'
            : 'group-hover:scale-105'}"
        >
          <svelte:component this={item.icon} size={15} />
        </span>
        {item.label}
        {#if active}
          <span class="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400"></span>
        {/if}
      </a>
    {/each}
  </nav>

  <div class="border-t border-white/8 px-5 py-4">
    <p class="text-[11px] text-white/25">v1.0 · Surtido</p>
  </div>
</aside>
