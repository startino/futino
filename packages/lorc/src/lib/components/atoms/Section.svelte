<script lang="ts">
  // Types to get TailwindCSS Intellisense
  import type { CssClasses } from "../../types.ts";

  // Props (base styles)
  /** Provide classes to set background color. */
  export let background: CssClasses = "";
  /** Provide classes to set border styles. */
  export let border: CssClasses = "";
  /** Provide classes to set padding. */
  export let padding: CssClasses = "";
  /** Provide classes to define a box shadow. */
  export let shadow: CssClasses = "";
  /** Provide classes to set base styling for gap spacing. */
  export let gap: CssClasses = "gap-6";
  /** Provide classes to set the base typography styling.*/
  export let typography: CssClasses = "";

  // Reactive Classes
  $: classesBase = `grid place-items-center
   ${background} ${border} ${padding} ${shadow} ${typography} ${$$props.class}`;
</script>

<section class="${classesBase}">
  <slot />
</section>
