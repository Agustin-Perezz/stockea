<script lang="ts">
  import CartBar from '$lib/components/layout/CartBar.svelte';
  import HomeCatalogContent from './components/HomeCatalogContent.svelte';
  import HomeHeader from './components/HomeHeader.svelte';
</script>

<div
  class="min-h-dvh bg-[#F8FAFC]"
  style="font-family: 'Nunito Sans', sans-serif;"
>
  <HomeHeader />
  <HomeCatalogContent />
  <CartBar />
</div>
