<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import type { CssClasses, IconType } from "../../types.ts";
  import Icon from "./Icon.svelte";

  export let href: string = "";
  export let onClick: MouseEventHandler<HTMLAnchorElement> = () => {};

  /** provide classes to set border styles. the default is: md: md:border-primary/50 */
  export let border: CssClasses = "";
  /** provide classes to set padding. */
  export let padding: CssClasses = "";
  /** provide classes to define a box shadow. */
  export let shadow: CssClasses = "";
  export let margin: CssClasses = "";

  export let radius: CssClasses = "";

  export let uppercase: boolean = false;

  /** LEGACY Determine whether arrow icon should be tracking **/
  export let arrow: boolean = false;
  /** Determine the icon that is tracking any words. **/
  export let tracking: IconType = "";

  export const variant: string = "normal";

  export let highlight: boolean = false;

  type StyleVariant = {
    [name: string]: {
      colors: CssClasses[];
      border: CssClasses;
      padding: CssClasses;
      radius: CssClasses;
      typography: CssClasses;
    };
  };
  const variants: StyleVariant = {};
  variants["normal"] = {
    colors: ["bg-surface", "bg-surface-highlight"],
    border: "",
    padding: "px-6 py-4",
    radius: "rounded-md",
    typography: "",
  };
  variants["pill"] = {
    colors: ["bg-surface", "bg-surface-highlight"],
    border: "",
    padding: "px-8 py-2",
    radius: "rounded-3xl",
    typography: "",
  };

  $: classesBase = `${
    padding || variants[variant].padding
  } ${margin} ${shadow} ${border || variants[variant].border} ${
    radius || variants[variant].radius
  } ${$$props.class}`;
</script>

<a
  {href}
  target={$$props.target}
  style={$$props.style}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  class:uppercase
  class=" {classesBase} flex w-fit h-fit relative place-items-center font-bold group text-center transition-all duration-300 hover:bg-tertiary hover:text-tertiary-on {highlight
    ? 'text-primary-on bg-primary '
    : 'text-surface bg-surface-on'}"
>
  <span
    class="relative mx-auto z-0 flex gap-4 place-items-center group-hover:text-tertiary-on transition-all duration-150 delay-75"
  >
    <h6 class="m-0 sm:m-0 text-2xl font-normal whitespace-nowrap">
      <slot />
    </h6>
    {#if tracking}
      <Icon
        class="-rotate-90 my-auto group-hover:translate-x-2 duration-300 transition-all not-prose"
        icon={tracking}
        height="24"
        width="24"
      />
    {/if}
  </span></a
>
