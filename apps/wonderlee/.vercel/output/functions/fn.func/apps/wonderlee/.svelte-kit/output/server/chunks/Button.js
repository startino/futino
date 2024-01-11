import { A as value_or_fallback, z as create_anchor, B as attr, G as slot, x as bind_props, y as pop, D as sanitize_props, C as stringify, t as push } from "./index.js";
import { I as Icon } from "./Icon.js";
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  let classesBase;
  let href = value_or_fallback($$props["href"], "");
  let onClick = value_or_fallback($$props["onClick"], () => {
  });
  let border = value_or_fallback($$props["border"], "");
  let padding = value_or_fallback($$props["padding"], "");
  let shadow = value_or_fallback($$props["shadow"], "");
  let margin = value_or_fallback($$props["margin"], "");
  let radius = value_or_fallback($$props["radius"], "");
  let uppercase = value_or_fallback($$props["uppercase"], false);
  let arrow = value_or_fallback($$props["arrow"], false);
  let tracking = value_or_fallback($$props["tracking"], "");
  let variant = value_or_fallback($$props["variant"], "normal");
  let highlight = value_or_fallback($$props["highlight"], false);
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
  classesBase = `${padding || variants[variant].padding} ${margin} ${shadow} ${border || variants[variant].border} ${radius || variants[variant].radius} ${$$sanitized_props.class}`;
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  $$payload.out += `<a${attr("href", href, false)}${attr("target", $$sanitized_props.target, false)}${attr("style", $$sanitized_props.style, false)}${attr("class", ` ${stringify(classesBase)} flex w-fit h-fit relative place-items-center font-bold group text-center transition-all duration-300 hover:bg-tertiary hover:text-tertiary-on ${stringify(highlight ? "text-primary-on bg-primary " : "text-surface bg-surface-on")} ${stringify([uppercase ? "uppercase" : ""].filter(Boolean).join(" "))}`, false)}><span class="relative mx-auto z-0 flex gap-4 place-items-center group-hover:text-tertiary-on transition-all duration-150 delay-75"><h6 class="m-0 sm:m-0 whitespace-nowrap">${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</h6> ${anchor_1}`;
  if (tracking) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_2}`;
    Icon($$payload, {
      class: "-rotate-90 my-auto group-hover:translate-x-2 duration-300 transition-all not-prose",
      icon: tracking,
      height: "24",
      width: "24"
    });
    $$payload.out += `${anchor_2}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_1}</span></a>`;
  bind_props($$props, {
    href,
    onClick,
    border,
    padding,
    shadow,
    margin,
    radius,
    uppercase,
    arrow,
    tracking,
    variant,
    highlight
  });
  pop();
}
export {
  Button as B
};
