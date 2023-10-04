<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import type { CssClasses } from "$lib/types";
  import Icon from "./Icon.svelte";

  export let href: string = "";
  export let onClick: MouseEventHandler<HTMLAnchorElement> = () => {};

  /** provide classes to set border styles. the default is: md: md:border-primary/50 */
  export let border: CssClasses = "";
  /** provide classes to set padding. */
  export let padding: CssClasses = "px-8 py-3";
  /** provide classes to define a box shadow. */
  export let shadow: CssClasses = "";

  export let radius: CssClasses = "rounded-full";

  export let uppercase: boolean = false;

  export let arrow: boolean = false;

  export const variations: { [key: string]: CssClasses } = {
    outlined: "border-2 border-primary",
  };

  $: classesBase = `${padding} ${shadow} ${border} ${radius} ${$$props.class}`;
</script>

<a
  {href}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  class:uppercase
  class=" {classesBase} flex w-fit h-fit relative place-items-center font-bold group text-center transition-all duration-300 {$$props.secondary
    ? ' text-primary bg-white'
    : 'text-primary bg-surface-on hover:bg-tertiary'}"
>
  <span
    class="relative z-0 flex gap-4 place-items-center mt-0.5 group-hover:text-surface-on"
  >
    <slot />
    {#if arrow}
      <Icon
        class="-rotate-90 my-auto group-hover:translate-x-2 duration-300 transition-all "
        icon="down-arrow"
        height="24"
        width="24"
      />
    {/if}
  </span></a
>
