import { c as create_ssr_component, v as validate_component, b as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { P as Prose } from "../../../chunks/Prose.js";
import { C as Container } from "../../../chunks/Container.js";
import { C as Card } from "../../../chunks/Card.js";
import "crypto-js/sha256.js";
import { p as projects } from "../../../chunks/projects.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Prose, "Prose").$$render($$result, {}, {}, {
    default: () => {
      return `<section class="grid place-items-center pt-44"><h1 class="uppercase m-0 sm:m-0" data-svelte-h="svelte-1n4bnua">Our Work</h1> ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "grid grid-cols-1 sm:grid-cols-2 place-items-center gap-y-12",
          sizes: "max-w-none w-full",
          margin: "mt-32"
        },
        {},
        {
          default: () => {
            return `<div class="absolute hidden sm:flex border-r border-surface-on h-full"></div> ${each(Object.entries(projects), ([id, project], i) => {
              return `${validate_component(Card, "Card").$$render(
                $$result,
                {
                  class: "grid grid-cols-1 items-start content-start " + (i % 2 == 0 ? "weshallseemt-44" : "idkkk-mt-44"),
                  size: "max-w-4xl w-full h-full"
                },
                {},
                {
                  default: () => {
                    return `<h6 class="${"" + escape(i % 2 == 0 ? "justify-self-end" : "justify-self-start", true) + " m-0 sm:m-0 text-tertiary"}">${escape(project.date)}</h6> <div class="grid grid-cols-1 xl:grid-cols-2 gap-y-2 items-start gap-x-4"><div class="${"flex flex-col xl:col-start-" + escape(
                      i % 2 == 0 ? "1 justify-self-end" : "2 justify-self-startt",
                      true
                    )}"><h3 class="mt-0 sm:mt-0">${escape(project.name)}</h3> <ul class="m-0 sm:m-0">${each(project.description, (item) => {
                      return `<li class="m-0 sm:m-0"><p class="m-0 sm:m-0 prose-sm">${escape(item)}</p> </li>`;
                    })} </ul></div> <img${add_attribute("src", project.thumbnail, 0)} alt="" class="${"object-cover object-center w-full md:h-72 not-prose row-start-1 " + escape(
                      i % 2 == 0 ? "xl:justify-self-end xl:col-start-2" : "xl:justify-self-start xl:col-start-1 ",
                      true
                    )}"></div> `;
                  }
                }
              )}`;
            })}`;
          }
        }
      )}</section>`;
    }
  })}`;
});
export {
  Page as default
};
