<script lang="ts">
  import type { CssClasses } from "../../types";

  export let height: CssClasses = "h-8";
</script>

<!-- Not rounded, should be done in image with transparent background for logos -->
<img src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=500" class="{$$props.class} {height} not-prose" alt="Logo" />
