import { c as create_ssr_component, e as escape, b as each, v as validate_component, d as add_attribute } from "../../chunks/ssr.js";
import { P as Prose } from "../../chunks/Prose.js";
import { B as Button } from "../../chunks/Button.js";
import { C as Container } from "../../chunks/Container.js";
import { C as Card } from "../../chunks/Card.js";
import "crypto-js/sha256.js";
import { p as projects } from "../../chunks/projects.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bgImg = "/favicon.png" } = $$props;
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
  return `<section class="${"h-screen " + escape(bgImg, true) + " bg-center bg-cover w-full grid " + escape(typography, true) + " place-items-center"}" style=""><div class="${"flex flex-col items-center " + escape(justifyClass(), true) + " my-auto gap-12 mx-2 sm:mx-4 md:mx-6"}"><div class="flex flex-col items-center gap-4"><h1 class="" style="margin: 0px">${escape(title)}</h1> <h5 class="max-w-6xl" style="margin: 0px">${escape(subtitle)}</h5></div> <div class="${"grid grid-cols-" + escape(Object.entries(CTAButtons).length, true) + " gap-4 md:gap-6 place-items-center w-fit"}">${each(Object.entries(CTAButtons), ([label, { href, highlight }]) => {
    return `${validate_component(Button, "Button").$$render($$result, { class: "w-full", highlight, href }, {}, {
      default: () => {
        return `${escape(label)} `;
      }
    })}`;
  })}</div></div></section>`;
});
const ServiceCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { body } = $$props;
  let { label } = $$props;
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: $$props.class + " col-span-2 grid grid-cols-3 w-full bg-surface/10",
      size: "max-w-none h-full ",
      border: "border border-surface-on"
    },
    {},
    {
      default: () => {
        return `<p class="col-start-2 col-span-2 m-0 sm:m-0 pb-4 xl:pb-6 2xl:pb-12 pt-6">${escape(body)}</p> <h1 class="m-0 sm:m-0 uppercase whitespace-nowrap self-end">${escape(label)}</h1>`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const CTAButtons = {
    "Our work": { href: "/our-work", highlight: true },
    "Contact us": { href: "/contact", highlight: false }
  };
  const statistics = {
    "Custom gates built": {
      finalValue: 999,
      startValue: 0,
      increment: 10
    },
    "Custom garages built": {
      finalValue: 999,
      startValue: 0,
      increment: 10
    },
    "Years of Experience": {
      finalValue: 25,
      startValue: 0,
      increment: 10
    }
  };
  const audiences = {
    Commercial: {
      body: `
Wonderlee caters to commercial needs with precision.
We specialize in high-quality gates, garage doors, and repair services. 
Whether you're a business owner, property manager, or organization seeking efficient garage solutions, 
we deliver professionalism and security.`,
      href: "/"
    },
    "Home Owners": {
      body: `
Wonderlee transforms houses into homes. Our premium gates
and garage doors elevate aesthetics and security. Our expert team
blends personal style with functionality and durability, making your dream home a reality.
`,
      href: "/"
    },
    Professionals: {
      body: `
Wonderlee is the choice for architectural and design professionals. 
We collaborate closely to seamlessly integrate our products into your projects,
enhancing elegance and functionality with top craftsmanship standards.
`,
      href: "/"
    }
  };
  const services = {
    Design: {
      body: `Our design services are the foundation of remarkable gates and garage doors. Our expert designers collaborate closely with you to bring your vision to life, ensuring your property shines with exceptional aesthetics.`
    },
    Install: {
      body: `When it comes to installation, Wonderlee sets the standard. Our skilled technicians guarantee flawless installation, ensuring your gates and garage doors are durable and functional. We handle every detail for your peace of mind.`
    },
    "DIY Repair": {
      body: `Wonderlee offers DIY repair solutions for those who prefer hands-on approaches. We provide guidance, tools, and parts to help you efficiently address common repair issues, restoring your gates and garage doors.`
    },
    Maintenance: {
      body: `At Wonderlee, our maintenance services ensure peace of mind. We provide 24-hour technical support via telephone. Under our maintenance contract, inspections and maintenance every 6 months by our experienced team.`
    }
  };
  const products = {
    "Garage Door": {
      href: "/products#garage-doors",
      img: "/animations/sectional_garage.gif",
      types: "Canopy door, Sectional door, Canopy door"
    },
    "Residential Gate": {
      href: "/products/#residential-gates",
      img: "/animations/fold_gate_button.gif",
      types: "Folding gate, Slide gate, Swing gate"
    },
    "Commercial Doors": {
      href: "/products#commercial-doors",
      img: "/products/commercial-doors/re2.gif",
      types: "Slide door, Swing door, Revolving door"
    },
    "Secret Doors": {
      href: "/products#secret-doors",
      img: "/products/secret-doors/secret_door2.gif",
      types: ""
    }
  };
  return `${validate_component(Prose, "Prose").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Hero, "Hero").$$render(
        $$result,
        {
          CTAButtons,
          title: "Hong Kong's Leading Gate & Garage Firm.",
          subtitle: "Serving homeowners and business owners with premium services & products since 1998.",
          justified: "center",
          bgImg: "/bg-landing"
        },
        {},
        {}
      )} <section class="grid place-items-center py-24">${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "grid grid-cols-3 w-full rounded-md ",
          sizes: "max-w-screen"
        },
        {},
        {
          default: () => {
            return `${each(Object.entries(statistics), ([label, { finalValue, startValue, increment }], i) => {
              return `${validate_component(Container, "Container").$$render(
                $$result,
                {
                  class: "text-center p-4 w-full",
                  radius: "",
                  border: i == 1 ? "border-x border-surface-on/50" : ""
                },
                {},
                {
                  default: () => {
                    return `<h1 class="m-0 text-tertiary sm:m-0">${escape(finalValue)}</h1> <h6 class="m-0 sm:m-0 text-primary-on font-light">${escape(label)}</h6> `;
                  }
                }
              )}`;
            })}`;
          }
        }
      )}</section> <section class="grid place-items-center py-24">${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "grid grid-cols-1 lg:grid-cols-3 gap-x-12",
          sizes: "max-w-none"
        },
        {},
        {
          default: () => {
            return `<h6 class="uppercase text-tertiary col-span-full justify-self-start self-end my-4" data-svelte-h="svelte-10nj7gd">audience</h6> ${each(Object.entries(audiences), ([title, { body, href }], i) => {
              return `${validate_component(Card, "Card").$$render(
                $$result,
                {
                  size: "max-w-lg h-fit w-full",
                  border: "border border-surface-on/90",
                  padding: "py-14 px-6",
                  class: "bg-surface/10  flex flex-col gap-6 items-center text-center mt-[" + i * 75 + "px]"
                },
                {},
                {
                  default: () => {
                    return ` <h2 class="text-surface-on uppercase m-0 sm:m-0 font-black">${escape(title)}</h2> <p class="text-surface-on m-0 sm:m-0">${escape(body)}</p> `;
                  }
                }
              )}`;
            })}`;
          }
        }
      )}</section> <section class="grid place-items-center py-24" id="services">${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-6 place-items-center",
          sizes: "max-w-none"
        },
        {},
        {
          default: () => {
            return `<h6 class="uppercase text-tertiary col-span-full place-self-end -my-2" data-svelte-h="svelte-1rv7rce">Services</h6> ${validate_component(ServiceCard, "ServiceCard").$$render(
              $$result,
              {
                label: "design",
                body: services["Design"].body
              },
              {},
              {}
            )} <img src="/images/Dragon_F.jpeg" alt="" class="h-full hidden md:flex xl:col-span-2 object-cover not-prose rounded-md"> ${validate_component(ServiceCard, "ServiceCard").$$render(
              $$result,
              {
                class: "md:col-start-2 xl:col-start-auto",
                label: "Install",
                body: services["Install"].body
              },
              {},
              {}
            )} <img src="/images/Sun_Hung_Kai_Riva_swing_gates.jpg" alt="" class="h-full hidden md:flex row-start-2 xl:col-span-2 xl:row-start-auto col-start-1 xl:col-start-auto object-cover not-prose rounded-md"> ${validate_component(ServiceCard, "ServiceCard").$$render(
              $$result,
              {
                label: "DIY Repair",
                body: services["DIY Repair"].body
              },
              {},
              {}
            )} <img src="/images/146_Waterloo.jpg" alt="" class="w-full h-full hidden md:flex xl:col-span-2 object-cover not-prose rounded-md"> <img src="/images/DB_Phase_17_B.jpg" alt="" class="w-full h-full xl:col-span-3 hidden md:flex object-cover not-prose rounded-md"> ${validate_component(ServiceCard, "ServiceCard").$$render(
              $$result,
              {
                class: "xl:col-span-3",
                label: "Maintenance",
                body: services["Maintenance"].body
              },
              {},
              {}
            )}`;
          }
        }
      )}</section> <section class="grid place-items-center py-24">${validate_component(Container, "Container").$$render($$result, { sizes: "max-w-none w-full", padding: "" }, {}, {
        default: () => {
          return `<h6 class="uppercase text-tertiary col-span-full justify-self-start my-4 mx-4 md:mx-6" data-svelte-h="svelte-1grrhuy">Products</h6> ${each(Object.entries(products), ([label, { href, img, types }], i) => {
            return `${validate_component(Container, "Container").$$render(
              $$result,
              {
                href,
                class: "group hover:bg-surface/50 transition-all duration-300 items-center",
                border: "border-y border-surface-on/50 flex",
                sizes: "max-w-none w-full"
              },
              {},
              {
                default: () => {
                  return `<div class="my-8 text-left flex flex-col gap-2"><h2 class="m-0 sm:m-0 uppercase text-surface-on">${escape(label)}</h2> <p class="m-0 sm:m-0 text-surface-on/70 font-light">${escape(types)} </p></div> <img${add_attribute("src", img, 0)} alt="" class="ml-auto md:flex h-24 sm:h-28 aspect-[1.5] my-2 object-cover not-prose"> `;
                }
              }
            )}`;
          })}`;
        }
      })} ${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "bg-surface-highlight m-4 my-12",
          arrow: true,
          href: "/products"
        },
        {},
        {
          default: () => {
            return `<p class="m-0 sm:m-0 text-background" data-svelte-h="svelte-19fosqh">See all</p>`;
          }
        }
      )}</section> <section class="grid place-items-center py-24">${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center",
          sizes: "max-w-none"
        },
        {},
        {
          default: () => {
            return `<h6 class="uppercase text-tertiary col-span-full justify-self-end my-4 m-0 sm:m-0" data-svelte-h="svelte-1rtnq8c">Our Recent Work</h6> ${each(Object.entries(projects), ([label, project], i) => {
              return `${i < 6 ? `${validate_component(Card, "Card").$$render(
                $$result,
                {
                  class: "flex flex-col group h-full",
                  padding: "px-0 py-2"
                },
                {},
                {
                  default: () => {
                    return `<h6 class="m-0 sm:m-0 uppercase text-surface-on/70">${escape(project.date)}</h6> <img${add_attribute("src", project.thumbnail, 0)} alt="" class="object-cover h-72 w-full not-prose md:brightness-95 group-hover: brightness-100"> <div class="flex flex-wrap place-items-center gap-4"><h4 class="m-0 sm:m-0 pt-4 uppercase">${escape(project.name)}</h4> <ul class="m-0 sm:m-0">${each(project.description, (item) => {
                      return `<li class="m-0 sm:m-0"><p class="m-0 sm:m-0 prose-sm">${escape(item)}</p> </li>`;
                    })} </ul></div> `;
                  }
                }
              )}` : ``}`;
            })} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                href: "/our-work",
                class: "bg-surface-highlight m-4 my-12 col-span-full justify-self-center",
                arrow: true
              },
              {},
              {
                default: () => {
                  return `<p class="m-0 sm:m-0 text-background" data-svelte-h="svelte-19fosqh">See all</p>`;
                }
              }
            )}`;
          }
        }
      )}</section> <section class="grid place-items-center relative"><img src="/Wonderlee-Crew.jpg" alt="crew" class="bg-no-repeat object-cover w-full h-full z-0 absolute"> <div class="bg-black/80 z-0 absolute h-full w-full"></div> ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "grid place-items-center gap-12",
          sizes: "max-w-none w-full h-fit",
          margin: "my-0",
          padding: "py-32"
        },
        {},
        {
          default: () => {
            return `<h1 class="text-center font-normal uppercase text-3xl sm:text-4xl md:text-4xl not-prose z-0" data-svelte-h="svelte-rbmusf">Let&#39;s Get the Ball <br><span class="text-tertiary text-7xl sm:text-9xl md:text-[10rem] font-bold">Rolling</span></h1> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 place-items-center w-fit z-0">${validate_component(Button, "Button").$$render(
              $$result,
              {
                highlight: true,
                class: "w-full",
                href: "/contact"
              },
              {},
              {
                default: () => {
                  return `Request Consultation`;
                }
              }
            )} ${validate_component(Button, "Button").$$render(
              $$result,
              {
                class: "w-full",
                href: "/about",
                arrow: true
              },
              {},
              {
                default: () => {
                  return `Learn More`;
                }
              }
            )}</div>`;
          }
        }
      )}</section>`;
    }
  })}`;
});
export {
  Page as default
};
