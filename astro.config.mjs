import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://linussilberstein.de',
  integrations: [tailwind()],
  image: {
    service: passthroughImageService(),
  }
});