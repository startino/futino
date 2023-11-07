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
            return `<div class="flex flex-col w-full" data-svelte-h="svelte-13yl2wb"><img src="/products/avon-barriers/SG1100CR_1.jpg" alt="" class="object-contain object-center w-full h-full mb-2 sm:mb-2"> <p class="m-0 sm:m-0">Armoured vehicle gate</p></div> <div class="flex flex-col col-span-1" data-svelte-h="svelte-1g0o8zt"><h3>Features</h3> <ul><li>Physically impact tested to PAS 68 criteria</li> <li>Manufactured from heavy gauge materials</li> <li>Variable height and clear widths</li> <li>Manual operating override facility</li> <li>High quality coating system (minimum galvanised)</li> <li>Shallow mounting less than 500mm overall depth</li> <li>Hold to run operation (deadman mode)</li></ul></div>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-3 gap-6  justify-items-start",
          id: "sliding"
        },
        {},
        {
          default: () => {
            return `<div class="flex flex-col w-full" data-svelte-h="svelte-1u69szx"><img src="/products/avon-barriers/65750-2568855.jpg" alt="" class="object-contain object-center w-full h-full mb-2 sm:mb-2"> <p class="m-0 sm:m-0">Road blocker</p></div> <div class="flex flex-col col-span-2 w-full" data-svelte-h="svelte-j5tdp5"><img src="/products/avon-barriers/PAS68_test_scenes.jpg" alt="" class="object-contain object-center w-full h-full mb-2 sm:mb-2"> <div class="flex flex-row gap-4 place-items-center"><p class="m-0 sm:m-0">PAS 68 tested</p> <a href="https://www.youtube.com/watch?v=_971t37TrB4">Watch video on YouTube</a></div></div>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2 gap-6 place-items-center",
          id: "sliding"
        },
        {},
        {
          default: () => {
            return `<div class="flex flex-col w-full" data-svelte-h="svelte-1p0ugbs"><img src="/products/avon-barriers/SB970CR-Scmitar-Bollards-automatic-1.jpg" alt="" class="object-contain object-center w-full h-full mb-2 sm:mb-2"> <p class="m-0 sm:m-0">Removable bollards</p></div> <div class="flex flex-col col-span-1" data-svelte-h="svelte-y2mg2m"><h3>Features</h3> <ul><li>Ballards either retractable, fixed or removable</li> <li>Constructed from heavy gauge material</li> <li>Variety of finishes: paint, stainless steel sleeves</li> <li>Minimum foundation about 2 cubic metres</li></ul></div>`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default
};
