import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Container } from "../../../../chunks/Container.js";
import "crypto-js/sha256.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const renlita_doors = [
    {
      label: "Renlita Floataway",
      id: "floataway",
      description: [
        " Balanced by counter-weight, the whole door goes up as if float-away.",
        "Built by Renlita USA according to ANSI standard.",
        "Maximum 32' wide and 20' high.",
        "Powered with electrically operated opener for remote control access."
      ]
    },
    {
      label: "Renlita Hingeway",
      id: "hingeway",
      description: [
        " Balanced by counter-weight, the whole door goes up as if hinge-away.",
        "Built by Renlita USA according to ANSI standard.",
        "Maximum 32' wide and 20' high.",
        "Powered with electrically operated opener for remote control access."
      ]
    },
    {
      label: "Renlita Foldaway",
      id: "foldaway",
      description: [
        "Balanced by counter-weight, the whole door goes up as if fold-away.",
        "Built by Renlita USA according to ANSI standard.",
        "Maximum 90' wide and 30' high.",
        "Designed to wind load of 10 PSF.",
        "Powered with electrically operated opener for remote control access."
      ]
    },
    {
      label: "Renlita A750 NuFold",
      id: "nufold",
      description: [
        "Balanced by counter-weight, the whole door goes up without interior projection.",
        "Built by Renlita USA according to ANSI standard.",
        "Maximum 18' wide and 12' high.",
        "Designed to wind load of 30 PSF.",
        "Powered with electrically operated opener for remote control access."
      ]
    },
    {
      label: " Renlita Sovereign",
      id: "sovereign",
      description: [
        "Also known as stacking door, all panels stack up to the ceiling.",
        "Built by Renlita USA according to ANSI standard.",
        "Maximum 16' wide and 12' high.",
        "Powered with electrically operated opener for remote control access."
      ]
    },
    {
      label: " Renlita Frameless Glass",
      id: "frameless-glass",
      description: [
        "Elegant window wall with no floor track.",
        "Slide neatly into stacking bay.",
        "Maximum 12' high.",
        "Powered with electrically operated opener for remote control access."
      ]
    }
  ];
  return `${validate_component(Container, "Container").$$render($$result, { class: "flex flex-col gap-12 pt-44" }, {}, {
    default: () => {
      return `${validate_component(Container, "Container").$$render($$result, { class: "flex flex-col" }, {}, {
        default: () => {
          return `<h2 data-svelte-h="svelte-tw79rd">Different Renlita Doors</h2> <div class="grid grid-cols-1 gap-6 place-items-center">${each(renlita_doors, ({ label, id }) => {
            return `<div class="flex flex-col place-items-center"><img src="${"/products/renlita-doors/" + escape(id, true) + "-1.jpg"}" alt="" class="object-contain object-center w-full h-full"> ${validate_component(Button, "Button").$$render($$result, { href: "#" + id, class: "w-full" }, {}, {
              default: () => {
                return `${escape(label)}`;
              }
            })} </div>`;
          })}</div>`;
        }
      })} ${each(renlita_doors, ({ label, id, description }) => {
        return `${validate_component(Container, "Container").$$render(
          $$result,
          {
            class: "flex flex-col md:grid md:grid-cols-2 gap-6",
            id
          },
          {},
          {
            default: () => {
              return `<div class="grid grid-cols-2 md:grid-cols-1 not-prose"><img src="${"/products/renlita-doors/" + escape(id, true) + "-1.jpg"}" alt="" class="object-contain object-center w-full h-full"> <img src="${"/products/renlita-doors/" + escape(id, true) + "-2.jpg"}" alt="" class="object-contain object-center w-full h-full"></div> <div class="flex flex-col col-span-1"><h2>${escape(label)}</h2> <ul class="ulink">${each(description, (item) => {
                return `<li>${escape(item)} </li>`;
              })} </ul></div> `;
            }
          }
        )}`;
      })}`;
    }
  })}`;
});
export {
  Page as default
};
