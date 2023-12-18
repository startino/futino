import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.01283b46.js","_app/immutable/chunks/scheduler.55305828.js","_app/immutable/chunks/index.b4766217.js","_app/immutable/chunks/Prose.70965972.js","_app/immutable/chunks/Inview.svelte_svelte_type_style_lang.815525a4.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Icon.5ec90ac4.js","_app/immutable/chunks/index.d29e4f8b.js","_app/immutable/chunks/Button.b005e081.js"];
export const stylesheets = ["_app/immutable/assets/0.496ca852.css","_app/immutable/assets/Inview.6ef7ab11.css"];
export const fonts = [];
