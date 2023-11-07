import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.13f200cb.js","_app/immutable/chunks/scheduler.aefdcbfb.js","_app/immutable/chunks/index.98882bb9.js","_app/immutable/chunks/Prose.dd7540ad.js","_app/immutable/chunks/sha256.c24f45e2.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Icon.6d90042a.js","_app/immutable/chunks/Button.30e794e4.js"];
export const stylesheets = ["_app/immutable/assets/0.c4a70fd5.css"];
export const fonts = [];
