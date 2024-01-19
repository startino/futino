import { z as create_anchor, E as ensure_array_like, B as attr, y as pop, t as push } from "../../../chunks/index.js";
import { I as Icon } from "../../../chunks/Button.js";
import { P as Prose } from "../../../chunks/ContactForm.svelte_svelte_type_style_lang.js";
import { S as Section, V as Video, C as Container, I as Inview, f as fromLeftPreset, a as fromRightPreset } from "../../../chunks/transitionOptions.js";
import { C as ContactForm, s as socials } from "../../../chunks/socials.js";
function _page($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Prose($$payload, {
    size: "lg",
    children: ($$payload2, $$slotProps) => {
      const anchor_1 = create_anchor($$payload2);
      const anchor_10 = create_anchor($$payload2);
      $$payload2.out += `${anchor_1}`;
      Section($$payload2, {
        class: "bg-background py-32 md:py-44 text-left",
        id: "contact",
        children: ($$payload3, $$slotProps2) => {
          const anchor_2 = create_anchor($$payload3);
          const anchor_3 = create_anchor($$payload3);
          $$payload3.out += `${anchor_2}`;
          Video($$payload3, {
            class: "absolute w-full h-full not-prose object-cover object-center",
            srcset: { md: "/videos/slow_bjj.mp4", lg: "" }
          });
          $$payload3.out += `${anchor_2} <div class="bg-black/70 w-full h-full absolute z-[5]"></div> ${anchor_3}`;
          Container($$payload3, {
            class: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start z-[7]",
            sizes: "max-w-7xl w-full",
            children: ($$payload4, $$slotProps3) => {
              const anchor_4 = create_anchor($$payload4);
              const anchor_8 = create_anchor($$payload4);
              $$payload4.out += `${anchor_4}`;
              Inview($$payload4, {
                presetOptions: fromLeftPreset,
                children: ($$payload5, $$slotProps4) => {
                  const anchor_5 = create_anchor($$payload5);
                  const each_array = ensure_array_like(socials);
                  $$payload5.out += `<div class="flex flex-col gap-8"><h2 style="margin:0">GET IN TOUCH, <br> YOU’LL BE GLAD YOU DID</h2> <p style="margin:0">You’ve had a look at the site. You’re clearly Jiu-Jitsu-curious. Whether you’re big, small, young, old, male, female, a beast or a nerd, we have a home for you here.</p> <p style="margin:0">info@buffalojiujitsu.hk <br> (+852) 9648 2270 <br> <br> 1/F Buffalo Strength Gym <br> Mui Wo, Lantau Island, Hong Kong</p> <div class="flex flex-row gap-4 not-prose">${anchor_5}`;
                  for (let $$index = 0; $$index < each_array.length; $$index++) {
                    const $$item = each_array[$$index];
                    const { href, icon } = $$item;
                    const anchor_6 = create_anchor($$payload5);
                    const anchor_7 = create_anchor($$payload5);
                    $$payload5.out += `${anchor_6}<a${attr("href", href, false)} target="new">${anchor_7}`;
                    Icon($$payload5, { icon, height: "32", width: "32" });
                    $$payload5.out += `${anchor_7}</a>${anchor_6}`;
                  }
                  $$payload5.out += `${anchor_5}</div></div>`;
                }
              });
              $$payload4.out += `${anchor_4} ${anchor_8}`;
              Inview($$payload4, {
                presetOptions: fromRightPreset,
                children: ($$payload5, $$slotProps4) => {
                  const anchor_9 = create_anchor($$payload5);
                  $$payload5.out += `${anchor_9}`;
                  ContactForm($$payload5, {});
                  $$payload5.out += `${anchor_9}`;
                }
              });
              $$payload4.out += `${anchor_8}`;
            }
          });
          $$payload3.out += `${anchor_3}`;
        }
      });
      $$payload2.out += `${anchor_1} ${anchor_10}`;
      Section($$payload2, {
        class: "py-12 md:py-24",
        children: ($$payload3, $$slotProps2) => {
          const anchor_11 = create_anchor($$payload3);
          $$payload3.out += `${anchor_11}`;
          Container($$payload3, {
            class: "grid grid-cols-1 xl:grid-cols-2 gap-x-12 items-start justify-start",
            sizes: "max-w-none w-full",
            padding: "px-6 md:px-16 lg:px-32",
            children: ($$payload4, $$slotProps3) => {
              const anchor_12 = create_anchor($$payload4);
              $$payload4.out += `<img id="find-us" src="/images/buffalo_travel_times_1.jpg" alt="Travel times to Buffalo Jiu-Jitsu" class="object-contain not-prose max-w-7xl w-full rounded-sm my-auto"> ${anchor_12}`;
              Inview($$payload4, {
                presetOptions: fromLeftPreset,
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<div class="flex flex-col"><h3>Arriving by ferry?</h3> <p>Turn left when you get off the ferry and walk past McDonalds, China Bear, The Kitchen and Isara.</p> <h3>Arriving by bus?</h3> <p>Take the 1 bus from Tai O or the 3M from Tung Chung. Wait until the bus gets to the Mui Wo Bus Terminus (the final stop, by the ferry pier) and walk past McDonalds, China Bear, The Kitchen and Isara.</p></div>`;
                }
              });
              $$payload4.out += `${anchor_12}`;
            }
          });
          $$payload3.out += `${anchor_11}`;
        }
      });
      $$payload2.out += `${anchor_10}`;
    }
  });
  $$payload.out += `${anchor}`;
  pop();
}
export {
  _page as default
};
