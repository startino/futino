<script lang="ts">
  import "../app.postcss";
  import { Header, Shell, FatFooter } from "lorc";

  const headerLinks: { [key: string]: string } = {
    Home: "/",
    "Our work": "/our-work",
    Services: "/services",
    Contact: "/contact",
    Products: "/products",
  };
</script>

<Shell class="bg-background">
  <svelte:fragment slot="header">
    <Header companyName="Wonderlee" pages={headerLinks} />
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="footer">
    <FatFooter companyName="Wonderlee" />
  </svelte:fragment>
</Shell>
