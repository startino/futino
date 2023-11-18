<script lang="ts">
  import "../app.postcss";
  import { Header, Shell, FatFooter, Prose } from "lorc";

  const headerLinks: { [key: string]: string } = {
    "ADULT CLASSES": "/#adult-classes",
    "YOUTH CLASSES": "/#youth-classes",
    ABOUT: "/about",
    CONTACT: "/contact",
  };
  const footerLinks: { [key: string]: { [key: string]: string } } = {
    Explore: {
      Home: "/",
      Testimonials: "/",
      Classes: "/#classes",
    },
    Support: {
      About: "/",
      "Find Us": "/",
      Contact: "/",
      FAQ: "/",
    },
    Legal: {
      "Privacy Policy": "/legal/privacy",
      "Terms & Conditions": "/legal/terms",
      "Participation Waiver": "/legal/waiver",
    },
  };

  const CTAButtons: {
    [label: string]: { href: string; highlight: boolean };
  } = {
    "Contact us": { href: "/", highlight: false },
  };
</script>

<Shell class="bg-background ">
  <svelte:fragment slot="header">
    <Prose>
      <Header
        companyName=""
        variant="pill"
        bgBig="bg-surface-on"
        bgSmall="bg-surface-on"
        typography="text-background text-base"
        logoPos="center"
        pages={headerLinks}
      />
    </Prose>
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="footer">
    <FatFooter companyName="" pages={footerLinks} />
  </svelte:fragment>
</Shell>
