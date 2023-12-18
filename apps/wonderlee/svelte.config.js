import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
    mdsvex({
      extensions: [".md", ".svelte"],
    }),
  ],
  extensions: [".svelte", ".md"],
  optimizeDeps: {
    include: ["objection", "scrollmagic", "pg"],
    exclude: ["pg-native"],
  },
};

export default config;
