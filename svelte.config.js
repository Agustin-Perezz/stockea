import { resolve } from 'path';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      images: {
        sizes: [200, 400, 600, 640, 828, 1200, 1920],
        formats: ['image/webp'],
        minimumCacheTTL: 300,
        domains: ['http2.mlstatic.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'troycotovjjkhofgeavp.supabase.co',
            pathname: '/storage/v1/object/**'
          }
        ]
      }
    }),

    alias: {
      $lib: resolve('./src/lib'),
      '$lib/*': resolve('./src/lib/*'),
      $components: resolve('./src/lib/components'),
      '$components/*': resolve('./src/lib/components/*'),
      $domain: resolve('./src/domain'),
      '$domain/*': resolve('./src/domain/*'),
      $application: resolve('./src/application'),
      '$application/*': resolve('./src/application/*'),
      $infrastructure: resolve('./src/infrastructure'),
      '$infrastructure/*': resolve('./src/infrastructure/*')
    }
  }
};

export default config;
