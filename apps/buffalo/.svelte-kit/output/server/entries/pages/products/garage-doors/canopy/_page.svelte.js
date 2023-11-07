import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { C as Container } from "../../../../../chunks/Container.js";
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
            return `<img src="/products/garage-doors/canopy/canopy1.jpg" alt="" class="object-cover object-center w-full h-full"> <h3 data-svelte-h="svelte-1aowx4t">Unlike sectional garage doors that horizontal sections are joint together
      by hinges, canopy garage doors have a 1-piece door panel that will form a
      canopy when fully open</h3>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2 gap-6 place-items-center"
        },
        {},
        {
          default: () => {
            return `<img src="/products/garage-doors/canopy/1-piece_ani.gif" alt="" class="object-cover object-center w-full h-full"> <div class="flex flex-col" data-svelte-h="svelte-nit0zr"><h3>How does canopy garage door work</h3> <ul><li>Door frame is constructed by extruded Aluminum.</li> <li>Frosted tempered glasses in-fill give the door its unique modern look.</li> <li>The door panel is guided by tracks and balanced by a spring system.</li> <li>Electrically operated garage door opener opens or closes the garage
          door quietly and locks it completely when closed.</li> <li>Other advanced features such as auto-reverse upon obstruction and
          auto-light further enhance safety and convenience.</li></ul></div>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:grid md:grid-cols-2 gap-6 place-items-center"
        },
        {},
        {
          default: () => {
            return `<img src="/products/garage-doors/canopy/canopybig_200.gif" alt="" class="object-cover object-center w-full h-full"> <div class="flex flex-col" data-svelte-h="svelte-1gzatgb"><h3>Advantage</h3> <ul><li>As part of the door panel stays out when fully opened, canopy door
          needs less space to install, ideal for garage with ceiling
          obstruction.</li> <li>Semi-transparent frosted tempered glasses provide light for the garage
          during the day. At night, it becomes a light source for the yard
          outside with garage lights turned on.</li> <li>Aluminum and glass will never rust, prefect for the humid weather in
          Hong Kong.</li></ul></div>`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default
};
