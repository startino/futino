<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import type { CssClasses } from "$lib/types";

  export let href: string = "";
  export let onClick: MouseEventHandler<HTMLAnchorElement> = () => {};

  /** provide classes to set border styles. the default is: md: md:border-primary/50 */
  export let border: CssClasses = "border-2 border-primary";
  /** provide classes to set padding. */
  export let padding: CssClasses = "px-6 py-3";
  /** provide classes to define a box shadow. */
  export let shadow: CssClasses = "";

  export let uppercase: boolean = true;

  $: classesBase = `${padding} ${shadow} ${border} ${$$props.class}`;
</script>

<a
  {href}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  class:uppercase
  class="{$$props.class} {classesBase} flex w-fit relative hover:translate-y-1 place-items-center font-bold rounded-md group text-center hover:text-primary-container-on hover:bg-primary-container/60 transition-all duration-300 hover:scale-[97%] {$$props.secondary
    ? ' text-primary bg-white'
    : 'text-primary bg-white'}"
>
  <span class="relative z-0">
    <slot />
  </span></a
>
