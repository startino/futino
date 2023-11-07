import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { P as Prose } from "../../../chunks/Prose.js";
import { C as Container } from "../../../chunks/Container.js";
import "crypto-js/sha256.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const services = {
    Safety: {
      id: "/",
      icon: "safety",
      body: "Safety is our number one concern and we are proud of our perfect safety record and the strict compliance to international safety standard."
    },
    Design: {
      id: "design",
      icon: "design",
      body: `Our design services are the foundation of remarkable gates and garage doors. Our expert designers collaborate closely with you to bring your vision to life, ensuring your property shines with exceptional aesthetics.`
    },
    Install: {
      id: "install",
      icon: "construction",
      body: `When it comes to installation, Wonderlee sets the standard. Our skilled technicians guarantee flawless installation, ensuring your gates and garage doors are durable and functional. We handle every detail for your peace of mind.`
    },
    "DIY Repair": {
      id: "diy-repair",
      icon: "repair",
      body: `Wonderlee offers DIY repair solutions for those who prefer hands-on approaches. We provide guidance, tools, and parts to help you efficiently address common repair issues, restoring your gates and garage doors.`
    },
    Maintenance: {
      id: "maintenance",
      icon: "maintenance",
      body: `At Wonderlee, our maintenance services ensure peace of mind. We provide 24-hour technical support via telephone. Under our maintenance contract, inspections and maintenance every 6 months by our experienced team.`
    }
  };
  return `${validate_component(Prose, "Prose").$$render($$result, {}, {}, {
    default: () => {
      return `<section class="grid place-items-center pt-44">${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "grid place-items-center",
          sizes: "max-w-none w-full"
        },
        {},
        {
          default: () => {
            return `<h5 class="font-black leading-0 m-0 sm:m-0 text-center" data-svelte-h="svelte-a83t1m">Our <span class="text-7xl sm:text-9xl md:text-[10rem] uppercase text-tertiary m-0 sm:m-0">Mission</span>
        is to <br>
        exceed customers expectations in
        <span class="text-tertiary">every single aspect</span>.</h5> <div class="grid grid-cols-1 md:grid-cols-5 gap-x-4 gap-y-4 place-items-center py-12">${each(Object.entries(services), ([label, { id, body }]) => {
              return `<a href="${"#" + escape(id, true)}" class="uppercase m-0 sm:m-0 whitespace-nowrap text-5xl md:text-2xl lg:text-4xl mx-auto text-surface-on underline tracking-tighter">${escape(label)}.</a>`;
            })}</div>`;
          }
        }
      )} <section class="grid h-full min-h-screen place-items-center pt-44 gap-24">${each(Object.entries(services), ([label, { id, body, icon }]) => {
        return `${validate_component(Container, "Container").$$render(
          $$result,
          {
            class: "flex flex-col gap-6 rounded-3xl",
            id
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-row place-items-center gap-12"><h1 class="display-small uppercase m-0 sm:m-0">${escape(label)}</h1> ${validate_component(Icon, "Icon").$$render($$result, { icon, height: "48", width: "48" }, {}, {})}</div> <p class="m-0 sm:m-0">${escape(body)}</p> `;
            }
          }
        )}`;
      })}</section></section>`;
    }
  })}`;
});
export {
  Page as default
};
