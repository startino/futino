<script lang="ts">
  import "../app.postcss";
  import { Header, Shell, FatFooter } from "lorc";

  const headerLinks: { [key: string]: string } = {
    Home: "/",
    "Our work": "/our-work",
    Contact: "/contact",
    Services: "/#services",
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
      FAQ: "/about#faq",
    },
    Legal: {
      "Privacy Policy": "/legal/privacy",
      "Terms of Service": "/legal/terms",
      Licenses: "/legal/licenses",
    },
  };
</script>

<Shell class="bg-background">
  <svelte:fragment slot="header">
    <Header companyName="" pages={headerLinks} />
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="footer">
    <FatFooter companyName="" pages={footerLinks} />
  </svelte:fragment>
</Shell>
