<script lang="ts">
  import type { CssClasses } from "$lib/types";

  /** Provide the max widths of the container at different screen sizes. */
  export let sizes: CssClasses = "max-w-7xl";
  /** provide classes to set border styles. the default is: md: md:border-primary/50 */
  export let border: CssClasses = "";
  /** provide classes to set padding. */
  export let padding: CssClasses = "sm:px-6 lg:px-8 ;";

  export let margin: CssClasses = "mx-auto";
  /** provide classes to define a box shadow. */
  export let shadow: CssClasses = "";

  $: classesBase = `${sizes} ${padding} ${margin} ${shadow} ${border} ${$$props.class}`;
</script>

<!--
@component
Center content horizontally with predefined max-width

@example
    ```svelte
    <Container>
        Default container
    </Container>
       ```
-->
<div class={classesBase}>
  <slot />
</div>
