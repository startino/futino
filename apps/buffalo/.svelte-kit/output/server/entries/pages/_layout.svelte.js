import { c as create_ssr_component, v as validate_component, e as escape, b as each, d as add_attribute, f as add_styles, g as compute_slots } from "../../chunks/ssr.js";
import { P as Prose } from "../../chunks/Prose.js";
import "crypto-js/sha256.js";
import { I as Icon } from "../../chunks/Icon.js";
import { B as Button } from "../../chunks/Button.js";
const app = "";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <img src="/favicon.png" class="h-8" alt="Logo">`;
});
const FatFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pages = {
    Explore: { Home: "/", About: "/" },
    Legal: {
      "Privacy Policy": "/",
      "Tems of Service": "/"
    },
    Support: { Skills: "/", FAQ: "/" },
    Company: { Careers: "/", Blog: "/" }
  } } = $$props;
  let { companyName = "Company Name" } = $$props;
  let { background = "" } = $$props;
  let { border = " border-outline" } = $$props;
  let { padding = "" } = $$props;
  let { shadow = "" } = $$props;
  let { gap = "gap-6" } = $$props;
  let { typography = "text-primary" } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  if ($$props.companyName === void 0 && $$bindings.companyName && companyName !== void 0)
    $$bindings.companyName(companyName);
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
  return `<footer class="max-w-none prose-a:no-underline prose sm:prose-sm lg:prose-md prose-invert prose-main"><div class="flex text-left flex-col md:flex-row z-50 w-full py-24 items-start justify-start gap-8 px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto justify-items-start"><a class="flex gap-3 items-start not-prose w-full" href="/">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})} <p class="flex m-0 my-auto">${escape(companyName)}</p></a> <div class="grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-start items-start mt-3 sm:mt-0 w-full">${each(Object.entries(pages), ([category, links]) => {
    return `<div class="flex flex-col gap-3 max-w-none prose-a:no-underline prose sm:prose-sm lg:prose-md prose-invert prose-main"><h6 class="mb-1 font-bold m-0">${escape(category)}</h6> ${each(Object.entries(links), ([name, href]) => {
      return `<a${add_attribute("href", href, 0)} class="hover:underline m-0"><h6>${escape(name)}</h6> </a>`;
    })} </div>`;
  })}</div></div></footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { pages = { Home: "/" } } = $$props;
  let { CTAButtons = {} } = $$props;
  let { sticky = true } = $$props;
  let { dualTheme = true } = $$props;
  let { companyName = "Company Name" } = $$props;
  let { background = "" } = $$props;
  let { border = "border-primary/50" } = $$props;
  let { padding = "" } = $$props;
  let { shadow = "" } = $$props;
  let { gap = "gap-6" } = $$props;
  let { typography = "text-primary" } = $$props;
  let largeHeaderClass = `py-12`;
  let activeheaderClass = largeHeaderClass;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  if ($$props.CTAButtons === void 0 && $$bindings.CTAButtons && CTAButtons !== void 0)
    $$bindings.CTAButtons(CTAButtons);
  if ($$props.sticky === void 0 && $$bindings.sticky && sticky !== void 0)
    $$bindings.sticky(sticky);
  if ($$props.dualTheme === void 0 && $$bindings.dualTheme && dualTheme !== void 0)
    $$bindings.dualTheme(dualTheme);
  if ($$props.companyName === void 0 && $$bindings.companyName && companyName !== void 0)
    $$bindings.companyName(companyName);
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
  classesBase = `${sticky ? "fixed" : ""} ${background} ${border} ${padding} ${shadow} ${typography} ${$$props.class}`;
  return `${``} <header id="header" class="${escape(classesBase, true) + " top-0 z-40 w-full transition-all duration-400"}"><div class="${"relative " + escape(activeheaderClass, true) + " transition-all duration-400"}"><div class="flex md:grid md:grid-cols-5 z-50 items-center justify-between w-full px-6 max-w-7xl mx-auto"><a class="flex gap-3 not-prose" href="/">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})} <p class="hidden sm:flex text-xl my-auto">${escape(companyName)}</p></a>  <nav class="${"hidden md:flex col-span-3 mx-auto " + escape(gap, true)}">${each(Object.entries(pages), ([name, href]) => {
    return `<a class="text-background-on hover:text-tertiary"${add_attribute("href", href, 0)}><h6 class="m-0 sm:m-0">${escape(name)}</h6> </a>`;
  })}</nav> <div class="${"hidden md:flex grid grid-cols-" + escape(Object.entries(CTAButtons).length, true) + " gap-4 md:gap-6 place-items-center w-fit"}">${each(Object.entries(CTAButtons), ([label, { href, highlight }]) => {
    return `${validate_component(Button, "Button").$$render($$result, { class: "w-full", highlight, href }, {}, {
      default: () => {
        return `${escape(label)} `;
      }
    })}`;
  })}</div> <button class="flex md:hidden stroke-primary hover:stroke-tertiary">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      height: "28",
      width: "28",
      fill: "none",
      icon: "burger"
    },
    {},
    {}
  )}</button></div></div></header>`;
});
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col ";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const Shell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  var _a;
  let { scrollbarGutter = "auto" } = $$props;
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.scrollbarGutter === void 0 && $$bindings.scrollbarGutter && scrollbarGutter !== void 0)
    $$bindings.scrollbarGutter(scrollbarGutter);
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${(_a = $$props.class) !== null && _a !== void 0 ? _a : ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell"> ${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}  <div class="${"flex-auto " + escape(cContentArea, true)}"> ${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}  <div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}"${add_styles({ "scrollbar-gutter": scrollbarGutter })}> ${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}  <main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>  ${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>  ${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>  ${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const headerLinks = {
    "Our work": "/our-work",
    Services: "/services",
    Products: "/products",
    About: "/about"
  };
  const footerLinks = {
    Explore: {
      Home: "/",
      "Our work": "/our-work",
      Products: "/products"
    },
    Support: {
      About: "/about",
      Contact: "/contact",
      FAQ: "/"
    },
    Legal: {
      "Privacy Policy": "/legal/privacy",
      "Terms of Service": "/legal/terms",
      Licenses: "/legal/licenses"
    }
  };
  const CTAButtons = {
    "Contact us": { href: "/contact", highlight: false }
  };
  return `${validate_component(Shell, "Shell").$$render($$result, { class: "bg-background" }, {}, {
    footer: () => {
      return `${validate_component(FatFooter, "FatFooter").$$render($$result, { companyName: "", pages: footerLinks }, {}, {})} `;
    },
    header: () => {
      return `${validate_component(Prose, "Prose").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Header, "Header").$$render(
            $$result,
            {
              companyName: "",
              pages: headerLinks,
              CTAButtons
            },
            {},
            {}
          )}`;
        }
      })} `;
    },
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
