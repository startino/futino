<script lang="ts">
  import "../app.postcss";
  import { Header, Shell, FatFooter } from "lorc";
</script>

<Shell class="bg-background-light dark:bg-background-dark">
  <svelte:fragment slot="header">
    <Header companyName="Wonderlee" />
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="footer">
    <FatFooter companyName="Wonderlee" />
  </svelte:fragment>
</Shell>
