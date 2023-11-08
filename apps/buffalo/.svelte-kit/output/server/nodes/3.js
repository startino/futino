

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.b7e03b8b.js","_app/immutable/chunks/scheduler.b5cb2f20.js","_app/immutable/chunks/index.b54eaf43.js"];
export const stylesheets = [];
export const fonts = [];
