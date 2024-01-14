<script lang="ts">
  import type { CssClasses } from "../../types";

  export let height: CssClasses = "h-8";
</script>

<!-- Not rounded, should be done in image with transparent background for logos -->
<img src="/favicon.png" class="{$$props.class} {height}" alt="Logo" />
