import { c as create_ssr_component, e as escape } from "./ssr.js";
const Prose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "md" } = $$props;
  let proseClasses = "";
  switch (size) {
    case "sm": {
      proseClasses = " sm:prose-sm md:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl ";
      break;
    }
    case "md": {
      proseClasses = "sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl";
      break;
    }
    case "lg": {
      proseClasses = "sm:prose-lg md:prose-xl lg:prose-2xl";
      break;
    }
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<div class="${escape($$props.class, true) + " max-w-none prose-a:no-underline prose prose-main " + escape(proseClasses, true)}">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Prose as P
};
