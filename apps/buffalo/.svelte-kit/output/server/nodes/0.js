import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.2a1364cf.js","_app/immutable/chunks/scheduler.b5cb2f20.js","_app/immutable/chunks/index.b54eaf43.js","_app/immutable/chunks/Prose.c88bcef6.js","_app/immutable/chunks/sha256.73b255ed.js"];
export const stylesheets = ["_app/immutable/assets/0.bb4de4f7.css"];
export const fonts = [];
