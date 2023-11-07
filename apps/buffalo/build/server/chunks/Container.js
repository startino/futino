import { c as create_ssr_component, d as add_attribute } from "./ssr.js";
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { id = "" } = $$props;
  let { href = "" } = $$props;
  let { sizes = "max-w-7xl w-full" } = $$props;
  let { border = "" } = $$props;
  let { padding = "sm:px-6 lg:px-8 px-4" } = $$props;
  let { margin = "mx-auto" } = $$props;
  let { shadow = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.sizes === void 0 && $$bindings.sizes && sizes !== void 0)
    $$bindings.sizes(sizes);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  classesBase = `${sizes} ${padding} ${margin} ${shadow} ${border} ${$$props.class} relative`;
  return ` ${href ? `<a${add_attribute("class", classesBase, 0)}${add_attribute("id", id, 0)}${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<div${add_attribute("class", classesBase, 0)}${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
export {
  Container as C
};
