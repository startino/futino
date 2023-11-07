import { c as create_ssr_component, v as validate_component, b as each, e as escape } from "../../../chunks/ssr.js";
import { P as Prose } from "../../../chunks/Prose.js";
import { C as Container } from "../../../chunks/Container.js";
import { C as Card } from "../../../chunks/Card.js";
import "crypto-js/sha256.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const historyEvents = [
    {
      date: "08 / 1998",
      event: "Incorporation of Wonderlee in Hong Kong"
    },
    {
      date: "08 / 2000",
      event: "Incorporation of Wonderlee in Foshan"
    },
    {
      date: "10 / 2001 ",
      event: "Debut of first canopy door in China"
    },
    {
      date: "10 / 2001 ",
      event: "Accreditation of ISO 9001"
    },
    {
      date: "12 / 2004 ",
      event: "Relocated to larger facility to have door and parts manufacturing under one roof"
    },
    {
      date: "01 / 2007 ",
      event: "Debut WonderleeTM garage door series"
    },
    {
      date: "01 / 2008 ",
      event: "Inauguration of Foshan Sales Office to serve customers in South China area"
    },
    {
      date: "02 / 2009 ",
      event: "Open sales office in Tianjin to serve customers in Northern China"
    },
    {
      date: "05 / 2012 ",
      event: "Inauguration of Wonderlee shop at Kam Tin Road"
    },
    {
      date: "06 / 2012 ",
      event: "Dealership of Martin Door, the world's finest, safest garage doors"
    },
    {
      date: "04 / 2013 ",
      event: "Designed and built 160 gates for SHK, Riva"
    },
    {
      date: "09 / 2014 ",
      event: "Designed and installed first Renlita Door in Hong Kong"
    },
    {
      date: "10 / 2015  ",
      event: "Hong Kong Building and Hardware Expo"
    },
    {
      date: "05 / 2016 ",
      event: "Build4Asia Exhibition "
    }
  ];
  return `${validate_component(Prose, "Prose").$$render($$result, {}, {}, {
    default: () => {
      return `<section class="grid h-full min-h-screen place-items-center pt-24 gap-12">${validate_component(Container, "Container").$$render($$result, {}, {}, {
        default: () => {
          return `<img src="images/Crew_2021_clip.jpeg" alt="" class="object-center object-cover w-full">`;
        }
      })} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "grid grid-cols-1 md:grid-cols-2 gap-x-12"
        },
        {},
        {
          default: () => {
            return `<h1 class="display-small uppercase m-0 sm:m-0" data-svelte-h="svelte-1m96ilg">About</h1> <p class="body-large m-0 sm:m-0 tracking-wide leading-relaxed md:leading-loose" data-svelte-h="svelte-1vttkfo">With a commitment to excellence since our establishment in 1998,
        Wonderlee has continually evolved to meet the needs of homeowners,
        businesses, and professionals in Hong Kong. Our passion for design,
        precision craftsmanship, and dedication to customer satisfaction have
        earned us a trusted reputation in the industry. We are prescribed as BD
        class 1 Minor Works contractor. <br> Registration no.
        <b>MWC1628/2012 </b>.</p>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "grid grid-cols-1 md:grid-cols-2 gap-x-12"
        },
        {},
        {
          default: () => {
            return `<h1 class="display-small py-2 uppercase m-0 sm:m-0" data-svelte-h="svelte-17g4jcj">History</h1> <p class="body-large m-0 sm:m-0 tracking-wide leading-relaxed md:leading-loose" data-svelte-h="svelte-dvi579">Since 1998, Wonderlee has been a trusted name in gates and garage door
        solutions. With a passion for design and a commitment to excellence,
        we&#39;ve evolved to create transformative solutions for homeowners,
        businesses, and professionals in Hong Kong and the UK. Our enduring
        legacy of quality and customer satisfaction has made Wonderlee a symbol
        of reliability and style in the industry. We&#39;re dedicated to shaping the
        future of property aesthetics and security.</p>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "grid grid-cols-2",
          padding: "pt-24"
        },
        {},
        {
          default: () => {
            return `${each(historyEvents, ({ date, event }, i) => {
              return `${validate_component(Card, "Card").$$render(
                $$result,
                {
                  class: " border-surface-on/40 " + (i % 2 != 0 ? "border-l col-start-2" : "text-right border-r col-start-1") + " relative",
                  style: "grid-row-start: " + (i + 1) + ";",
                  size: "max-w-none w-full",
                  padding: "px-12 py-24",
                  radius: ""
                },
                {},
                {
                  default: () => {
                    return `<span class="${"absolute flex items-center z-0 justify-center w-10 h-10 rounded-full " + escape(
                      i % 2 ? "-left-5 bg-surface" : "-right-5 bg-surface-highlight",
                      true
                    )}" data-svelte-h="svelte-1tdbw63"><svg class="${"w-3 h-3 z-10 " + escape(i % 2 ? "text-surface-on" : "text-surface-highlight-on", true) + " bg-transparent"}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path></svg></span> <h6 class="text-tertiary m-0 sm:m-0">${escape(date)}</h6> <h4 class="m-0 sm:m-0">${escape(event)}</h4> `;
                  }
                }
              )}`;
            })}`;
          }
        }
      )}</section> <section class="grid place-items-center h-full pt-24">${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "grid grid-cols-1 md:grid-cols-4 place-items-center  gap-8 not-prose"
        },
        {},
        {
          default: () => {
            return `${validate_component(Container, "Container").$$render($$result, { class: "col-span-1 md:col-span-2" }, {}, {
              default: () => {
                return `<img src="/images/BD_Class-1-1.jpg" alt="" class="object-contain object-center w-fit h-full">`;
              }
            })} ${validate_component(Container, "Container").$$render($$result, { class: "md:col-span-2" }, {}, {
              default: () => {
                return `<img src="/images/EMSD_REC.jpg" alt="" class="object-contain h-full w-full object-center max-h-96">`;
              }
            })} ${each(Array(4), (_, i) => {
              return `${validate_component(Container, "Container").$$render($$result, { class: "h-full w-full" }, {}, {
                default: () => {
                  return `<img src="${"/images/Patent-0" + escape(i + 1, true) + ".png"}" alt="" class="object-contain object-center w-full h-full max-h-96"> `;
                }
              })}`;
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
