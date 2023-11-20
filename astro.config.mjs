import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
  tailwind()],
  pages: {
    // Página de inicio
    '/': './src/pages/index.astro',

    // Página Acerca de
    '/acerca': './src/pages/about.astro',

    // Página de contacto
    '/contacto': './src/pages/contact.astro',
  }
});