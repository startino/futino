import { A as value_or_fallback, z as create_anchor, C as stringify, B as attr, G as slot, F as escape_text, E as ensure_array_like, x as bind_props, y as pop, D as sanitize_props, t as push, v as copy_payload, w as assign_payload } from "../../chunks/index.js";
import { B as Button, I as Icon } from "../../chunks/Button.js";
import { P as Prose } from "../../chunks/ContactForm.svelte_svelte_type_style_lang.js";
import { S as Section, I as Inview, d as downFadePreset, C as Container, f as fromLeftPreset, V as Video, a as fromRightPreset, b as fromTopPreset } from "../../chunks/transitionOptions.js";
import { s as socials, C as ContactForm } from "../../chunks/socials.js";
import { C as Classes } from "../../chunks/Classes.js";
function Hero($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  let bgImg = value_or_fallback($$props["bgImg"], "");
  let bgVideo = $$props["bgVideo"];
  let bgCover = value_or_fallback($$props["bgCover"], "bg-black/0");
  let parallax = value_or_fallback($$props["parallax"], false);
  let title = value_or_fallback($$props["title"], "This is a great title for Company Name");
  let subtitle = value_or_fallback($$props["subtitle"], "This is an even better piece of text. Specifically, this is a subtitle");
  let typography = value_or_fallback($$props["typography"], "");
  let CTAButtons = value_or_fallback($$props["CTAButtons"], {
    "CTA ONE": { href: "/", highlight: true },
    "CTA TWO": { href: "/", highlight: false }
  });
  let buttonVariant = value_or_fallback($$props["buttonVariant"], "normal");
  let justified = value_or_fallback($$props["justified"], "center");
  let justifyClass = () => {
    switch (justified) {
      case "left":
        return "items-start text-left";
      case "right":
        return "items-end text-right";
      case "center":
        return "items-center text-center";
    }
  };
  let y;
  let scrollY;
  scrollY = Math.round(y);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Section($$payload, {
    class: `h-screen w-full z-0 ${stringify(typography)}`,
    style: `${stringify($$sanitized_props.style)} ; clip-path: inset(0 0 0 0);`,
    children: ($$payload2, $$slotProps) => {
      const anchor_1 = create_anchor($$payload2);
      const anchor_2 = create_anchor($$payload2);
      const anchor_3 = create_anchor($$payload2);
      const anchor_4 = create_anchor($$payload2);
      const anchor_5 = create_anchor($$payload2);
      $$payload2.out += `<div${attr("class", `${stringify(bgCover)} w-full h-full z-0 absolute`, false)}></div> <div${attr("class", `${stringify(parallax ? "fixed" : "absolute ")} w-full h-full not-prose -z-10 transition-transform duration-700`, false)}${attr("style", parallax && scrollY < 1e3 ? "transform: translateY(-" + scrollY / 7 + "px) scale(" + (1.2 - scrollY / 5e3) + "); transition-timing-function: cubic-bezier(0,.5,.5,1);" : "", false)}>${anchor_1}`;
      if (bgVideo) {
        $$payload2.out += "<!--ssr:if:true-->";
        $$payload2.out += `<video muted id="clip" preload="auto" autoplay loop class="object-cover object-center w-full h-screen max-h-screen"><source type="video/webm" title="Hero Video" media="(min-width: 800px)"${attr("src", bgVideo["lg"], false)}> <source type="video/webm" media="(max-width: 799px)"${attr("src", bgVideo["md"], false)}> Your Browser does not support our video types</video>`;
      } else {
        $$payload2.out += "<!--ssr:if:false-->";
      }
      $$payload2.out += `${anchor_1} ${anchor_2}`;
      if (bgImg) {
        $$payload2.out += "<!--ssr:if:true-->";
        $$payload2.out += `<img${attr("src", bgImg, false)} alt="" class="object-cover object-center w-full h-screen max-h-screen mix-blend-darken">`;
      } else {
        $$payload2.out += "<!--ssr:if:false-->";
      }
      $$payload2.out += `${anchor_2} ${anchor_3}`;
      slot($$payload2, $$props.children, {}, null);
      $$payload2.out += `${anchor_3}</div> <div${attr("class", `flex flex-col w-full z-10 items-center ${stringify(justifyClass())} my-auto gap-12 mx-2 sm:mx-4 md:mx-6 transition-transform duration-700 ${stringify(parallax ? "fixed" : "")}`, false)}${attr("style", parallax && scrollY < 1e3 ? "transform:  scale(" + (1 + scrollY / 9e3) + ");  transition-timing-function: cubic-bezier(0,.5,.5,1);" : "", false)}>${anchor_4}`;
      Inview($$payload2, {
        class: "w-full h-full",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<div class="flex flex-col items-center gap-4"><h1 style="margin: 0px">${escape_text(title)}</h1> <h5 class="max-w-6xl" style="margin: 0px">${escape_text(subtitle)}</h5></div>`;
        }
      });
      $$payload2.out += `${anchor_4} ${anchor_5}`;
      Inview($$payload2, {
        class: "w-fit h-full",
        children: ($$payload3, $$slotProps2) => {
          const anchor_6 = create_anchor($$payload3);
          const each_array = ensure_array_like(Object.entries(CTAButtons));
          $$payload3.out += `<div${attr("class", `h-full w-fit grid grid-cols-${stringify(Object.entries(CTAButtons).length)} gap-4 md:gap-6 place-items-center w-fit`, false)}>${anchor_6}`;
          for (let $$index = 0; $$index < each_array.length; $$index++) {
            const $$item = each_array[$$index];
            const [label, { href, highlight }] = $$item;
            const anchor_7 = create_anchor($$payload3);
            const anchor_8 = create_anchor($$payload3);
            $$payload3.out += `${anchor_7}${anchor_8}`;
            Button($$payload3, {
              variant: buttonVariant,
              class: "w-full",
              highlight,
              href,
              children: ($$payload4, $$slotProps3) => {
                $$payload4.out += `${escape_text(label)}`;
              }
            });
            $$payload3.out += `${anchor_8}${anchor_7}`;
          }
          $$payload3.out += `${anchor_6}</div>`;
        }
      });
      $$payload2.out += `${anchor_5}</div>`;
    }
  });
  $$payload.out += `${anchor}`;
  bind_props($$props, {
    bgImg,
    bgVideo,
    bgCover,
    parallax,
    title,
    subtitle,
    typography,
    CTAButtons,
    buttonVariant,
    justified
  });
  pop();
}
function _page($$payload, $$props) {
  push(false);
  const aboutItems = [
    {
      title: "NO GI",
      body: "Hong Kong’s first and only exclusively no gi gym. Leave the pyjamas at home. Wear actual sports attire. Begin your no gi journey with us.",
      src: "/videos/slow_bjj.mp4",
      video: true
    },
    {
      title: "OUR METHOD",
      body: "Our training is live. You can do it at your own pace. You will work with a partner to explore ideas and become skilful in small areas of the game first, then ‘join the dots’ to mature into a confident grappler.",
      src: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9286.jpg"
    },
    {
      title: "THE VISION",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doe. iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. aliquip ex ea commodo consequat.",
      src: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9335.jpg"
    }
  ];
  let scrollY;
  let endCTAEnterHeight;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const anchor = create_anchor($$payload2);
    $$payload2.out += `${anchor}`;
    Prose($$payload2, {
      size: "lg",
      class: "text-center",
      children: ($$payload3, $$slotProps) => {
        const anchor_1 = create_anchor($$payload3);
        const anchor_2 = create_anchor($$payload3);
        const anchor_7 = create_anchor($$payload3);
        const anchor_15 = create_anchor($$payload3);
        const anchor_17 = create_anchor($$payload3);
        const anchor_26 = create_anchor($$payload3);
        $$payload3.out += `${anchor_1}`;
        Hero($$payload3, {
          CTAButtons: {},
          title: "BUFFALO JIU-JITSU",
          subtitle: "",
          justified: "center",
          bgVideo: {
            md: "/videos/1280_high.webm",
            lg: "/videos/1280_high.webm"
          },
          bgCover: "bg-amber-950/60 brightness-[0.2]",
          parallax: true,
          inviewPresetOptions: downFadePreset
        });
        $$payload3.out += `${anchor_1} ${anchor_2}`;
        Section($$payload3, {
          class: "-translate-y-36 -mb-36 z-0 rounded-t-[25px] bg-background pt-16 pb-32",
          id: "mission",
          children: ($$payload4, $$slotProps2) => {
            const anchor_3 = create_anchor($$payload4);
            $$payload4.out += `${anchor_3}`;
            Inview($$payload4, {
              presetOptions: downFadePreset,
              delay: 100,
              children: ($$payload5, $$slotProps3) => {
                const anchor_4 = create_anchor($$payload5);
                $$payload5.out += `${anchor_4}`;
                Container($$payload5, {
                  class: "text-center flex flex-col place-items-center gap-6",
                  sizes: "max-w-none",
                  children: ($$payload6, $$slotProps4) => {
                    const anchor_5 = create_anchor($$payload6);
                    const anchor_6 = create_anchor($$payload6);
                    $$payload6.out += `<h2 style="margin:0">OUR MISSION</h2> <p class="max-w-3xl" style="margin:0">We provide an environment for grapplers to explore and develop their game with a friendly, competitive attitude. We help each other get sharper by providing challenges. We act as a team on and off the mats.</p> <div class="grid grid-cols-2 gap-4 md:gap-6 place-items-center w-fit pt-6">${anchor_5}`;
                    Button($$payload6, {
                      class: "w-full",
                      padding: "px-4 md:px-8 py-4",
                      href: "#classes",
                      children: ($$payload7, $$slotProps5) => {
                        $$payload7.out += `CLASS SCHEDULE`;
                      }
                    });
                    $$payload6.out += `${anchor_5} ${anchor_6}`;
                    Button($$payload6, {
                      class: "w-full",
                      padding: "px-4 md:px-8 py-4",
                      href: "/contact",
                      children: ($$payload7, $$slotProps5) => {
                        $$payload7.out += `CONTACT US`;
                      }
                    });
                    $$payload6.out += `${anchor_6}</div>`;
                  }
                });
                $$payload5.out += `${anchor_4}`;
              }
            });
            $$payload4.out += `${anchor_3}`;
          }
        });
        $$payload3.out += `${anchor_2} ${anchor_7}`;
        Section($$payload3, {
          class: "bg-background py-20",
          id: "about",
          children: ($$payload4, $$slotProps2) => {
            const anchor_8 = create_anchor($$payload4);
            $$payload4.out += `${anchor_8}`;
            Container($$payload4, {
              class: "text-center md:text-left items-start flex flex-col md:grid md:grid-cols-2 md:place-items-center gap-x-12 gap-y-4 sm:gap-y-4 md:gap-y-16",
              sizes: "max-w-7xl",
              children: ($$payload5, $$slotProps3) => {
                const anchor_9 = create_anchor($$payload5);
                const each_array = ensure_array_like(aboutItems);
                $$payload5.out += `${anchor_9}`;
                for (let $$index = 0; $$index < each_array.length; $$index++) {
                  const $$item = each_array[$$index];
                  const { title, body, src, video } = $$item;
                  const anchor_10 = create_anchor($$payload5);
                  const anchor_11 = create_anchor($$payload5);
                  const anchor_14 = create_anchor($$payload5);
                  $$payload5.out += `${anchor_10}${anchor_11}`;
                  Inview($$payload5, {
                    presetOptions: fromLeftPreset,
                    class: "w-full h-full",
                    children: ($$payload6, $$slotProps4) => {
                      const anchor_12 = create_anchor($$payload6);
                      $$payload6.out += `<div class="w-full max-w-lg md:max-w-none mx-auto h-64 sm:h-96 flex place-items-center">${anchor_12}`;
                      if (video) {
                        $$payload6.out += "<!--ssr:if:true-->";
                        const anchor_13 = create_anchor($$payload6);
                        $$payload6.out += `${anchor_13}`;
                        Video($$payload6, {
                          class: "w-full h-full object-cover",
                          src,
                          title
                        });
                        $$payload6.out += `${anchor_13}`;
                      } else {
                        $$payload6.out += "<!--ssr:if:false-->";
                        $$payload6.out += `<img${attr("src", src, false)} alt="" class="not-prose w-full h-full aspect-video object-cover object-center">`;
                      }
                      $$payload6.out += `${anchor_12}</div>`;
                    }
                  });
                  $$payload5.out += `${anchor_11} ${anchor_14}`;
                  Inview($$payload5, {
                    presetOptions: fromRightPreset,
                    children: ($$payload6, $$slotProps4) => {
                      $$payload6.out += `<div class="flex max-w-xl flex-col gap-4 mb-12 sm:mb-16 md:mb-0"><h2 style="margin:0">${escape_text(title)}</h2> <p style="margin:0">${escape_text(body)}</p></div>`;
                    }
                  });
                  $$payload5.out += `${anchor_14}${anchor_10}`;
                }
                $$payload5.out += `${anchor_9}`;
              }
            });
            $$payload4.out += `${anchor_8}`;
          }
        });
        $$payload3.out += `${anchor_7} ${anchor_15}`;
        Section($$payload3, {
          class: "bg-background py-20 ",
          id: "classes",
          children: ($$payload4, $$slotProps2) => {
            const anchor_16 = create_anchor($$payload4);
            $$payload4.out += `${anchor_16}`;
            Classes($$payload4);
            $$payload4.out += `${anchor_16}`;
          }
        });
        $$payload3.out += `${anchor_15} ${anchor_17}`;
        Section($$payload3, {
          class: "bg-background py-20 text-left",
          id: "contact",
          children: ($$payload4, $$slotProps2) => {
            const anchor_18 = create_anchor($$payload4);
            $$payload4.out += `${anchor_18}`;
            Container($$payload4, {
              class: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start",
              sizes: "max-w-7xl w-full",
              children: ($$payload5, $$slotProps3) => {
                const anchor_19 = create_anchor($$payload5);
                const anchor_23 = create_anchor($$payload5);
                const anchor_25 = create_anchor($$payload5);
                $$payload5.out += `${anchor_19}`;
                Inview($$payload5, {
                  presetOptions: fromLeftPreset,
                  children: ($$payload6, $$slotProps4) => {
                    const anchor_20 = create_anchor($$payload6);
                    const each_array_1 = ensure_array_like(socials);
                    $$payload6.out += `<div class="flex flex-col gap-8"><h2 style="margin:0">GET IN TOUCH, <br> YOU’LL BE GLAD YOU DID</h2> <p style="margin:0">You’ve had a look at the site. You’re clearly Jiu-Jitsu-curious. Whether you’re big, small, young, old, male, female, a beast or a nerd, we have a home for you here.</p> <p style="margin:0">info@buffalojiujitsu.hk <br> (+852) 9648 2270 <br> <br> 1/F Buffalo Strength Gym <br> Mui Wo, Lantau Island, Hong Kong</p> <div class="flex flex-row gap-4 text-primary not-prose">${anchor_20}`;
                    for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
                      const $$item = each_array_1[$$index_1];
                      const { href, icon } = $$item;
                      const anchor_21 = create_anchor($$payload6);
                      const anchor_22 = create_anchor($$payload6);
                      $$payload6.out += `${anchor_21}<a${attr("href", href, false)} target="new">${anchor_22}`;
                      Icon($$payload6, { icon, height: "32", width: "32" });
                      $$payload6.out += `${anchor_22}</a>${anchor_21}`;
                    }
                    $$payload6.out += `${anchor_20}</div></div>`;
                  }
                });
                $$payload5.out += `${anchor_19} ${anchor_23}`;
                Inview($$payload5, {
                  presetOptions: fromRightPreset,
                  children: ($$payload6, $$slotProps4) => {
                    const anchor_24 = create_anchor($$payload6);
                    $$payload6.out += `${anchor_24}`;
                    ContactForm($$payload6, {});
                    $$payload6.out += `${anchor_24}`;
                  }
                });
                $$payload5.out += `${anchor_23} ${anchor_25}`;
                Inview($$payload5, {
                  class: "w-full h-full md:col-span-2",
                  presetOptions: fromTopPreset,
                  children: ($$payload6, $$slotProps4) => {
                    $$payload6.out += `<img src="/images/buffalo_travel_times.jpg" alt="Travel times to Buffalo Jiu-Jitsu" class="object-contain not-prose md:col-span-2 max-w-7xl w-full rounded-sm">`;
                  }
                });
                $$payload5.out += `${anchor_25}`;
              }
            });
            $$payload4.out += `${anchor_18}`;
          }
        });
        $$payload3.out += `${anchor_17} ${anchor_26}`;
        Section($$payload3, {
          useInview: true,
          onInviewEnter: () => {
            console.log(endCTAEnterHeight);
          },
          get scrollEnterHeight() {
            return endCTAEnterHeight;
          },
          set scrollEnterHeight($$value) {
            endCTAEnterHeight = $$value;
            $$settled = false;
          },
          class: "py-64 overflow-hidden",
          id: "end-cta",
          children: ($$payload4, $$slotProps2) => {
            const anchor_27 = create_anchor($$payload4);
            $$payload4.out += `<img src="/images/MJP_20230927_Mui_Wo_jiu-jitsu_9326.jpg" alt="" class="not-prose w-full h-full absolute object-cover -z-0 transition-transform duration-700"${attr("style", endCTAEnterHeight ? "transform: scale(" + (1.1 + (scrollY - endCTAEnterHeight) / 1e4) + "); transition-timing-function: cubic-bezier(0,.5,.5,1); " : "", false)}> <div class="bg-black/60 w-full h-full absolute z-[5]"></div> ${anchor_27}`;
            Container($$payload4, {
              class: "grid place-items-center gap-y-12 z-[7]",
              sizes: "max-w-7xl w-full",
              children: ($$payload5, $$slotProps3) => {
                const anchor_28 = create_anchor($$payload5);
                $$payload5.out += `${anchor_28}`;
                Inview($$payload5, {
                  presetOptions: downFadePreset,
                  class: "w-full h-full z-[7] grid place-items-center",
                  children: ($$payload6, $$slotProps4) => {
                    const anchor_29 = create_anchor($$payload6);
                    $$payload6.out += `${anchor_29}`;
                    Container($$payload6, {
                      class: "grid place-items-center mx-auto  gap-y-12 z-[7]",
                      sizes: "max-w-7xl w-full",
                      margin: "",
                      children: ($$payload7, $$slotProps5) => {
                        const anchor_30 = create_anchor($$payload7);
                        const anchor_31 = create_anchor($$payload7);
                        $$payload7.out += `<h2 class="mx-auto" style="margin:0">WELCOME TO BUFFALO JIU-JITSU</h2> <div class="flex flex-col md:flex-row items-center justify-center mx-auto w-full"><div class="rounded-full h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 border-4 -translate-x-12 md:translate-x-6 lg:translate-x-12 border-primary flex items-center justify-center"><h4 style="margin:0">PASSION</h4></div> <div class="rounded-full h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 -mt-12 border-4 md:mt-0 border-primary flex items-center justify-center"><h4 style="margin:0">COMMUNITY</h4></div> <div class="rounded-full h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 -mt-12 border-4 translate-x-12 md:mt-0 md:-translate-x-6 lg:-translate-x-12 border-primary flex items-center justify-center"><h4 style="margin:0">AFFORDABILITY</h4></div></div> <div class="grid grid-cols-2 gap-4 md:gap-6 place-items-center w-full max-w-lg pt-12">${anchor_30}`;
                        Button($$payload7, {
                          class: "w-full ",
                          href: "/contact",
                          children: ($$payload8, $$slotProps6) => {
                            $$payload8.out += `CONTACT US`;
                          }
                        });
                        $$payload7.out += `${anchor_30} ${anchor_31}`;
                        Button($$payload7, {
                          class: "w-full",
                          href: "/about",
                          children: ($$payload8, $$slotProps6) => {
                            $$payload8.out += `LEARN MORE`;
                          }
                        });
                        $$payload7.out += `${anchor_31}</div>`;
                      }
                    });
                    $$payload6.out += `${anchor_29}`;
                  }
                });
                $$payload5.out += `${anchor_28}`;
              }
            });
            $$payload4.out += `${anchor_27}`;
          }
        });
        $$payload3.out += `${anchor_26}`;
      }
    });
    $$payload2.out += `${anchor}`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
