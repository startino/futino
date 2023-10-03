<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import type { CssClasses } from "$lib/types";

  export let href: string = "";
  export let onClick: MouseEventHandler<HTMLAnchorElement> = () => {};

  /** provide classes to set border styles. the default is: md: md:border-primary/50 */
  export let border: CssClasses = "";
  /** provide classes to set padding. */
  export let padding: CssClasses = "px-6 py-3";
  /** provide classes to define a box shadow. */
  export let shadow: CssClasses = "";

  export let uppercase: boolean = true;

  export const variations: { [key: string]: CssClasses } = {
    outlined: "border-2 border-primary",
  };

  $: classesBase = `${padding} ${shadow} ${border}  ${$$props.class}`;
</script>

<a
  {href}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  class:uppercase
  class=" {classesBase} flex w-fit relative place-items-center font-bold rounded-md group text-center transition-all duration-300 {$$props.secondary
    ? ' text-primary bg-white'
    : 'text-primary bg-white'}"
>
  <span class="relative z-0">
    <slot />
  </span></a
>
