import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Container } from "../../../../chunks/Container.js";
import "crypto-js/sha256.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container, "Container").$$render($$result, { class: "flex flex-col gap-12 pt-44" }, {}, {
    default: () => {
      return `${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2 gap-6 place-items-center",
          id: "sliding"
        },
        {},
        {
          default: () => {
            return `<img src="/products/secret-doors/secret_door1.gif" alt="" class="object-contain object-center w-full h-full"> <h3 data-svelte-h="svelte-g12x25">We are a distributor of Creative Home Engineering, the world&#39;s best
      engineering and customs manufacturer of secret passage systems and secret
      hidden doors.</h3>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2 gap-6 place-items-center",
          id: "swinging"
        },
        {},
        {
          default: () => {
            return `<img src="/products/secret-doors/secret_door2.gif" alt="" class="object-contain object-center w-full h-full"> <div class="flex flex-col col-span-1" data-svelte-h="svelte-fnbxwy"><h3>Hidden passage:</h3> <ul class="ulink" style="width: 339px"><li>A secret door is a very precise machine that must maintain extremely
          tight tolerances</li> <li>Properly designed and installed, it will not sag, wrap, rub and look
          obvious, especially when load is applied, or with time when humidity
          and temperature fluctuates</li> <li>By moving a designated book, the hidden passage will slide open as
          shown</li> <li>We import the complete system from Creative Home Engineering, USA</li></ul></div>`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default
};
