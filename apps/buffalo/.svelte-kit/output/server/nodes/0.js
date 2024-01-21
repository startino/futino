import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.6VHNxvOB.js","_app/immutable/chunks/disclose-version.gLHcZ5W-.js","_app/immutable/chunks/runtime.M-b6j1K4.js","_app/immutable/chunks/ContactForm.svelte_svelte_type_style_lang.Fv66R7-4.js","_app/immutable/chunks/main-client.iB7swlxB.js"];
export const stylesheets = ["_app/immutable/assets/0.14g47Ltk.css","_app/immutable/assets/ContactForm.f7YDjtKB.css"];
export const fonts = [];
