<script lang="ts">
  import "../app.postcss";
  import { Header, Shell, FatFooter, Prose } from "lorc";

  const headerLinks: { [key: string]: string } = {
    "Our work": "/our-work",
    Services: "/services",
    Products: "/products",
    About: "/about",
  };
  const footerLinks: { [key: string]: { [key: string]: string } } = {
    Explore: {
      Home: "/",
      "Our work": "/our-work",
      Products: "/products",
    },
    Support: {
      About: "/about",
      Contact: "/contact",
      FAQ: "/",
    },
    Legal: {
      "Privacy Policy": "/legal/privacy",
      "Terms of Service": "/legal/terms",
      Licenses: "/legal/licenses",
    },
  };

  const CTAButtons: {
    [label: string]: { href: string; highlight: boolean };
  } = {
    "Contact us": { href: "/contact", highlight: false },
  };
</script>

<Shell class="bg-background">
  <svelte:fragment slot="header">
    <Prose>
      <Header companyName="" pages={headerLinks} {CTAButtons} />
    </Prose>
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="footer">
    <FatFooter companyName="" pages={footerLinks} />
  </svelte:fragment>
</Shell>
