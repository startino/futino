import { A as value_or_fallback, B as attr, C as stringify, x as bind_props, y as pop, D as sanitize_props, t as push, z as create_anchor, E as ensure_array_like, F as escape_text, G as slot, H as sanitize_slots, I as add_styles } from "../../chunks/index.js";
import { P as Prose } from "../../chunks/Prose.js";
import "../../chunks/ContactForm.svelte_svelte_type_style_lang.js";
import { I as Icon } from "../../chunks/Icon.js";
import { B as Button } from "../../chunks/Button.js";
function Logo($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  let height = value_or_fallback($$props["height"], "h-8");
  $$payload.out += `<img src="/favicon.png"${attr("class", `${stringify($$sanitized_props.class)} ${stringify(height)}`, false)} alt="Logo">`;
  bind_props($$props, { height });
  pop();
}
function FatFooter($$payload, $$props) {
  push(false);
  let pages = value_or_fallback($$props["pages"], {
    Explore: { Home: "/", About: "/" },
    Legal: { "Privacy Policy": "/", "Tems of Service": "/" },
    Support: { Skills: "/", FAQ: "/" },
    Company: { Careers: "/", Blog: "/" }
  });
  let companyName = value_or_fallback($$props["companyName"], "Company Name");
  let background = value_or_fallback($$props["background"], "");
  let border = value_or_fallback($$props["border"], " border-outline");
  let padding = value_or_fallback($$props["padding"], "");
  let shadow = value_or_fallback($$props["shadow"], "");
  let gap = value_or_fallback($$props["gap"], "gap-6");
  let typography = value_or_fallback($$props["typography"], "text-primary");
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  const anchor_2 = create_anchor($$payload);
  const anchor_3 = create_anchor($$payload);
  const each_array = ensure_array_like(Object.entries(pages));
  $$payload.out += `<footer class="max-w-none prose-a:no-underline prose sm:prose-sm lg:prose-md prose-invert prose-main bg-background"><div class="flex text-left flex-col md:flex-row z-50 w-full py-24 items-start justify-start gap-8 px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto justify-items-start"><div class="flex flex-col gap-3 items-start prose-a:no-underline prose sm:prose-sm lg:prose-md prose-invert prose-main w-full"><a style="margin: 0" href="/">${anchor}`;
  Logo($$payload, { class: "not-prose" });
  $$payload.out += `${anchor} ${anchor_1}`;
  if (companyName != "Company Name") {
    $$payload.out += "<!--ssr:if:true-->";
    $$payload.out += `<p class="flex m-0 my-auto">${escape_text(companyName)}</p>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_1}</a> ${anchor_2}`;
  slot($$payload, $$props.$$slots?.["left"], {}, null);
  $$payload.out += `${anchor_2}</div> <div class="grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-start items-start mt-3 sm:mt-0 w-full">${anchor_3}`;
  for (let $$index_1 = 0; $$index_1 < each_array.length; $$index_1++) {
    const $$item = each_array[$$index_1];
    const [category, links] = $$item;
    const anchor_4 = create_anchor($$payload);
    const anchor_5 = create_anchor($$payload);
    const each_array_1 = ensure_array_like(Object.entries(links));
    $$payload.out += `${anchor_4}<div class="flex flex-col gap-3 max-w-none prose-a:no-underline prose sm:prose-sm lg:prose-md prose-invert prose-main"><h6 class="mb-1 font-bold m-0">${escape_text(category)}</h6> ${anchor_5}`;
    for (let $$index = 0; $$index < each_array_1.length; $$index++) {
      const $$item2 = each_array_1[$$index];
      const [name, href] = $$item2;
      const anchor_6 = create_anchor($$payload);
      $$payload.out += `${anchor_6}<a${attr("href", href, false)} class="hover:underline m-0"><h6>${escape_text(name)}</h6></a>${anchor_6}`;
    }
    $$payload.out += `${anchor_5}</div>${anchor_4}`;
  }
  $$payload.out += `${anchor_3}</div></div></footer>`;
  bind_props($$props, {
    pages,
    companyName,
    background,
    border,
    padding,
    shadow,
    gap,
    typography
  });
  pop();
}
function Header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  let classesBase;
  let pages = value_or_fallback($$props["pages"], { Home: "/" });
  let CTAButtons = value_or_fallback($$props["CTAButtons"], {});
  let sticky = value_or_fallback($$props["sticky"], true);
  let dualTheme = value_or_fallback($$props["dualTheme"], true);
  let companyName = value_or_fallback($$props["companyName"], "Company Name");
  let logoPos = value_or_fallback($$props["logoPos"], "leading");
  let bgBig = value_or_fallback($$props["bgBig"], "");
  let bgSmall = value_or_fallback($$props["bgSmall"], "");
  let maxWidth = value_or_fallback($$props["maxWidth"], "");
  let border = value_or_fallback($$props["border"], "");
  let paddingBig = value_or_fallback($$props["paddingBig"], "");
  let paddingSmall = value_or_fallback($$props["paddingSmall"], "");
  let margin = value_or_fallback($$props["margin"], "mx-auto");
  let top = value_or_fallback($$props["top"], "");
  let radius = value_or_fallback($$props["radius"], "");
  let shadow = value_or_fallback($$props["shadow"], "");
  let gap = value_or_fallback($$props["gap"], "gap-6");
  let typography = value_or_fallback($$props["typography"], "");
  let variant = value_or_fallback($$props["variant"], "normal");
  let buttonVariant = value_or_fallback($$props["buttonVariant"], "normal");
  const variants = {
    normal: {
      colors: ["bg-transparent", "bg-transparent"],
      border: "border-b border-primary/40",
      padding: ["py-10", "py-3 md:py-4"],
      radius: "rounded-none",
      typography: "text-surface-on",
      top: "top-0"
    },
    pill: {
      colors: ["bg-surface", "bg-surface"],
      border: "",
      padding: ["py-4 px-4", "py-2 px-2 md:py-4 md:px-4"],
      radius: "rounded-full",
      typography: "text-surface-on",
      top: "top-4",
      margin: "",
      maxWidth: "max-w-5xl"
    }
  };
  function setClasses() {
    bgBig = bgBig || variants[variant].colors[0];
    bgSmall = bgSmall || variants[variant].colors[1];
    paddingBig = paddingBig || variants[variant].padding[0];
    paddingSmall = paddingSmall || variants[variant].padding[1];
    margin = margin || variants[variant].margin;
    border = border || variants[variant].border;
    radius = radius || variants[variant].radius;
    top = top || variants[variant].top;
    maxWidth = maxWidth || variants[variant].maxWidth;
    typography = typography || variants[variant].typography;
  }
  setClasses();
  let largeHeaderClass = `${paddingBig} ${bgBig}`;
  let activeheaderClass = largeHeaderClass;
  classesBase = `${maxWidth} ${margin} ${shadow} ${border} ${radius} ${top} ${$$sanitized_props.class} ${typography}`;
  const anchor = create_anchor($$payload);
  const anchor_3 = create_anchor($$payload);
  const anchor_6 = create_anchor($$payload);
  const each_array_1 = ensure_array_like(Object.entries(pages));
  const anchor_10 = create_anchor($$payload);
  const each_array_2 = ensure_array_like(Object.entries(CTAButtons));
  const anchor_13 = create_anchor($$payload);
  const anchor_15 = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor} <header id="header"${attr("class", ` ${stringify(sticky ? "fixed" : "")} z-40 w-full transition duration-400 justify-items-center`, false)}><div${attr("class", `${stringify(classesBase)} ${stringify(activeheaderClass)} z-40 relative transition transition-[padding] duration-400`, false)}><div class="flex md:grid md:grid-cols-5 z-50 items-center w-full justify-center px-6 max-w-7xl mx-auto">${anchor_3}`;
  if (logoPos == "leading") {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_4 = create_anchor($$payload);
    $$payload.out += `<a class="flex gap-3 not-prose justify-self-start mr-auto" href="/">${anchor_4}`;
    Logo($$payload, {});
    $$payload.out += `${anchor_4} <p class="hidden sm:flex text-xl my-auto">${escape_text(companyName)}</p></a>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_5 = create_anchor($$payload);
    $$payload.out += `<a class="flex md:hidden gap-3 not-prose justify-self-start mr-auto" href="/">${anchor_5}`;
    Logo($$payload, { height: "h-10" });
    $$payload.out += `${anchor_5} <p class="hidden sm:flex text-xl my-auto">${escape_text(companyName)}</p></a>`;
  }
  $$payload.out += `${anchor_3} <nav${attr("class", `hidden ${stringify(logoPos == "center" ? `col-span-5 md:grid justify-between w-full h-full place-items-center grid-cols-${Object.entries(pages).length + 1}` : `md:flex col-span-3 `)} mx-auto ${stringify(gap)} justify-self-center`, false)}>${anchor_6}`;
  for (let i = 0; i < each_array_1.length; i++) {
    const $$item = each_array_1[i];
    const [name, href] = $$item;
    const anchor_7 = create_anchor($$payload);
    const anchor_8 = create_anchor($$payload);
    $$payload.out += `${anchor_7}<a${attr("class", `text-center ${stringify(typography)}`, false)}${attr("href", href, false)}><h6 class="m-0 sm:m-0">${escape_text(name)}</h6></a> ${anchor_8}`;
    if (logoPos == "center" && i == Object.entries(pages).length / 2 - 1) {
      $$payload.out += "<!--ssr:if:true-->";
      const anchor_9 = create_anchor($$payload);
      $$payload.out += `<a class="flex gap-3 not-prose" href="/">${anchor_9}`;
      Logo($$payload, { height: "h-10" });
      $$payload.out += `${anchor_9} <p class="hidden sm:flex text-xl my-auto">${escape_text(companyName)}</p></a>`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
    }
    $$payload.out += `${anchor_8}${anchor_7}`;
  }
  $$payload.out += `${anchor_6}</nav> <div${attr("class", `hidden md:flex grid grid-cols-${stringify(Object.entries(CTAButtons).length)} gap-4 md:gap-6 place-items-center w-fit justify-self-end`, false)}>${anchor_10}`;
  for (let $$index_2 = 0; $$index_2 < each_array_2.length; $$index_2++) {
    const $$item = each_array_2[$$index_2];
    const [label, { href, highlight }] = $$item;
    const anchor_11 = create_anchor($$payload);
    const anchor_12 = create_anchor($$payload);
    $$payload.out += `${anchor_11}${anchor_12}`;
    Button($$payload, {
      variant: buttonVariant,
      class: "w-full",
      highlight,
      href,
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `${escape_text(label)}`;
      }
    });
    $$payload.out += `${anchor_12}${anchor_11}`;
  }
  $$payload.out += `${anchor_10}</div> ${anchor_13}`;
  if (logoPos == "trailing") {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_14 = create_anchor($$payload);
    $$payload.out += `<a class="flex gap-3 not-prose" href="/">${anchor_14}`;
    Logo($$payload, {});
    $$payload.out += `${anchor_14} <p class="hidden sm:flex text-xl my-auto">${escape_text(companyName)}</p></a>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_13} <button class="flex md:hidden stroke-primary hover:stroke-tertiary">${anchor_15}`;
  Icon($$payload, {
    height: "32",
    width: "32",
    fill: "none",
    icon: "burger"
  });
  $$payload.out += `${anchor_15}</button></div></div></header>`;
  bind_props($$props, {
    pages,
    CTAButtons,
    sticky,
    dualTheme,
    companyName,
    logoPos,
    bgBig,
    bgSmall,
    maxWidth,
    border,
    paddingBig,
    paddingSmall,
    margin,
    top,
    radius,
    shadow,
    gap,
    typography,
    variant,
    buttonVariant
  });
  pop();
}
function Shell($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  let classesBase, classesHeader, classesSidebarLeft, classesSidebarRight, classesPageHeader, classesPageContent, classesPageFooter, classesFooter;
  let scrollbarGutter = value_or_fallback($$props["scrollbarGutter"], "auto");
  let regionPage = value_or_fallback($$props["regionPage"], "");
  let slotHeader = value_or_fallback($$props["slotHeader"], "z-10");
  let slotSidebarLeft = value_or_fallback($$props["slotSidebarLeft"], "w-auto");
  let slotSidebarRight = value_or_fallback($$props["slotSidebarRight"], "w-auto");
  let slotPageHeader = value_or_fallback($$props["slotPageHeader"], "");
  let slotPageContent = value_or_fallback($$props["slotPageContent"], "");
  let slotPageFooter = value_or_fallback($$props["slotPageFooter"], "");
  let slotFooter = value_or_fallback($$props["slotFooter"], "");
  const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
  const cContentArea = "w-full h-full flex overflow-hidden";
  const cPage = "flex-1 overflow-x-hidden flex flex-col ";
  const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
  const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
  classesBase = `${cBaseAppShell} ${$$sanitized_props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  const anchor = create_anchor($$payload);
  const anchor_2 = create_anchor($$payload);
  const anchor_4 = create_anchor($$payload);
  const anchor_6 = create_anchor($$payload);
  const anchor_7 = create_anchor($$payload);
  const anchor_9 = create_anchor($$payload);
  const anchor_11 = create_anchor($$payload);
  $$payload.out += `<div id="appShell"${attr("class", classesBase, false)} data-testid="app-shell">${anchor}`;
  if ($$slots.header) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `<header id="shell-header"${attr("class", `flex-none ${stringify(classesHeader)} ${stringify("opacity-100")} transition-opacity ${stringify([""].filter(Boolean).join(" "))}`, false)}>${anchor_1}`;
    slot($$payload, $$props.$$slots?.["header"], {}, null);
    $$payload.out += `${anchor_1}</header>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor} <div${attr("class", `flex-auto ${stringify("opacity-100")} transition-opacity duration-300 ${stringify(cContentArea)} ${stringify([""].filter(Boolean).join(" "))}`, false)}>${anchor_2}`;
  if ($$slots.sidebarLeft) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_3 = create_anchor($$payload);
    $$payload.out += `<aside id="sidebar-left"${attr("class", classesSidebarLeft, false)}>${anchor_3}`;
    slot($$payload, $$props.$$slots?.["sidebarLeft"], {}, null);
    $$payload.out += `${anchor_3}</aside>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_2} <div${add_styles({ "scrollbar-gutter": scrollbarGutter })} id="page"${attr("class", `${stringify(regionPage)} ${stringify(cPage)}`, false)}>${anchor_4}`;
  if ($$slots.pageHeader) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_5 = create_anchor($$payload);
    $$payload.out += `<header id="page-header"${attr("class", `flex-none ${stringify(classesPageHeader)}`, false)}>${anchor_5}`;
    slot($$payload, $$props.$$slots?.["pageHeader"], {}, () => {
      $$payload.out += `(slot:header)`;
    });
    $$payload.out += `${anchor_5}</header>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_4} <main id="page-content"${attr("class", `flex-auto ${stringify(classesPageContent)}`, false)}>${anchor_6}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor_6}</main> ${anchor_7}`;
  if ($$slots.pageFooter) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_8 = create_anchor($$payload);
    $$payload.out += `<footer id="page-footer"${attr("class", `flex-none ${stringify(classesPageFooter)}`, false)}>${anchor_8}`;
    slot($$payload, $$props.$$slots?.["pageFooter"], {}, () => {
      $$payload.out += `(slot:footer)`;
    });
    $$payload.out += `${anchor_8}</footer>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_7}</div> ${anchor_9}`;
  if ($$slots.sidebarRight) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_10 = create_anchor($$payload);
    $$payload.out += `<aside id="sidebar-right"${attr("class", classesSidebarRight, false)}>${anchor_10}`;
    slot($$payload, $$props.$$slots?.["sidebarRight"], {}, null);
    $$payload.out += `${anchor_10}</aside>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_9}</div> ${anchor_11}`;
  if ($$slots.footer) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_12 = create_anchor($$payload);
    $$payload.out += `<footer id="shell-footer"${attr("class", `flex-none ${stringify(classesFooter)}`, false)}>${anchor_12}`;
    slot($$payload, $$props.$$slots?.["footer"], {}, null);
    $$payload.out += `${anchor_12}</footer>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
  }
  $$payload.out += `${anchor_11}</div>`;
  bind_props($$props, {
    scrollbarGutter,
    regionPage,
    slotHeader,
    slotSidebarLeft,
    slotSidebarRight,
    slotPageHeader,
    slotPageContent,
    slotPageFooter,
    slotFooter
  });
  pop();
}
function _layout($$payload, $$props) {
  push(false);
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
      Products: "/products",
      Testimonials: "/#testimonials"
    },
    Support: {
      About: "/about",
      Contact: "/contact",
      FAQ: "/#faq"
    },
    Legal: {
      "Privacy Policy": "/",
      Licenses: "/about#licenses"
    }
  };
  const CTAButtons = {
    "Contact us": { href: "/contact", highlight: false }
  };
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Shell($$payload, {
    class: "bg-background",
    children: ($$payload2, $$slotProps) => {
      const anchor_1 = create_anchor($$payload2);
      $$payload2.out += `${anchor_1}`;
      slot($$payload2, $$props.children, {}, null);
      $$payload2.out += `${anchor_1}`;
    },
    $$slots: {
      "header": ($$payload2, $$slotProps) => {
        {
          const anchor_2 = create_anchor($$payload2);
          $$payload2.out += `${anchor_2}`;
          Prose($$payload2, {
            children: ($$payload3, $$slotProps2) => {
              const anchor_3 = create_anchor($$payload3);
              $$payload3.out += `${anchor_3}`;
              Header($$payload3, {
                buttonVariant: "pill",
                companyName: "",
                pages: headerLinks,
                CTAButtons
              });
              $$payload3.out += `${anchor_3}`;
            }
          });
          $$payload2.out += `${anchor_2}`;
        }
      },
      "footer": ($$payload2, $$slotProps) => {
        {
          const anchor_4 = create_anchor($$payload2);
          $$payload2.out += `${anchor_4}`;
          FatFooter($$payload2, { companyName: "", pages: footerLinks });
          $$payload2.out += `${anchor_4}`;
        }
      }
    }
  });
  $$payload.out += `${anchor}`;
  pop();
}
export {
  _layout as default
};
