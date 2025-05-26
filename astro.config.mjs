// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), pagefind()],
});
