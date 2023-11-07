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
            return `<img src="/products/shutter-doors/fire/Westwood-Fire-Shutters.jpg" alt="" class="object-contain object-center w-1/2 h-1/2"> <div class="flex flex-col col-span-1" data-svelte-h="svelte-b5byjj"><h3>Sole agent of
        <a href="http://www.rollershutter.co.uk/23/fire-shutters-fire-roller-shutters"><strong>Westwood Security Shutter</strong></a> from UK</h3> <ul class="ulink"><li>Established in 1994 Westwood Security Shutters UK is specialist
          manufacturer and exporter of electrically operated Roller Shutters,
          Fire Resistant Roller Shutters Twin Skin Insulated Roller Shutters,
          Retractable Gates and Industrial Insulated Doors.</li> <li>Westwood Single and Twin Skin Lath Fire Rated Roller Shutters are
          tested to Exova Fire and Safety BSEN 1634-1 and providing up to 4
          Hours of fire resistance. The Double Skin Insulated Lath offers
          additional heat radiation protection.</li> <li>Westwood offers quick turnaround. For supply only orders the fire
          rated shutters will arrive Hong Kong within 4 weeks.</li></ul></div>`;
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
            return `<img src="/products/shutter-doors/fire/fire-shutter.jpg" alt="" class="object-contain object-center w-1/2 h-1/2"> <div class="flex flex-col col-span-1" data-svelte-h="svelte-17vggt7"><h3>How do fire shutters work</h3> <ul class="ulink"><li>Building regulations require that openings in fire resisting walls or
          partitions must have a door with an equivalent fire rating to that of
          the wall or partition.</li> <li>Heat radiated from a nearby fire causes the fusible link to melt and
          this activates the shutter.</li> <li>or, using fire relay connected to the fire alarm system, when the FS
          alarm is sounded, the shutter activates.</li> <li>or, a delayed Audio/Visual Warning system in connection with the Fire
          Shutter is connected to the alarm system, and operates usually with a
          time delay very similarly to a fire relay. During this delay an
          additional alarm is sounded, warning those in close proximity to the
          door that is about to close, thus allowing them to exit the affected
          area.</li></ul></div>`;
          }
        }
      )}`;
    }
  })}`;
});
export {
  Page as default
};
