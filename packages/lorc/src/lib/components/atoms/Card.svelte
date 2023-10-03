<script lang="ts">
  import type { CssClasses } from "$lib/types";

  /** Provide the max widths of the container at different screen sizes. */
  export let size: CssClasses = "max-w-md";
  /** provide classes to set border styles. the default is: md: md:border-primary/50 */
  export let border: CssClasses = "";

  export let radius: CssClasses = "rounded-md";
  /** provide classes to set padding. */
  export let padding: CssClasses =
    "mx-auto sm:px-6 lg:px-8 px-4 py-3 sm:py-4 lg:py-6";
  /** provide classes to define a box shadow. */
  export let shadow: CssClasses = "";

  $: classesBase = `${size} w-full ${padding} ${shadow} ${border} ${radius} ${$$props.class}`;
</script>

<div class={classesBase}>
  <slot />
</div>
