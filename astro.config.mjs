import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://miansit.github.io',
  base: '/MIANS',
  integrations: [tailwind(), compress(), react()],
  experimental: {
    // viewTransitions: true
  }
});
