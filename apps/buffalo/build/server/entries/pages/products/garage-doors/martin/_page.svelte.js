import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { C as Container } from "../../../../../chunks/Container.js";
import "crypto-js/sha256.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container, "Container").$$render($$result, { class: "flex flex-col gap-12 pt-44" }, {}, {
    default: () => {
      return `${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2 gap-6 place-items-center"
        },
        {},
        {
          default: () => {
            return `<img src="/products/garage-doors/martin/Martin-Logo-1936.gif" alt="" class="object-contain object-center w-full h-full"> <h3 class="" data-svelte-h="svelte-h1yycv">Made in the USA, Martin’s high quality garage doors are The world&#39;s
      finest, safest doors. We are proud to be the authorized dealer.</h3>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2 gap-6"
        },
        {},
        {
          default: () => {
            return `<img src="/products/garage-doors/martin/martin.gif" alt="" class="object-contain object-center w-full h-full"> <div class="flex flex-col" data-svelte-h="svelte-7f7l2p"><p>Martin offers an extensive line of copper and glass garage doors. Our
        award winning designs are something you’ll want to tell your friends
        about.</p> <p>Martin builds a door that is green, handles high winds and the elements
        and is adaptable to conditions throughout the world. Many models come
        with a lifetime warranty. Its value makes it a best buy for the
        consumer.</p></div>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2  gap-6"
        },
        {},
        {
          default: () => {
            return `<img src="/products/garage-doors/martin/Garage-Door-Inside-100.gif" alt="" class="object-contain object-center w-full h-full"> <div class="flex flex-col" data-svelte-h="svelte-ys9riy"><p>Martin offers optional powder coated hardware to give a finishing touch
        to your garage. Tracks, track brackets, spring brackets and bearing
        plates are in matching color of the garage door.</p></div>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2  gap-6"
        },
        {},
        {
          default: () => {
            return `<img src="/products/garage-doors/martin/multi-layer-coating.jpg" alt="" class="object-contain object-center w-full h-full"> <p class="" data-svelte-h="svelte-1tw7ilq">Martin Door paint finish has superior UV protection and corrosion
      resistance and the lasting, most durable finish available.</p>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2 gap-6"
        },
        {},
        {
          default: () => {
            return `<img src="/products/garage-doors/martin/UL-Logo_BK.gif" alt="" class="object-contain object-center w-full h-full"> <div class="flex flex-col" data-svelte-h="svelte-10lx4v5"><p>The UL listing assures all consumers that a Martin door system is both
        electronically and mechanically safer. The full and complete lines of
        electric garage door systems cover a size range in all models listed
        from 8&#39; wide by 7&#39; high, through 20&#39; wide and 12&#39; high.</p> <p>The UL listing, combined with ISO9001 registration, makes Martin Door
        the only door manufacturer in the world to have the dual designation.</p></div>`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default
};
