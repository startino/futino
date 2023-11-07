import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { href = "" } = $$props;
  let { size = "max-w-md" } = $$props;
  let { border = "" } = $$props;
  let { radius = "rounded-md" } = $$props;
  let { padding = " sm:px-6 lg:px-8 px-4 py-3 sm:py-4 lg:py-6" } = $$props;
  let { margin = "mx-auto" } = $$props;
  let { shadow = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  classesBase = `${size} ${margin}  ${padding} ${shadow} ${border} ${radius} ${$$props.class}`;
  return `${href ? `<a${add_attribute("class", classesBase, 0)}${add_attribute("href", href, 0)}${add_attribute("style", $$props.style, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<div${add_attribute("class", classesBase, 0)}${add_attribute("style", $$props.style, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
export {
  Card as C
};
