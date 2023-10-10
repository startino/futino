<script lang="ts">
  import type { CssClasses } from "$lib/types";

  export let href: string | undefined;

  /** Provide the max widths of the container at different screen sizes. */
  export let size: CssClasses = "max-w-md";
  /** provide classes to set border styles. the default is: md: md:border-primary/50 */
  export let border: CssClasses = "";

  export let radius: CssClasses = "rounded-md";
  /** provide classes to set padding. */
  export let padding: CssClasses = " sm:px-6 lg:px-8 px-4 py-3 sm:py-4 lg:py-6";
  export let margin: CssClasses = "mx-auto";
  /** provide classes to define a box shadow. */
  export let shadow: CssClasses = "";

  $: classesBase = `${size} ${margin}  ${padding} ${shadow} ${border} ${radius} ${$$props.class}`;
</script>

{#if href}
  <a class={classesBase} {href} style={$$props.style}>
    <slot />
  </a>
{:else}
  <div class={classesBase} style={$$props.style}>
    <slot />
  </div>
{/if}
