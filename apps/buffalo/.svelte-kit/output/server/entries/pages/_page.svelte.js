import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, d as each } from "../../chunks/ssr.js";
import { B as Button, I as Icon } from "../../chunks/Button.js";
import { P as Prose } from "../../chunks/Prose.js";
import "svelte-inview";
import { S as Section, I as Inview, d as downFadePreset, f as fromTopPreset, a as fromLeftPreset, b as fromRightPreset, C as Container, V as Video } from "../../chunks/transitionOptions.js";
import { C as Card } from "../../chunks/Card.js";
import "crypto-js/sha256.js";
import { s as socials, C as ContactForm } from "../../chunks/socials.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgImg = "" } = $$props;
  let { bgVideo } = $$props;
  let { bgCover = "bg-black/0" } = $$props;
  let { parallax = false } = $$props;
  let { title = "This is a great title for Company Name" } = $$props;
  let { subtitle = "This is an even better piece of text. Specifically, this is a subtitle" } = $$props;
  let { typography = "" } = $$props;
  let { CTAButtons = {
    "CTA ONE": { href: "/", highlight: true },
    "CTA TWO": { href: "/", highlight: false }
  } } = $$props;
  let { inviewPresetOptions = { delay: 0, duration: 400 } } = $$props;
  let { buttonVariant = "normal" } = $$props;
  let { justified = "center" } = $$props;
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
  if ($$props.bgImg === void 0 && $$bindings.bgImg && bgImg !== void 0)
    $$bindings.bgImg(bgImg);
  if ($$props.bgVideo === void 0 && $$bindings.bgVideo && bgVideo !== void 0)
    $$bindings.bgVideo(bgVideo);
  if ($$props.bgCover === void 0 && $$bindings.bgCover && bgCover !== void 0)
    $$bindings.bgCover(bgCover);
  if ($$props.parallax === void 0 && $$bindings.parallax && parallax !== void 0)
    $$bindings.parallax(parallax);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  if ($$props.typography === void 0 && $$bindings.typography && typography !== void 0)
    $$bindings.typography(typography);
  if ($$props.CTAButtons === void 0 && $$bindings.CTAButtons && CTAButtons !== void 0)
    $$bindings.CTAButtons(CTAButtons);
  if ($$props.inviewPresetOptions === void 0 && $$bindings.inviewPresetOptions && inviewPresetOptions !== void 0)
    $$bindings.inviewPresetOptions(inviewPresetOptions);
  if ($$props.buttonVariant === void 0 && $$bindings.buttonVariant && buttonVariant !== void 0)
    $$bindings.buttonVariant(buttonVariant);
  if ($$props.justified === void 0 && $$bindings.justified && justified !== void 0)
    $$bindings.justified(justified);
  return ` ${validate_component(Section, "Section").$$render(
    $$result,
    {
      class: "h-screen w-full z-0 " + typography,
      style: $$props.style + " ; clip-path: inset(0 0 0 0);"
    },
    {},
    {
      default: () => {
        return `<div class="${escape(bgCover, true) + " w-full h-full z-0 absolute"}"></div> <div class="${escape(parallax ? "fixed" : "absolute ", true) + " w-full h-full not-prose -z-10"}">${bgVideo ? `<video muted id="clip" preload="auto" autoplay loop class="object-cover object-center w-full h-screen max-h-screen"><source type="video/webm" title="Hero Video" media="(min-width: 800px)"${add_attribute("src", bgVideo["lg"], 0)}><source type="video/webm" media="(max-width: 799px)"${add_attribute("src", bgVideo["md"], 0)}>
        Your Browser does not support our video types</video>` : `${bgImg ? `<img${add_attribute("src", bgImg, 0)} alt="" class="object-cover object-center w-full h-screen max-h-screen mix-blend-darken">` : ``}`}</div> <div class="${"flex flex-col w-full z-10 items-center " + escape(justifyClass(), true) + " my-auto gap-12 mx-2 sm:mx-4 md:mx-6 " + escape(parallax ? "fixed" : "", true)}">${validate_component(Inview, "Inview").$$render(
          $$result,
          {
            class: "w-full h-full",
            presetOptions: inviewPresetOptions
          },
          {},
          {
            default: () => {
              return `<div class="flex flex-col items-center gap-4 "><h1 class="" style="margin: 0px">${escape(title)}</h1> <h5 class="max-w-6xl" style="margin: 0px">${escape(subtitle)}</h5></div>`;
            }
          }
        )} <div class="${"grid grid-cols-" + escape(Object.entries(CTAButtons).length, true) + " gap-4 md:gap-6 place-items-center w-fit"}">${each(Object.entries(CTAButtons), ([label, { href, highlight }]) => {
          return `${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: buttonVariant,
              class: "w-full",
              highlight,
              href
            },
            {},
            {
              default: () => {
                return `${escape(label)} `;
              }
            }
          )}`;
        })}</div></div>`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aboutItems = [
    {
      title: "NO GI",
      body: "Hong Kong’s first and only exclusively no gi gym. Leave the pyjamas at home. Wear actual sports attire. Begin your no gi journey with us.",
      src: "/videos/slow_bjj.mp4",
      video: true
    },
    {
      title: "OUR METHOD",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud.",
      src: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9286.jpg"
    },
    {
      title: "THE VISION",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud.",
      src: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9335.jpg"
    }
  ];
  const prices = [
    { label: "TRIAL WEEK", price: "FREE" },
    { label: "MONTHLY", price: "$750" },
    { label: "DAY PASS", price: "$150" }
  ];
  const classTimes = [
    { day: "MON", time: "7:45PM" },
    { day: "WED", time: "7:45PM" },
    { day: "THURS", time: "7:45PM" }
  ];
  return `${validate_component(Prose, "Prose").$$render($$result, { size: "lg", class: "text-center" }, {}, {
    default: () => {
      return `${validate_component(Hero, "Hero").$$render(
        $$result,
        {
          CTAButtons: {},
          title: "BUFFALO JIU-JITSU",
          subtitle: "",
          justified: "center",
          bgVideo: {
            md: "/videos/1280_high.webm",
            lg: "/videos/1280_high.webm"
          },
          bgCover: "bg-amber-800/60 brightness-[0.15]",
          parallax: true,
          inviewPresetOptions: downFadePreset
        },
        {},
        {}
      )} ${validate_component(Section, "Section").$$render(
        $$result,
        {
          class: "-translate-y-36 -mb-36 z-0 rounded-t-[25px] bg-background pt-12 pb-32"
        },
        {},
        {
          default: () => {
            return `${validate_component(Inview, "Inview").$$render(
              $$result,
              {
                presetOptions: downFadePreset,
                delay: 100
              },
              {},
              {
                default: () => {
                  return `${validate_component(Container, "Container").$$render(
                    $$result,
                    {
                      class: "text-center flex flex-col place-items-center gap-6",
                      sizes: "max-w-none"
                    },
                    {},
                    {
                      default: () => {
                        return `<h2 class="" style="margin:0" data-svelte-h="svelte-jt66xt">OUR MISSION</h2> <p class="max-w-3xl" style="margin:0" data-svelte-h="svelte-xijlms">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.</p> <div class="grid grid-cols-2 gap-4 md:gap-6 place-items-center w-fit pt-6">${validate_component(Button, "Button").$$render(
                          $$result,
                          {
                            class: "w-full",
                            padding: "px-4 md:px-8 py-4",
                            href: "#classes"
                          },
                          {},
                          {
                            default: () => {
                              return `CLASS SCHEDULE`;
                            }
                          }
                        )} ${validate_component(Button, "Button").$$render(
                          $$result,
                          {
                            class: "w-full",
                            padding: "px-4 md:px-8 py-4",
                            href: "/contact"
                          },
                          {},
                          {
                            default: () => {
                              return `CONTACT US`;
                            }
                          }
                        )}</div>`;
                      }
                    }
                  )}`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Section, "Section").$$render(
        $$result,
        {
          class: "bg-background py-18",
          id: "about"
        },
        {},
        {
          default: () => {
            return `${validate_component(Container, "Container").$$render(
              $$result,
              {
                class: "text-center md:text-left items-start flex flex-col md:grid md:grid-cols-2 md:place-items-center gap-x-12 gap-y-4 sm:gap-y-4 md:gap-y-12",
                sizes: "max-w-7xl"
              },
              {},
              {
                default: () => {
                  return `${each(aboutItems, ({ title, body, src, video }) => {
                    return `${validate_component(Inview, "Inview").$$render(
                      $$result,
                      {
                        presetOptions: fromLeftPreset,
                        class: "w-full h-full"
                      },
                      {},
                      {
                        default: () => {
                          return `<div class="w-full max-w-lg md:max-w-none mx-auto h-64 sm:h-96 flex place-items-center">${video ? `${validate_component(Video, "Video").$$render(
                            $$result,
                            {
                              class: "w-full h-full object-cover",
                              src,
                              title
                            },
                            {},
                            {}
                          )}` : `<img${add_attribute("src", src, 0)} alt="" class="not-prose w-full h-full aspect-video object-cover object-center">`}</div> `;
                        }
                      }
                    )} ${validate_component(Inview, "Inview").$$render($$result, { presetOptions: fromRightPreset }, {}, {
                      default: () => {
                        return `<div class="flex max-w-xl flex-col gap-4 mb-12 sm:mb-16 md:mb-0"><h2 class="" style="margin:0">${escape(title)}</h2> <p style="margin:0">${escape(body)}</p></div> `;
                      }
                    })}`;
                  })}`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Section, "Section").$$render(
        $$result,
        {
          class: "bg-background py-18 ",
          id: "classes"
        },
        {},
        {
          default: () => {
            return `${validate_component(Container, "Container").$$render(
              $$result,
              {
                class: "grid grid-cols-1 md:grid-cols-2 gap-y-12 items-center ",
                sizes: "max-w-7xl w-fit"
              },
              {},
              {
                default: () => {
                  return `${validate_component(Inview, "Inview").$$render(
                    $$result,
                    {
                      presetOptions: fromTopPreset,
                      class: "w-full h-full"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Card, "Card").$$render(
                          $$result,
                          {
                            id: "adult-classes",
                            class: "flex flex-col gap-6 items-center w-full justify-self-end"
                          },
                          {},
                          {
                            default: () => {
                              return `<h1 class="" style="margin:0" data-svelte-h="svelte-pcqv2h">ADULT CLASSES</h1> <img class="not-prose object-cover object-center aspect-[3/4] w-full" src="/images/MJP_20230927_Mui_Wo_jiu-jitsu_9342.jpg" alt="Adult classes"> ${validate_component(Prose, "Prose").$$render($$result, { size: "sm", class: "w-full" }, {}, {
                                default: () => {
                                  return `<div class="grid grid-cols-2 gap-y-2 w-full">${each(prices, ({ price, label }) => {
                                    return `<h4 class="text-left justify-self-start" style="margin:0">${escape(price)}</h4> <h4 class="text-right whitespace-nowrap justify-self-end" style="margin:0">${escape(label)} </h4>`;
                                  })} <div class="pt-4 col-span-2"></div> ${each(classTimes, ({ day, time }) => {
                                    return `<h4 class="text-left justify-self-start" style="margin:0">${escape(day)}</h4> <h4 class="text-right whitespace-nowrap justify-self-end" style="margin:0">${escape(time)} </h4>`;
                                  })} <div class="pt-6 col-span-2"></div> ${validate_component(Prose, "Prose").$$render(
                                    $$result,
                                    {
                                      size: "lg",
                                      class: "w-full col-span-2 self-end"
                                    },
                                    {},
                                    {
                                      default: () => {
                                        return `${validate_component(Button, "Button").$$render($$result, { class: "col-span-2 w-full" }, {}, {
                                          default: () => {
                                            return `REGISTER`;
                                          }
                                        })}`;
                                      }
                                    }
                                  )}</div>`;
                                }
                              })}`;
                            }
                          }
                        )}`;
                      }
                    }
                  )} ${validate_component(Inview, "Inview").$$render(
                    $$result,
                    {
                      presetOptions: fromTopPreset,
                      class: "w-full h-full"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Card, "Card").$$render(
                          $$result,
                          {
                            id: "youth-classes",
                            class: "flex flex-col gap-6 items-center w-full h-full justify-self-start"
                          },
                          {},
                          {
                            default: () => {
                              return `<h1 class="" style="margin:0" data-svelte-h="svelte-1g5anvc">YOUTH CLASSES</h1> <img class="not-prose object-cover object-center aspect-[3/4] w-full" src="/images/MJP_20230927_Mui_Wo_jiu-jitsu_9376.jpg" alt="Adult classes"> ${validate_component(Prose, "Prose").$$render($$result, { size: "sm", class: "w-full my-auto" }, {}, {
                                default: () => {
                                  return `<h3 class="" data-svelte-h="svelte-70awxa">COMING SOON!</h3> <h4 data-svelte-h="svelte-q8yjrt">SIGN UP IF INTERESTED!</h4>`;
                                }
                              })} ${validate_component(Button, "Button").$$render(
                                $$result,
                                {
                                  class: "col-span-2 w-full place-self-end mt-auto"
                                },
                                {},
                                {
                                  default: () => {
                                    return `REGISTER`;
                                  }
                                }
                              )}`;
                            }
                          }
                        )}`;
                      }
                    }
                  )}`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Section, "Section").$$render(
        $$result,
        {
          class: "bg-background py-18 text-left",
          id: "contact"
        },
        {},
        {
          default: () => {
            return `${validate_component(Container, "Container").$$render(
              $$result,
              {
                class: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start",
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
            Buffalo Strength Gym <br> Mui Wo, Lantau Island, Hong Kong</p> <div class="flex flex-row gap-4 text-primary not-prose">${each(socials, ({ href, icon }) => {
                        return `<a${add_attribute("href", href, 0)} target="new" class="">${validate_component(Icon, "Icon").$$render($$result, { icon, height: "32", width: "32" }, {}, {})} </a>`;
                      })}</div></div>`;
                    }
                  })} ${validate_component(Inview, "Inview").$$render($$result, { presetOptions: fromRightPreset }, {}, {
                    default: () => {
                      return `${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}`;
                    }
                  })} ${validate_component(Inview, "Inview").$$render(
                    $$result,
                    {
                      class: "w-full h-full md:col-span-2",
                      presetOptions: fromTopPreset
                    },
                    {},
                    {
                      default: () => {
                        return `<img src="/images/buffalo_travel_times.jpg" alt="Travel times to Buffalo Jiu-Jitsu" class="object-contain not-prose md:col-span-2 max-w-7xl w-full rounded-sm">`;
                      }
                    }
                  )}`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Section, "Section").$$render($$result, { class: "py-64", id: "end-cta" }, {}, {
        default: () => {
          return `<img src="/images/MJP_20230927_Mui_Wo_jiu-jitsu_9326.jpg" alt="" class="not-prose w-full h-full absolute object-cover -z-0"> <div class="bg-black/60 w-full h-full absolute z-[5]"></div> ${validate_component(Container, "Container").$$render(
            $$result,
            {
              class: "grid place-items-center gap-y-12 z-[7]",
              sizes: "max-w-7xl w-full"
            },
            {},
            {
              default: () => {
                return `${validate_component(Inview, "Inview").$$render(
                  $$result,
                  {
                    presetOptions: downFadePreset,
                    class: "w-full h-full z-[7] grid place-items-center"
                  },
                  {},
                  {
                    default: () => {
                      return `${validate_component(Container, "Container").$$render(
                        $$result,
                        {
                          class: "grid place-items-center mx-auto  gap-y-12 z-[7]",
                          sizes: "max-w-7xl w-full",
                          margin: ""
                        },
                        {},
                        {
                          default: () => {
                            return `<h2 class="mx-auto" style="margin:0" data-svelte-h="svelte-k1ouuo">WELCOME TO BUFFALO JIU-JITSU</h2> <div class="flex flex-col md:flex-row items-center justify-center mx-auto w-full" data-svelte-h="svelte-1tvecor"><div class="rounded-full h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 border-4 -translate-x-12 md:translate-x-6 lg:translate-x-12 border-primary flex items-center justify-center"><h4 class="" style="margin:0">PASSION</h4></div> <div class="rounded-full h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 -mt-12 border-4 md:mt-0 border-primary flex items-center justify-center"><h4 class="" style="margin:0">COMMUNITY</h4></div> <div class="rounded-full h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 -mt-12 border-4 translate-x-12 md:mt-0 md:-translate-x-6 lg:-translate-x-12 border-primary flex items-center justify-center"><h4 class="" style="margin:0">AFFORDABILITY</h4></div></div> <div class="grid grid-cols-2 gap-4 md:gap-6 place-items-center w-full max-w-lg pt-12">${validate_component(Button, "Button").$$render($$result, { class: "w-full ", href: "/contact" }, {}, {
                              default: () => {
                                return `CONTACT US`;
                              }
                            })} ${validate_component(Button, "Button").$$render($$result, { class: "w-full", href: "/about" }, {}, {
                              default: () => {
                                return `LEARN MORE`;
                              }
                            })}</div>`;
                          }
                        }
                      )}`;
                    }
                  }
                )}`;
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
