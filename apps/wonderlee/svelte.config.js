import preprocess from 'svelte-preprocess';
import adapter from 'svelte-adapter-bun';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // ignore deliberate link to shiny 404 page
        if (path === '/legal/favicon.png' || '/products/favicon.png') {
          return;
        }

        // otherwise fail the build
        throw new Error(message);
      }
    }
  },
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
    mdsvex({
      extensions: ['.md', '.svelte'],
    }),
  ],
  extensions: ['.svelte', '.md',],
};

export default config;
