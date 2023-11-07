import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { P as Prose } from "../../../chunks/Prose.js";
import { B as Button } from "../../../chunks/Button.js";
import { C as Container } from "../../../chunks/Container.js";
import { C as Card } from "../../../chunks/Card.js";
import "crypto-js/sha256.js";
import { createClient } from "@supabase/supabase-js";
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
  return `<div class="relative mt-8 h-fit w-full group overflow-visible mx-1.5">${!textArea ? `<label${add_attribute("for", label.toLowerCase(), 0)} class="${"" + escape(
    value ? "font-bold text-surface-on -top-1/2 -translate-y-5 left-0" : "font-normal left-3 top-1/2",
    true
  ) + " block group-hover:font-bold text-surface-on group-hover:text-surface-on absolute -translate-y-1/2 duration-[400ms] ease-in-out group-hover:left-0 group-hover:-top-1/2 group-hover:-translate-y-5 transition-all"}">${escape(label)} ${escape(required ? "*" : "")}</label> <div class="absolute w-full h-full overflow-hidden pointer-events-none"><h3 class="absolute invisible text-left transition-all duration-[400ms] ease-out -translate-y-1/2 pointer-events-none -left-1/2 group-hover:visible group-hover:left-3 group-hover:right-auto top-1/2 text-surface-on">${!value ? `${escape(placeholder)}` : ``}</h3></div> <input ${required ? "required" : ""}${add_attribute("name", label.toLowerCase(), 0)} class="w-full h-fit px-3 py-3 leading-tight text-surface-on bg-surface/50 border border-primary rounded focus:shadow-glow focus:shadow-tertiary/20 focus:outline-none appearance-none"${add_attribute("value", value, 0)}>` : `<label${add_attribute("for", label.toLowerCase(), 0)} class="${escape(
    value ? "font-bold text-surface-on -top-1 -translate-y-full left-0" : "font-normal left-3 top-2.5",
    true
  ) + " block group-hover:font-bold text-surface-on group-hover:text-surface-on absolute group-hover:-top-1 duration-[400ms] ease-in-out group-hover:-translate-y-full group-hover:left-0 transition-all"}">${escape(label)} ${escape(required ? "*" : "")}</label> <div class="overflow-hidden w-full h-full absolute pointer-events-none"><h3 class="absolute not-prose pointer-events-none -left-1/2 invisible group-hover:visible group-hover:left-3 group-hover:right-auto text-left top-0 transition-all duration-[400ms] ease-out text-surface-on">${!value ? `${escape(placeholder)}` : ``}</h3></div> <textarea id="message" required rows="4" name="message" class="w-full h-fit px-3 py-3 leading-tight text-surface-on bg-surface/50 border border-primary rounded focus:shadow-glow focus:shadow-tertiary/20 focus:outline-none appearance-none">${escape(value || "")}</textarea>`}</div>`;
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
    $$rendered = `<form id="contactform" class="flex flex-col gap-8 text-left items-center overflow-x-clip">${validate_component(TextField, "TextField").$$render(
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
  return `${validate_component(Prose, "Prose").$$render($$result, {}, {}, {
    default: () => {
      return `<section class="grid grid-cols-1 sm:grid-cols-2 place-items-center pt-44 min-h-screen gap-0">${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col",
          sizes: "max-w-3xl w-full"
        },
        {},
        {
          default: () => {
            return `${validate_component(Card, "Card").$$render(
              $$result,
              {
                class: "text-left",
                size: "max-w-none w-full",
                padding: ""
              },
              {},
              {
                default: () => {
                  return `<h1 class="uppercase" data-svelte-h="svelte-1xhasi3">Contact Us</h1> <p data-svelte-h="svelte-sgt343">We&#39;re here to assist you with all your gates and garage door needs.
          Feel free to reach out to us anytime for inquiries, consultations, or
          to schedule services. Our team is ready to provide you with the
          highest level of support and expertise.</p>`;
                }
              }
            )} ${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          sizes: "max-w-3xl w-full",
          margin: "mr-auto",
          class: "flex flex-col justify-items-center divide-y divide-surface-on/40"
        },
        {},
        {
          default: () => {
            return `<div class="py-12" data-svelte-h="svelte-14lo6rs"><p class="uppercase text-tertiary m-0 sm:m-0">Email</p> <h3 class="m-0 sm:m-0">Sales@wonderlee.hk</h3></div> <div class="py-12" data-svelte-h="svelte-1eqletn"><p class="uppercase text-tertiary m-0 sm:m-0">Phone</p> <h3 class="m-0 sm:m-0">+852 6931 0020</h3></div> <div class="py-12"><p class="uppercase text-tertiary m-0 sm:m-0" data-svelte-h="svelte-1lrltiz">Address</p> <h3 class="m-0 sm:m-0 pb-3" data-svelte-h="svelte-1wwfrt6">1402 Hip Kwan Commercial Building <br> 38 Pitt Street, Yaumatei, Kowloon</h3> ${validate_component(Button, "Button").$$render($$result, { href: "#map-iframe", arrow: true }, {}, {
              default: () => {
                return `Google Maps`;
              }
            })}</div>`;
          }
        }
      )}</section> <section class="grid place-items-center py-24">${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col place-items-center"
        },
        {},
        {
          default: () => {
            return `<h1 class="uppercase m-0 sm:m-0" data-svelte-h="svelte-54onlr">Find us on Google Maps</h1> <iframe title="map-iframe" id="map-iframe" class="w-full sm:w-2/3 md:w-1/2 aspect-1 my-12" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=114.16559815406801,22.310626852209406,114.17381644248964,22.31660197656347&layer=mapnik&marker=22.31361444635304,114.16970729827881" style="border: 1px solid black"></iframe>`;
          }
        }
      )}</section>`;
    }
  })}`;
});
export {
  Page as default
};
