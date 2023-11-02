<script lang="ts">
  import "../app.postcss";
  import { Header, Shell, FatFooter, Prose } from "lorc";

  const headerLinks: { [key: string]: string } = {
    About: "/",
    Contact: "/",
  };
  const footerLinks: { [key: string]: { [key: string]: string } } = {
    Explore: {
      Home: "/",
    },
    Support: {
      About: "/",
      Contact: "/",
      FAQ: "/",
    },
    Legal: {
      "Privacy Policy": "/",
      "Terms of Service": "/",
    },
  };

  const CTAButtons: {
    [label: string]: { href: string; highlight: boolean };
  } = {
    "Contact us": { href: "/", highlight: false },
  };
</script>

<Shell class="bg-background">
  <svelte:fragment slot="header">
    <Prose>
      <Header companyName="" pages={headerLinks} />
    </Prose>
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="footer">
    <FatFooter companyName="" pages={footerLinks} />
  </svelte:fragment>
</Shell>
