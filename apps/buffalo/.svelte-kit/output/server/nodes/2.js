

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.c41c57cd.js","_app/immutable/chunks/scheduler.b5cb2f20.js","_app/immutable/chunks/index.b54eaf43.js","_app/immutable/chunks/Prose.c88bcef6.js","_app/immutable/chunks/sha256.73b255ed.js","_app/immutable/chunks/preload-helper.a4192956.js"];
export const stylesheets = [];
export const fonts = [];
