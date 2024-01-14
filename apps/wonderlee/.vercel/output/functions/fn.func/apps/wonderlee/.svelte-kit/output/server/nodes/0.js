import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.ywRFqFCC.js","_app/immutable/chunks/disclose-version.V2YZ9BGh.js","_app/immutable/chunks/runtime.pshO8iuD.js","_app/immutable/chunks/Prose.ENkvkAQQ.js","_app/immutable/chunks/main-client.PagZVewx.js","_app/immutable/chunks/ContactForm.svelte_svelte_type_style_lang.mTpbGFZ0.js"];
export const stylesheets = ["_app/immutable/assets/0.DcflKV5g.css","_app/immutable/assets/ContactForm.f7YDjtKB.css"];
export const fonts = [];
