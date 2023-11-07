import { c as create_ssr_component, v as validate_component, b as each, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { P as Prose } from "../../../chunks/Prose.js";
import { C as Container } from "../../../chunks/Container.js";
import { C as Card } from "../../../chunks/Card.js";
import "crypto-js/sha256.js";
const products = {
  "garage-doors": {
    name: "Garage Door",
    description: "Unlike normal doors that swing sideway or roller shutters that rolls up into a cell, automatic garage doors are guided by tracks that open upwards to over head position electrically by garage door openers controlled by a handheld remote control.",
    types: [{ href: "/sectional", label: "Sectional", thumbnail: "/products/garage-doors/sectional/thumbnail.jpg" }, { href: "/canopy", label: "Canopy", thumbnail: "/products/garage-doors/canopy/thumbnail.jpg" }, { href: "/martin", label: "Martin", thumbnail: "/products/garage-doors/martin/thumbnail.jpg" }],
    materials: ["Copper", "Steel", "Aluminium"]
  },
  "residential-gates": {
    name: "Residential Gate",
    description: "By virtual of its space saving features, sliding gate is the best choice for automated access to your gated property. When space is a problem, you can either choose swing gate of roller shutter for your driveway.",
    types: [{ href: "/folding", label: "Folding", thumbnail: "/products/residential-gates/folding/thumbnail.jpg" }, { href: "/sliding", label: "Sliding", thumbnail: "/products/residential-gates/sliding/thumbnail.jpg" }, { href: "/swinging", label: "Swinging", thumbnail: "/products/residential-gates/swinging/thumbnail.jpg" }]
  },
  "commercial-doors": {
    name: "Commercial Door",
    description: "Teraoka is the leading automatic doors manufacturer from Japan, our partner in commercial access solution focusing on amenity and safety.",
    types: [{ href: "/#swinging", label: "Swinging", thumbnail: "/products/commercial-doors/swinging/thumbnail.jpg" }, { href: "/#revolving", label: "Revolving", thumbnail: "/products/commercial-doors/revolving/thumbnail.jpg" }, { href: "/#sliding", label: "Sliding", thumbnail: "/products/commercial-doors/sliding/thumbnail.jpg" }]
  },
  "secret-doors": {
    name: "Secret Door",
    description: "We are a distributor of Creative Home Engineering, the world's best engineering and customs manufacturer of secret passage systems and secret hidden doors. By turning bottles hanging on the wall, the secret hidden passage swings open. The secret door possibilities are endless, please visit hiddenpassageway.com here for more examples.",
    types: [{ href: "/", label: "Secret Door", thumbnail: "/products/secret-doors/thumbnail.jpg" }]
  },
  "shutter-doors": {
    name: "Shutter Door",
    description: "The weight of the roller shutter is supported by an axial concealed inside a cell horizontally above the entrance. The gate opener only needs to overcome inertia and friction to move the gate. Gate can go up to 6 meter in length and 100 Kg in weight. Material can be stainless steel, wrought iron, brass, Aluminum or glass.",
    types: [{ href: "/roller", label: "Roller Shutter", thumbnail: "/products/shutter-doors/roller/thumbnail.jpg" }, { href: "/fire", label: "Fire Shutter", thumbnail: "/products/shutter-doors/fire/thumbnail.jpg" }]
  },
  "renlita-doors": {
    name: "Renlita Door",
    description: "Built by Renlita USA according to ANSI standard. Powered with electrically operated opener for remote control access.",
    types: [{ href: "/", label: "Renlita Door", thumbnail: "/products/renlita-doors/thumbnail.jpg" }]
  },
  "avon-barriers": {
    name: "Avon Barrier",
    description: "Physically impact tested to PAS 68 criteria. Manufactured from heavy gauge materials. Variable height and clear widths. Manual operating override facility. High quality coating system(minimum galvanised). Shallow mounting less than 500mm overall depth. Hold to run operation(deadman mode)",
    types: [{ href: "/", label: "PAS 68", thumbnail: "/products/avon-barriers/thumbnail.jpg" }]
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Prose, "Prose").$$render($$result, {}, {}, {
    default: () => {
      return `<section class="grid h-full min-h-screen pt-44 gap-12">${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "flex flex-col place-items-center gap-6"
        },
        {},
        {
          default: () => {
            return `<h1 class="display-small uppercase m-0 sm:m-0" data-svelte-h="svelte-1519hoz">Products</h1>`;
          }
        }
      )} ${validate_component(Container, "Container").$$render(
        $$result,
        {
          class: "grid grid-cols-1 place-items-center gap-y-12",
          padding: "mt-32",
          sizes: "max-w-none w-full"
        },
        {},
        {
          default: () => {
            return `${each(Object.entries(products), ([name, product]) => {
              return `${validate_component(Container, "Container").$$render(
                $$result,
                {
                  id: name,
                  class: "grid grid-cols-3 gap-x-4 lg:grid-cols-4 place-items-center",
                  sizes: "max-w-none w-full"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(Card, "Card").$$render(
                      $$result,
                      {
                        class: "flex flex-col gap-2 col-span-3 lg:col-span-1 items-start ",
                        padding: "lg:px-6 pb-3",
                        size: "max-w-none w-full"
                      },
                      {},
                      {
                        default: () => {
                          return `<h6 class="m-0 sm:m-0 text-tertiary uppercase">${escape(product.name)}</h6> <p class="m-0 sm:m-0 prose-sm">${escape(product.description)}</p> `;
                        }
                      }
                    )} ${product.types ? `${each(product.types, ({ label, thumbnail, href }) => {
                      return `${validate_component(Card, "Card").$$render(
                        $$result,
                        {
                          class: " relative flex place-items-center group overflow-hidden " + (product.types.length == 1 ? "col-span-2" : ""),
                          href: "/products/" + name + href,
                          size: "max-w-none w-full h-full aspect-[1.7] max-h-72",
                          padding: "px-1 py-2"
                        },
                        {},
                        {
                          default: () => {
                            return `<h3 class="m-0 sm:m-0 w-full text-center z-10 group-hover:text-tertiary transition-all duration-300">${escape(label)}</h3> <img${add_attribute("src", thumbnail, 0)} alt="" class="object-cover not-prose object-center w-full h-full absolute top-0 left-0 brightness-50 rounded-md group-hover:brightness-100 transition-all duration-300 group-hover:scale-105"> `;
                          }
                        }
                      )}`;
                    })}` : ``} `;
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
