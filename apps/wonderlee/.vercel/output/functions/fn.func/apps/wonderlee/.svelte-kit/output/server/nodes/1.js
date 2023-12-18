

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.491a77ed.js","_app/immutable/chunks/scheduler.55305828.js","_app/immutable/chunks/index.b4766217.js","_app/immutable/chunks/singletons.2bb706ee.js","_app/immutable/chunks/Button.b005e081.js","_app/immutable/chunks/Icon.5ec90ac4.js","_app/immutable/chunks/Inview.svelte_svelte_type_style_lang.815525a4.js"];
export const stylesheets = ["_app/immutable/assets/Inview.6ef7ab11.css"];
export const fonts = [];
