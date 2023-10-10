<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";
  import type { CssClasses } from "$lib/types";
  import Icon from "./Icon.svelte";

  export let href: string = "";
  export let onClick: MouseEventHandler<HTMLAnchorElement> = () => {};

  /** provide classes to set border styles. the default is: md: md:border-primary/50 */
  export let border: CssClasses = "";
  /** provide classes to set padding. */
  export let padding: CssClasses = "px-8 py-2";
  /** provide classes to define a box shadow. */
  export let shadow: CssClasses = "";
  export let margin: CssClasses = "";

  export let radius: CssClasses = "rounded-full";

  export let uppercase: boolean = false;

  export let arrow: boolean = false;

  export const variations: { [key: string]: CssClasses } = {
    outlined: "border-2 border-primary",
  };

  export let highlight: boolean = false;

  $: classesBase = `${padding} ${margin} ${shadow} ${border} ${radius} ${$$props.class}`;
</script>

<a
  {href}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  class:uppercase
  class=" {classesBase} flex w-fit h-fit relative place-items-center font-bold group text-center transition-all duration-300 {highlight
    ? 'text-tertiary-on bg-primary hover:bg-tertiary'
    : 'text-surface bg-surface-on hover:bg-tertiary'}"
>
  <span
    class="relative mx-auto z-0 flex gap-4 place-items-center group-hover:text-tertiary-on transition-all duration-150 delay-75"
  >
    <h6 class="m-0 sm:m-0 text-2xl font-normal whitespace-nowrap">
      <slot />
    </h6>
    {#if arrow}
      <Icon
        class="-rotate-90 my-auto group-hover:translate-x-2 duration-300 transition-all not-prose"
        icon="down-arrow"
        height="24"
        width="24"
      />
    {/if}
  </span></a
>
