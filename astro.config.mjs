import { defineConfig, passthroughImageService } from 'astro/config';

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: 'https://linussilberstein.de',
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    service: passthroughImageService(),
  }
});