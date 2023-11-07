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
            return `<img src="/products/shutter-doors/roller/roller-shutter.gif" alt="" class="object-contain object-center w-1/2 h-1/2"> <div class="flex flex-col col-span-1" data-svelte-h="svelte-1dbfqv4"><h3>How does electrically operated roller shutter opener work</h3> <ul class="ulink"><li>The weight of the roller shutter is supported by an axial concealed
          inside a cell horizontally above the entrance.</li> <li>Microprocessor inside the control box received encrypted signal from
          the remote control, amongst other operation such as auto reversal upon
          obstruction and recognizing up to 16 remote control, opens or closes
          the door electrically with a motor.</li> <li>The gate opener only needs to overcome inertia and friction to move
          the gate. Gate can go up to 6 meter in length and 100 Kg in weight.
          Material can be stainless steel, wrought iron, brass, Aluminum or
          glass.</li></ul></div>`;
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
            return `<img src="/products/shutter-doors/roller/roller_ani.gif" alt="" class="object-contain object-center w-full h-full"> <div class="flex flex-col col-span-1" data-svelte-h="svelte-19mroy0"><h3>Safety and convenience features of roller shutter</h3> <ul class="ulink"><li>Soft-start/soft-start and smooth movement at around 10cm per second.</li> <li>Space saving design, the whole shutter rolls up into a concealing
          cell.</li> <li>Additional locking mechanism required.</li></ul></div>`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default
};
