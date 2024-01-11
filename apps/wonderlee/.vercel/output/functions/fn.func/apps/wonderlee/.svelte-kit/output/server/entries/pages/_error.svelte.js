import { z as create_anchor, J as escape, K as store_get, L as unsubscribe_stores, y as pop, t as push } from "../../chunks/index.js";
import { g as getContext } from "../../chunks/main-client.js";
import "../../chunks/exports.js";
import { B as Button } from "../../chunks/Button.js";
import "../../chunks/ContactForm.svelte_svelte_type_style_lang.js";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _error($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  const anchor = create_anchor($$payload);
  $$payload.out += `<section class="w-full h-screen shadow-lg shadow-background card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center border-b border-secondary/40 pt-44"><div class="flex flex-col max-w-2xl mx-auto mt-8 mb-64 text-center items-center space-y-2"><h1 class="display-large">${escape(store_get($$store_subs, "$page", page).status)} ${escape(store_get($$store_subs, "$page", page).error?.message)}</h1> ${anchor}`;
  Button($$payload, {
    href: "/",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<h1 class="display-small">Return to Home Page</h1>`;
    }
  });
  $$payload.out += `${anchor}</div></section>`;
  unsubscribe_stores($$store_subs);
  pop();
}
export {
  _error as default
};
