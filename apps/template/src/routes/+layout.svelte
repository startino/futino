<script lang="ts">
  import "../app.pcss";
  import { Header } from "lorc";
</script>

<Header />

<div class="min-h-screen bg-background-light dark:bg-background-dark">
  <slot />
</div>
