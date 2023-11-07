import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const Prose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_attribute("class", `${$$props.class} max-w-none prose-a:no-underline prose sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl prose-main`, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Prose as P
};
