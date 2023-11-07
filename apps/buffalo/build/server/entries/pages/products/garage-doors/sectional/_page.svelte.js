import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { C as Container } from "../../../../../chunks/Container.js";
import "crypto-js/sha256.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Container, "Container").$$render($$result, { class: "flex flex-col pt-44" }, {}, {
    default: () => {
      return `${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:flex-row  gap-6"
        },
        {},
        {
          default: () => {
            return `<img src="/products/garage-doors/sectional/3-d-GARAGE.gif" alt="" class="object-cover object-center w-full h-full"> <h3 data-svelte-h="svelte-1vqt9ha">Sectional garage doors are guided by tracks that open upwards to over head
      position electrically by garage door openers controlled by a handheld
      remote control.</h3>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render($$result, { class: "flex flex-col md:flex-row gap-6" }, {}, {
        default: () => {
          return `<img src="/products/garage-doors/sectional/Garage-door-GIF.gif" alt="" class="object-cover object-center w-full h-full"> <div class="flex flex-col" data-svelte-h="svelte-lxmcf6"><h3>By installing a garage door opener, you no longer have to get out of the
        car to open the garage door manually every time you come home. Besides
        convenience, automated garage door offers additional security features:</h3> <ul style="width: 410px"><li class="ulink">The opener replaces the garage door lock, it locks the door
          automatically when closing.</li> <li>Opener also provides light whenever the door is activated.</li> <li>Automated opener will reverse when obstructed going down, and will
          stop when obstructed going up.</li></ul></div>`;
        }
      })} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col md:flex-row  gap-6"
        },
        {},
        {
          default: () => {
            return `<img src="/products/garage-doors/sectional/img13.jpg" alt="" class="object-cover object-center w-full h-full"> <div class="flex flex-col" data-svelte-h="svelte-1gyvz8z"><h3>By installing a garage door opener, you no longer have to get out of the
        car to open the garage door manually every time you come home. Besides
        convenience, automated garage door offers additional security features:</h3> <ul class="ulink"><li>The weight of the garage door is counter-balanced by the torsion
          spring.</li> <li>Microprocessor inside the opener received encrypted signal from the
          remote control, amongst other operation such as auto reversal upon
          obstruction and recognizing up to 16 remote control, opens or closes
          the door electrically with a motor.</li> <li>The garage door opener only needs to overcome friction to lift or
          lower the door much faster.</li> <li>As the power rail is right above the middle of the door and acts along
          its center of gravity, door movement is much more stable and as a
          result, quieter.</li></ul></div>`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default
};
