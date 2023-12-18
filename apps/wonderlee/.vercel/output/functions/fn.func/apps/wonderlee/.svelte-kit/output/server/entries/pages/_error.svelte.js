import { h as getContext, c as create_ssr_component, i as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { B as Button } from "../../chunks/Button.js";
import "svelte-inview";
import "crypto-js/sha256.js";
/* empty css                                                 */const getStores = () => {
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
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return ` <section class="w-full h-screen shadow-lg shadow-background card-shadow px-10 lg:px-20 xl:px-40 pt-60 place-items-center border-b border-secondary/40 pt-44"><div class="flex flex-col max-w-2xl mx-auto mt-8 mb-64 text-center items-center space-y-2"><h1 class="display-large">${escape($page.status)} ${escape($page.error?.message)}</h1> ${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `<h1 class="display-small" data-svelte-h="svelte-pwf5e6">Return to Home Page</h1>`;
    }
  })}</div></section>`;
});
export {
  Error$1 as default
};
