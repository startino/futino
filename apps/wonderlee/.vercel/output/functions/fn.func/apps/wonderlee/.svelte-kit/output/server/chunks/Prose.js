import { A as value_or_fallback, z as create_anchor, B as attr, C as stringify, G as slot, x as bind_props, y as pop, D as sanitize_props, t as push } from "./index.js";
function Prose($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  let size = value_or_fallback($$props["size"], "md");
  let proseClasses = "";
  const anchor = create_anchor($$payload);
  $$payload.out += `<div${attr("class", `${stringify($$sanitized_props.class)} max-w-none prose-a:no-underline prose prose-main ${stringify(proseClasses)}`, false)}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</div>`;
  bind_props($$props, { size });
  pop();
}
export {
  Prose as P
};
