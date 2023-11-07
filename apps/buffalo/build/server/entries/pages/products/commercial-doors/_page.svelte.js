import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Container } from "../../../../chunks/Container.js";
import "crypto-js/sha256.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container, "Container").$$render($$result, { class: "flex flex-col gap-12 pt-44" }, {}, {
    default: () => {
      return `<img src="/products/commercial-doors/teraoka.gif" alt="" class="object-contain object-center w-1/2 h-full"> <h3 data-svelte-h="svelte-1ff0swi">Teraoka is the leading automatic doors manufacturer from Japan, our partner
    in commercial access solution focusing on amenity and safety.</h3> ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2 gap-6 place-items-center",
          id: "sliding"
        },
        {},
        {
          default: () => {
            return `<img src="/products/commercial-doors/35_3.gif" alt="" class="object-contain object-center w-full h-full"> <h3 data-svelte-h="svelte-1jnca3y">Commercial Sliding Door by Teraoka</h3>`;
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
            return `<img src="/products/commercial-doors/33_1.gif" alt="" class="object-contain object-center w-full h-full"> <h3 data-svelte-h="svelte-1rorqws">Commercial Swinging Door by Teraoka</h3>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2 gap-6 place-items-center",
          id: "revolving"
        },
        {},
        {
          default: () => {
            return `<img src="/products/commercial-doors/37_1.gif" alt="" class="object-contain object-center w-full h-full"> <h3 data-svelte-h="svelte-10ptnuw">Commercial Revolving Door by Teraoka</h3>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex  place-items-center",
          id: "revolving"
        },
        {},
        {
          default: () => {
            return `<img src="/products/commercial-doors/re2.gif" alt="" class="object-contain object-center w-full h-full">`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default
};
