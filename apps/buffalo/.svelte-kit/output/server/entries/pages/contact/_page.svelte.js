import { c as create_ssr_component, v as validate_component, d as each, b as add_attribute } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Button.js";
import { P as Prose } from "../../../chunks/Prose.js";
import "svelte-inview";
import { a as fromLeftPreset, b as fromRightPreset, S as Section, V as Video, C as Container, I as Inview } from "../../../chunks/transitionOptions.js";
import "crypto-js/sha256.js";
import { s as socials, C as ContactForm } from "../../../chunks/socials.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Prose, "Prose").$$render($$result, { size: "lg" }, {}, {
    default: () => {
      return `${validate_component(Section, "Section").$$render(
        $$result,
        {
          class: "bg-background py-32 md:py-44 text-left",
          id: "contact"
        },
        {},
        {
          default: () => {
            return `${validate_component(Video, "Video").$$render(
              $$result,
              {
                class: "absolute w-full h-full not-prose object-cover object-center",
                srcset: { md: "/videos/slow_bjj.mp4", lg: "" }
              },
              {},
              {}
            )} <div class="bg-black/70 w-full h-full absolute z-[5]"></div> ${validate_component(Container, "Container").$$render(
              $$result,
              {
                class: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start z-[7]",
                sizes: "max-w-7xl w-full"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Inview, "Inview").$$render($$result, { presetOptions: fromLeftPreset }, {}, {
                    default: () => {
                      return `<div class="flex flex-col gap-8"><h2 class="" style="margin:0" data-svelte-h="svelte-18gah2z">GET IN TOUCH, <br> YOU’LL BE GLAD YOU DID</h2> <p style="margin:0" data-svelte-h="svelte-1v6iiz7">You’ve had a look at the site. You’re clearly Jiu-Jitsu-curious.
            Whether you’re big, small, young, old, male, female, a beast or a
            nerd, we have a home for you here.</p> <p style="margin:0" data-svelte-h="svelte-rfzqct">info@buffalojiujitsu.hk <br> (+852) 9648 2270 <br> <br> 1/F
            Buffalo Strength Gym <br> Mui Wo, Lantau Island, Hong Kong</p> <div class="flex flex-row gap-4 not-prose">${each(socials, ({ href, icon }) => {
                        return `<a${add_attribute("href", href, 0)} target="new" class="">${validate_component(Icon, "Icon").$$render($$result, { icon, height: "32", width: "32" }, {}, {})} </a>`;
                      })}</div></div>`;
                    }
                  })} ${validate_component(Inview, "Inview").$$render($$result, { presetOptions: fromRightPreset }, {}, {
                    default: () => {
                      return `${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}`;
                    }
                  })}`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Section, "Section").$$render($$result, { class: "py-12 md:py-24" }, {}, {
        default: () => {
          return `${validate_component(Container, "Container").$$render(
            $$result,
            {
              class: "grid grid-cols-1 xl:grid-cols-2 gap-x-12 items-start justify-start",
              sizes: "max-w-none w-full",
              padding: "px-6 md:px-16 lg:px-32"
            },
            {},
            {
              default: () => {
                return `<img src="/images/buffalo_travel_times_1.jpg" alt="Travel times to Buffalo Jiu-Jitsu" class="object-contain not-prose max-w-7xl w-full rounded-sm my-auto"> ${validate_component(Inview, "Inview").$$render($$result, { presetOptions: fromLeftPreset }, {}, {
                  default: () => {
                    return `<div class="flex flex-col" data-svelte-h="svelte-2q8ykb"><h3>Arriving by ferry?</h3> <p>Turn left when you get off the ferry and walk past McDonalds, China
            Bear, The Kitchen and Isara.</p> <h3>Arriving by bus?</h3> <p>Take the 1 bus from Tai O or the 3M from Tung Chung. Wait until the
            bus gets to the Mui Wo Bus Terminus (the final stop, by the ferry
            pier) and walk past McDonalds, China Bear, The Kitchen and Isara.</p></div>`;
                  }
                })}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
