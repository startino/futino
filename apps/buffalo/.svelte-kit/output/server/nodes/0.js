import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.b8d869f8.js","_app/immutable/chunks/scheduler.72dec800.js","_app/immutable/chunks/index.67aeaf3b.js","_app/immutable/chunks/Prose.64441b09.js","_app/immutable/chunks/Inview.svelte_svelte_type_style_lang.34577999.js","_app/immutable/chunks/Button.de0c60b0.js"];
export const stylesheets = ["_app/immutable/assets/0.4d753193.css","_app/immutable/assets/Inview.6ef7ab11.css"];
export const fonts = [];
