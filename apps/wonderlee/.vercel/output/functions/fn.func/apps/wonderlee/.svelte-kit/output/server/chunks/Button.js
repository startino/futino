import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { href = "" } = $$props;
  let { onClick = () => {
  } } = $$props;
  let { border = "" } = $$props;
  let { padding = "" } = $$props;
  let { shadow = "" } = $$props;
  let { margin = "" } = $$props;
  let { radius = "" } = $$props;
  let { uppercase = false } = $$props;
  let { arrow = false } = $$props;
  let { tracking = "" } = $$props;
  let { variant = "normal" } = $$props;
  let { highlight = false } = $$props;
  const variants = {
    normal: {
      colors: ["bg-surface", "bg-surface-highlight"],
      border: "",
      padding: "px-6 py-4",
      radius: "rounded-md",
      typography: ""
    },
    "pill": {
      colors: ["bg-surface", "bg-surface-highlight"],
      border: "",
      padding: "px-10 py-2",
      radius: "rounded-full",
      typography: ""
    }
  };
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.uppercase === void 0 && $$bindings.uppercase && uppercase !== void 0)
    $$bindings.uppercase(uppercase);
  if ($$props.arrow === void 0 && $$bindings.arrow && arrow !== void 0)
    $$bindings.arrow(arrow);
  if ($$props.tracking === void 0 && $$bindings.tracking && tracking !== void 0)
    $$bindings.tracking(tracking);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.highlight === void 0 && $$bindings.highlight && highlight !== void 0)
    $$bindings.highlight(highlight);
  classesBase = `${padding || variants[variant].padding} ${margin} ${shadow} ${border || variants[variant].border} ${radius || variants[variant].radius} ${$$props.class}`;
  return `<a${add_attribute("href", href, 0)}${add_attribute("target", $$props.target, 0)}${add_attribute("style", $$props.style, 0)} class="${[
    "" + escape(classesBase, true) + " flex w-fit h-fit relative place-items-center font-bold group text-center transition-all duration-300 hover:bg-tertiary hover:text-tertiary-on " + escape(
      highlight ? "text-primary-on bg-primary " : "text-surface bg-surface-on",
      true
    ),
    uppercase ? "uppercase" : ""
  ].join(" ").trim()}"><span class="relative mx-auto z-0 flex gap-4 place-items-center group-hover:text-tertiary-on transition-all duration-150 delay-75"><h6 class="m-0 sm:m-0 whitespace-nowrap">${slots.default ? slots.default({}) : ``}</h6> ${tracking ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "-rotate-90 my-auto group-hover:translate-x-2 duration-300 transition-all not-prose",
      icon: tracking,
      height: "24",
      width: "24"
    },
    {},
    {}
  )}` : ``}</span></a>`;
});
export {
  Button as B
};
