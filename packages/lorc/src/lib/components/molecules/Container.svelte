<script lang="ts">
  import type { CssClasses } from "$lib/types";

  /** Provide the max widths of the container at different screen sizes. */
  export let sizes: CssClasses =
    "max-w-xs xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl";
  /** Provide classes to set border styles. The default is: md: md:border-primary/50 */
  export let border: CssClasses = "md:border-primary/50";
  /** Provide classes to set padding. */
  export let padding: CssClasses = "";
  /** Provide classes to define a box shadow. */
  export let shadow: CssClasses = "";

  $: classesBase = `${sizes} ${padding} ${shadow} ${border} ${$$props.class}`;
</script>

<!--
@component
Center content horizontally with predefined max-width

@example
    ```svelte
    <Container>
        Default container
    </Container>

    <Container sizes="max-w-sm xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        xs container with xs horizontal padding
    </Container>

    <Container size={200} px={0}>
        200px container with 0px horizontal padding
    </Container>
    ```
-->
<div class={classesBase}>
  <slot />
</div>
