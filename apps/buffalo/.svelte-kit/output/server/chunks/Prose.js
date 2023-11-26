import { c as create_ssr_component, e as escape } from "./ssr.js";
const Prose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "md" } = $$props;
  let proseClasses = "";
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div class="${escape($$props.class, true) + " max-w-none prose-a:no-underline prose prose-main " + escape(proseClasses, true)}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Prose as P
};
