<script lang="ts">
  import { CssClasses } from "../../../../dist/types";
  import { onMount } from "svelte";
  export let size: "sm" | "md" | "lg" | "xl" = "md";
  let proseClasses: CssClasses = "";
  onMount(() => {
    switch (size) {
      case "sm": {
        proseClasses = " prose-sm md:prose-base   2xl:prose-lg ";
        break;
      }
      case "md": {
        proseClasses = "sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl";
        break;
      }
      case "lg": {
        proseClasses = "sm:prose-lg md:prose-xl lg:prose-2xl";
        break;
      }
      case "xl": {
        break;
      }
      default: {
        break;
      }
    }
  });
</script>

<div
  class="{$$props.class} max-w-none prose-a:no-underline prose prose-main {proseClasses}"
>
  <slot />
</div>
