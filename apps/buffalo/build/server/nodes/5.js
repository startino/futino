

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.19c2a665.js","_app/immutable/chunks/scheduler.aefdcbfb.js","_app/immutable/chunks/index.98882bb9.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.c7ab1a43.js","_app/immutable/chunks/sha256.c24f45e2.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/Button.30e794e4.js","_app/immutable/chunks/Icon.6d90042a.js"];
export const stylesheets = [];
export const fonts = [];
