import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { P as Prose } from "../../../chunks/Prose.js";
import "crypto-js/sha256.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Prose, "Prose").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
