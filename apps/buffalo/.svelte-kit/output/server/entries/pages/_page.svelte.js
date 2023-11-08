import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape, b as each } from "../../chunks/ssr.js";
import { P as Prose } from "../../chunks/Prose.js";
import { B as Button } from "../../chunks/Button.js";
import "crypto-js/sha256.js";
import { createClient } from "@supabase/supabase-js";
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { id = "" } = $$props;
  let { href = "" } = $$props;
  let { sizes = "max-w-7xl w-full" } = $$props;
  let { border = "" } = $$props;
  let { padding = "sm:px-6 lg:px-8 px-4" } = $$props;
  let { margin = "mx-auto" } = $$props;
  let { shadow = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.sizes === void 0 && $$bindings.sizes && sizes !== void 0)
    $$bindings.sizes(sizes);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  classesBase = `${sizes} ${padding} ${margin} ${shadow} ${border} ${$$props.class} relative`;
  return ` ${href ? `<a${add_attribute("class", classesBase, 0)}${add_attribute("id", id, 0)}${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<div${add_attribute("class", classesBase, 0)}${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { href = "" } = $$props;
  let { size = "max-w-md" } = $$props;
  let { border = "" } = $$props;
  let { radius = "rounded-md" } = $$props;
  let { padding = " sm:px-6 lg:px-8 px-4 py-3 sm:py-4 lg:py-6" } = $$props;
  let { margin = "mx-auto" } = $$props;
  let { shadow = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.radius === void 0 && $$bindings.radius && radius !== void 0)
    $$bindings.radius(radius);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  classesBase = `${size} ${margin}  ${padding} ${shadow} ${border} ${radius} ${$$props.class}`;
  return `${href ? `<a${add_attribute("class", classesBase, 0)}${add_attribute("target", $$props.target, 0)}${add_attribute("href", href, 0)}${add_attribute("style", $$props.style, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<div${add_attribute("class", classesBase, 0)}${add_attribute("style", $$props.style, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { background = "" } = $$props;
  let { border = "" } = $$props;
  let { padding = "" } = $$props;
  let { shadow = "" } = $$props;
  let { gap = "gap-6" } = $$props;
  let { typography = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.typography === void 0 && $$bindings.typography && typography !== void 0)
    $$bindings.typography(typography);
  classesBase = `grid place-items-center relative
   ${background} ${border} ${padding} ${shadow} ${typography} ${$$props.class}`;
  return `<section${add_attribute("class", classesBase, 0)}${add_attribute("style", $$props.style, 0)}${add_attribute("id", $$props.id, 0)}>${slots.default ? slots.default({}) : ``}</section>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgImg = "/favicon.png" } = $$props;
  let { bgCover = "bg-black/0" } = $$props;
  let { parallax = false } = $$props;
  let { title = "This is a great title for Company Name" } = $$props;
  let { subtitle = "This is an even better piece of text. Specifically, this is a subtitle" } = $$props;
  let { typography = "" } = $$props;
  let { CTAButtons = {
    "CTA ONE": { href: "/", highlight: true },
    "CTA TWO": { href: "/", highlight: false }
  } } = $$props;
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
  if ($$props.justified === void 0 && $$bindings.justified && justified !== void 0)
    $$bindings.justified(justified);
  return ` ${validate_component(Section, "Section").$$render(
    $$result,
    {
      class: "h-screen w-full z-0 " + typography + " overflow-clip",
      style: $$props.style + " ; clip-path: inset(0 0 0 0);"
    },
    {},
    {
      default: () => {
        return `<div class="${escape(bgCover, true) + " w-full h-full z-0 absolute"}"></div> <div class="${escape(parallax ? "fixed" : "absolute ", true) + " not-prose -z-10"}"><img${add_attribute("src", bgImg, 0)} alt="" class="w-full h-screen max-h-screen"></div> <div class="${"flex flex-col w-full z-10 items-center " + escape(justifyClass(), true) + " my-auto gap-12 mx-2 sm:mx-4 md:mx-6 " + escape(parallax ? "fixed" : "", true)}"><div class="flex flex-col items-center gap-4 "><h1 class="" style="margin: 0px">${escape(title)}</h1> <h5 class="max-w-6xl" style="margin: 0px">${escape(subtitle)}</h5></div> <div class="${"grid grid-cols-" + escape(Object.entries(CTAButtons).length, true) + " gap-4 md:gap-6 place-items-center w-fit"}">${each(Object.entries(CTAButtons), ([label, { href, highlight }]) => {
          return `${validate_component(Button, "Button").$$render($$result, { class: "w-full", highlight, href }, {}, {
            default: () => {
              return `${escape(label)} `;
            }
          })}`;
        })}</div></div>`;
      }
    }
  )}`;
});
const TextField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { placeholder } = $$props;
  let { label } = $$props;
  let { textArea = false } = $$props;
  let { required = false } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.textArea === void 0 && $$bindings.textArea && textArea !== void 0)
    $$bindings.textArea(textArea);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  return `<div class="${"relative mb-8 h-fit w-full group overflow-visible mx-1.5 " + escape(textArea ? "h-full" : "", true)}">${!textArea ? `<label${add_attribute("for", label.toLowerCase(), 0)} class="${"" + escape(
    value ? "font-bold text-surface-on -top-1/2 -translate-y-5 left-0" : "font-normal left-3 top-1/2",
    true
  ) + " block group-hover:font-bold text-surface-on group-hover:text-surface-on absolute -translate-y-1/2 duration-[400ms] ease-in-out group-hover:left-0 group-hover:-top-1/2 group-hover:-translate-y-5 transition-all"}">${escape(label)} ${escape(required ? "*" : "")}</label> <div class="absolute w-full h-full overflow-hidden pointer-events-none"><h3 class="absolute invisible text-left transition-all duration-[400ms] ease-out -translate-y-1/2 pointer-events-none -left-1/2 group-hover:visible group-hover:left-3 group-hover:right-auto top-1/2 text-surface-on">${!value ? `${escape(placeholder)}` : ``}</h3></div> <input ${required ? "required" : ""}${add_attribute("name", label.toLowerCase(), 0)} class="w-full h-fit px-3 py-3 leading-tight text-surface-on bg-surface/50 border border-primary rounded focus:shadow-glow focus:shadow-tertiary/20 focus:outline-none appearance-none"${add_attribute("value", value, 0)}>` : `<label${add_attribute("for", label.toLowerCase(), 0)} class="${escape(
    value ? "font-bold text-surface-on -top-1 -translate-y-full left-0" : "font-normal left-3 top-2.5",
    true
  ) + " block group-hover:font-bold text-surface-on group-hover:text-surface-on absolute group-hover:-top-1 duration-[400ms] ease-in-out group-hover:-translate-y-full group-hover:left-0 transition-all"}">${escape(label)} ${escape(required ? "*" : "")}</label> <div class="overflow-hidden w-full h-full absolute pointer-events-none"><h3 class="absolute not-prose pointer-events-none -left-1/2 invisible group-hover:visible group-hover:left-3 group-hover:right-auto text-left top-0 transition-all duration-[400ms] ease-out text-surface-on">${!value ? `${escape(placeholder)}` : ``}</h3></div> <textarea id="message" required rows="4" name="message" class="w-full h-full px-3 py-3 leading-tight text-surface-on bg-surface/50 border border-primary rounded focus:shadow-glow focus:shadow-tertiary/20 focus:outline-none appearance-none">${escape(value || "")}</textarea>`}</div>`;
});
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  createClient("https://qnzxoapdhdycrblbeovn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs");
  let nameInput = "";
  let emailInput = "";
  let messageInput = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form id="contactform" class="flex flex-col gap-8 text-left items-center overflow-x-clip h-full">${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        label: "Name",
        placeholder: "Elon Gates",
        required: true,
        value: nameInput
      },
      {
        value: ($$value) => {
          nameInput = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        label: "Email",
        placeholder: "j.lewis@futi.no",
        required: true,
        value: emailInput
      },
      {
        value: ($$value) => {
          emailInput = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(TextField, "TextField").$$render(
      $$result,
      {
        label: "Your Message",
        placeholder: "I want to ask about",
        required: true,
        textArea: true,
        value: messageInput
      },
      {
        value: ($$value) => {
          messageInput = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        type: "submit",
        id: "submit",
        class: "w-full"
      },
      {},
      {
        default: () => {
          return `Send`;
        }
      }
    )} <div class="${["mx-1.5 text-left self-start", "hidden"].join(" ").trim()}" data-svelte-h="svelte-19q5gjd"><h2 class="title-medium m-0 sm:m-0">Your message has been sent. Thank you for contacting us!</h2></div></form>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const aboutItems = [
    {
      title: "NO GI",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9172.jpg"
    },
    {
      title: "OUR METHOD",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud.",
      img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9286.jpg"
    },
    {
      title: "THE VISION",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud.",
      img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9288.jpg"
    }
  ];
  const prices = [
    { label: "GUEST TRIAL", price: "FREE" },
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
          bgImg: "/images/Screenshot.png",
          bgCover: "bg-black/60",
          parallax: true
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
            return `${validate_component(Container, "Container").$$render(
              $$result,
              {
                class: "text-center flex flex-col place-items-center gap-6",
                sizes: "max-w-none"
              },
              {},
              {
                default: () => {
                  return `<h2 class="" style="margin:0" data-svelte-h="svelte-jt66xt">OUR MISSION</h2> <p class="max-w-3xl" style="margin:0" data-svelte-h="svelte-5zkle4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.</p> <div class="grid grid-cols-2 gap-4 md:gap-6 place-items-center w-fit pt-6">${validate_component(Button, "Button").$$render(
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
      )} ${validate_component(Section, "Section").$$render($$result, { class: "bg-background py-12" }, {}, {
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
                return `${each(aboutItems, ({ title, body, img }) => {
                  return `<div class="w-full max-w-lg md:max-w-none mx-auto h-64 sm:h-96 flex place-items-center"><img${add_attribute("src", img, 0)} alt="" class="not-prose w-full h-full aspect-video object-cover object-center"></div> <div class="flex max-w-xl flex-col gap-4 mb-12 sm:mb-16 md:mb-0"><h2 class="" style="margin:0">${escape(title)}</h2> <p style="margin:0">${escape(body)}</p> </div>`;
                })}`;
              }
            }
          )}`;
        }
      })} ${validate_component(Section, "Section").$$render(
        $$result,
        {
          class: "bg-background py-24 ",
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
                  return `${validate_component(Card, "Card").$$render(
                    $$result,
                    {
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
                  )} ${validate_component(Card, "Card").$$render(
                    $$result,
                    {
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
      )} ${validate_component(Section, "Section").$$render($$result, { class: "bg-background py-24 text-left" }, {}, {
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
                return `<div class="flex flex-col gap-8" data-svelte-h="svelte-42e769"><h2 class="" style="margin:0">GET IN TOUCH, <br> YOU’LL BE GLAD YOU DID</h2> <p style="margin:0">You’ve had a look at the site. You’re clearly Jiu-Jitsu-curious.
          Whether you’re big, small, young, old, male, female, a beast or a
          nerd, we have a home for you here.</p> <p style="margin:0">info@buffalojiujitsu.hk(+852) 9648 2270 1/F Buffalo Strength GymMui
          Wo, Lantau Island, Hong Kong</p></div> ${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})} <img src="/images/buffalo_travel_times.jpg" alt="Travel times to Buffalo Jiu-Jitsu" class="object-contain not-prose md:col-span-2 max-w-7xl w-full rounded-sm">`;
              }
            }
          )}`;
        }
      })} ${validate_component(Section, "Section").$$render($$result, { class: "py-64" }, {}, {
        default: () => {
          return `<img src="/images/MJP_20230927_Mui_Wo_jiu-jitsu_9326.jpg" alt="" class="not-prose w-full h-full absolute object-cover z-0"> <div class="bg-black/60 w-full h-full absolute z-10"></div> ${validate_component(Container, "Container").$$render(
            $$result,
            {
              class: "grid place-items-center gap-y-12 z-10",
              sizes: "max-w-7xl w-full",
              margin: ""
            },
            {},
            {
              default: () => {
                return `<h2 class="mx-auto" style="margin:0" data-svelte-h="svelte-k1ouuo">WELCOME TO BUFFALO JIU-JITSU</h2> <div class="flex flex-col md:flex-row items-center justify-center mx-auto w-full" data-svelte-h="svelte-1gvxu0r"><div class="rounded-full h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 border-4 -translate-x-12 md:translate-x-6 lg:translate-x-12 border-primary flex items-center justify-center"><h4 class="" style="margin:0">PASSION</h4></div> <div class="rounded-full h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 -mt-12 border-4 md:mt-0 border-primary flex items-center justify-center"><h4 class="" style="margin:0">COMMUNITY</h4></div> <div class="rounded-full h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 -mt-12 border-4 translate-x-12 md:mt-0 md:-translate-x-6 lg:-translate-x-12 border-primary flex items-center justify-center"><h4 class="" style="margin:0">AFFORDABILITY</h4></div></div> <div class="grid grid-cols-2 gap-4 md:gap-6 place-items-center w-full max-w-lg pt-12">${validate_component(Button, "Button").$$render($$result, { class: "w-full ", href: "/contact" }, {}, {
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
      })}`;
    }
  })}`;
});
export {
  Page as default
};
