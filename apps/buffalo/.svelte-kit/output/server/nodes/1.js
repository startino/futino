

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2266f846.js","_app/immutable/chunks/scheduler.72dec800.js","_app/immutable/chunks/index.67aeaf3b.js","_app/immutable/chunks/singletons.d342ba67.js","_app/immutable/chunks/Button.de0c60b0.js","_app/immutable/chunks/Inview.svelte_svelte_type_style_lang.34577999.js"];
export const stylesheets = ["_app/immutable/assets/Inview.6ef7ab11.css"];
export const fonts = [];
