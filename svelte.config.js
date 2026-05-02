import { resolve } from 'path';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      images: {
        sizes: [640, 828, 1200, 1920],
        formats: ['image/webp'],
        minimumCacheTTL: 300,
        domains: ['placeholder.supabase.co']
      }
    }),

    alias: {
      $lib: resolve('./src/lib'),
      '$lib/*': resolve('./src/lib/*'),
      $components: resolve('./src/lib/components'),
      '$components/*': resolve('./src/lib/components/*'),
      $modules: resolve('./src/lib/modules'),
      '$modules/*': resolve('./src/lib/modules/*')
    }
  }
};

export default config;
