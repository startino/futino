

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cae99170.js","_app/immutable/chunks/scheduler.b5cb2f20.js","_app/immutable/chunks/index.b54eaf43.js","_app/immutable/chunks/singletons.ea7f411d.js","_app/immutable/chunks/sha256.73b255ed.js"];
export const stylesheets = [];
export const fonts = [];
