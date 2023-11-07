

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/products/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.58fac7fd.js","_app/immutable/chunks/scheduler.aefdcbfb.js","_app/immutable/chunks/index.98882bb9.js","_app/immutable/chunks/Prose.dd7540ad.js","_app/immutable/chunks/sha256.c24f45e2.js"];
export const stylesheets = [];
export const fonts = [];
