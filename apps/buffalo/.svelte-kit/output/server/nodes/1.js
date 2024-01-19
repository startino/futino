

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6CmF8Q11.js","_app/immutable/chunks/disclose-version.gLHcZ5W-.js","_app/immutable/chunks/runtime.M-b6j1K4.js","_app/immutable/chunks/entry.Xft0apDk.js"];
export const stylesheets = [];
export const fonts = [];
