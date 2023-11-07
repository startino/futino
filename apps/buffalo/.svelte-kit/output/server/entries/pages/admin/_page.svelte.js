import { c as create_ssr_component, j as is_promise, n as noop, v as validate_component, e as escape, b as each } from "../../../chunks/ssr.js";
import { createClient } from "@supabase/supabase-js";
import { B as Button } from "../../../chunks/Button.js";
import sha256 from "crypto-js/sha256.js";
const key = "d17b0d9a8b44aaa69bcbd82285e67a30418a6c3dc38e16c02e64035386452580";
const Authenticate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function verify() {
    var _a;
    localStorage.setItem("key", "");
    if (sha256(localStorage.getItem("key")) == key)
      return true;
    localStorage.setItem("key", sha256((_a = prompt("Enter Key", "")) === null || _a === void 0 ? void 0 : _a.replace(/\s+/g, "")));
    console.debug(`SHA256: ${localStorage.getItem("key")}
Double SHA256: ${sha256(localStorage.getItem("key"))}`);
    return sha256(localStorage.getItem("key")) == key;
  }
  let verified = new Promise((resolve, reject) => {
    try {
      resolve(verify());
    } catch (_a) {
      reject("Error with verification.");
    }
  });
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <main class="h-screen grid grid-rows-3" data-svelte-h="svelte-1ljskpm"><div class="grid row-start-2 space-y-12 place-items-center"><h1 class="text-6xl">Authenticating...</h1></div></main> `;
    }
    return function(isVerified) {
      return ` ${isVerified ? `${slots.default ? slots.default({}) : ``}` : `<main class="h-screen grid grid-rows-3"><div class="grid row-start-2 space-y-12 place-items-center"><h1 class="text-6xl" data-svelte-h="svelte-1at55m8">Failed authentication</h1> <h2 class="text-2xl" data-svelte-h="svelte-4tt2xs">Please Refresh Page and enter the right key</h2> <button>${validate_component(Button, "Button").$$render($$result, {}, {}, {
        default: () => {
          return `Refresh Page`;
        }
      })}</button></div></main>`} `;
    }(__value);
  }(verified)}`;
});
function formatTime(rawString) {
  return new Date(rawString).toLocaleDateString("us", {
    hour: "numeric",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Dar_es_Salaam"
  });
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const supabase = createClient("https://qnzxoapdhdycrblbeovn.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuenhvYXBkaGR5Y3JibGJlb3ZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyNzc4NDQsImV4cCI6MjAwODg1Mzg0NH0.oXm7-RMRSzKw0blIJ99daqwW7vz93Tj2iadXg1m6EEs");
  let activeTab = 0;
  function toggleTab(tab) {
    activeTab = tab;
  }
  return `${validate_component(Authenticate, "Authenticate").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col w-full h-full shadow-lg shadow-background lg:grid-cols-2 card-shadow grid-rows-2 px-10 lg:px-20 xl:px-40 py-40 justify-center place-items-center border-b border-secondary/40"><h1 class="font-bold text-primary display-medium" data-svelte-h="svelte-vszjkt">Admin Board</h1> <hr class="w-40 py-4"> <div class="grid grid-cols-2 mx-auto gap-5 w-fit my-4">${validate_component(Button, "Button").$$render(
        $$result,
        {
          click: () => {
            toggleTab(0);
          }
        },
        {},
        {
          default: () => {
            return `Contact Form`;
          }
        }
      )} ${validate_component(Button, "Button").$$render(
        $$result,
        {
          click: () => {
            toggleTab(1);
          }
        },
        {},
        {
          default: () => {
            return `Request Tour`;
          }
        }
      )}</div> <div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-5"><h2 class="font-bold col-span-2 text-primary display-small bg-surface/70 rounded-md p-6">${escape(activeTab == 1 ? "Requested Tours:" : "Contact Forms:")}</h2> ${activeTab == 1 ? `${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return ` <p data-svelte-h="svelte-qdsr2u">Loading...</p> `;
        }
        return function(bapta) {
          return ` ${bapta.data ? `${each(bapta.data, (tour) => {
            return `<div class="rounded-lg shadow-lg shadow-black bg-surface/70 h-full w-full"><div class="p-5 text-surface-variant-on prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl prose-invert prose-main justify-items-center mx-auto"><p>First Name: ${escape(tour.firstName)}</p> <p>Last Name: ${escape(tour.lastName)}</p> <p>Tours: ${escape(tour.tours)}</p> <p>Email: ${escape(tour.email)}</p> <p>WhatsApp: ${escape(tour.whatsapp)}</p> <p>People: ${escape(tour.people)}</p> <p>Message: ${escape(tour.message)}</p> <p>Request Date: ${escape(formatTime(tour.created_at))}</p></div> </div>`;
          })}` : ``} `;
        }(__value);
      }(supabase.from("baptaTours").select("*"))}` : `${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return ` <p data-svelte-h="svelte-qdsr2u">Loading...</p> `;
        }
        return function(bapta) {
          return ` ${bapta.data ? `${each(bapta.data, ({ name, message, email, created_at }) => {
            return `<div class="rounded-lg shadow-lg bg-surface h-full"><div class="p-8 text-left text-surface-variant-on prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl prose-invert prose-main"><p>Name: ${escape(name)}</p> <p>Message: ${escape(message)}</p> <p>Email: ${escape(email)}</p> <p>Request Date: ${escape(formatTime(created_at))}</p></div> </div>`;
          })}` : ``} `;
        }(__value);
      }(supabase.from("Contact Forms").select("*").eq("website", "bapta"))}`}</div></div>`;
    }
  })}`;
});
export {
  Page as default
};
