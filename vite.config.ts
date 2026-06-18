import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const sentryAuthToken = process.env.SENTRY_AUTH_TOKEN;
const isSentryEnabled = Boolean(sentryAuthToken);

export default defineConfig({
  plugins: [
    sentrySvelteKit(
      isSentryEnabled
        ? {
            sourceMapsUploadOptions: {
              org: process.env.SENTRY_ORG,
              project: process.env.SENTRY_PROJECT,
              authToken: sentryAuthToken
            }
          }
        : {}
    ),
    tailwindcss(),
    sveltekit()
  ],
  build: {
    target: 'esnext',
    sourcemap: true
  }
});
