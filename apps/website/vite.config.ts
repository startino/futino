import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
	ssr: {
        noExternal: ["tsparticles", "tsparticles-slim", "tsparticles-engine", "svelte-particles"], // add all tsparticles libraries here, they're not made for SSR, they're client only
    },
});
