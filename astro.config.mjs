// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: served from https://mayamit.github.io/Sable/
// `base` keeps every internal link + asset path correct. When a custom domain
// is added later, set `site` to it and change `base` to '/'.
export default defineConfig({
  site: 'https://mayamit.github.io',
  base: '/Sable',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  vite: {
    // Cast avoids a spurious type clash from Astro's nested Vite copy.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
