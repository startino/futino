<script lang="ts">
  import "../app.postcss";
  import { Header, Shell, Footer } from "lorc";

  const headerElements: { name: string; href: string }[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
    {
      name: "Pricing",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];

  const footerElements: { name: string; href: string }[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
  ];

  const fatFooterElements = {
    Explore: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "About",
        href: "/",
      },
      {
        name: "Pricing",
        href: "/",
      },
    ],
    Legal: [
      {
        name: "Privacy Policy",
        href: "/",
      },
      {
        name: "Terms of Service",
        href: "/",
      },
      {
        name: "Company",
        href: "/",
      },
    ],
    Support: [
      {
        name: "Docs",
        href: "/",
      },
      {
        name: "Status",
        href: "/",
      },
      {
        name: "Skills",
        href: "/",
      },
      {
        name: "FAQs",
        href: "/",
      },
    ],
    Company: [
      {
        name: "Blog",
        href: "/",
      },
      {
        name: "Status",
        href: "/",
      },
      {
        name: "Careers",
        href: "/",
      },
      {
        name: "FAQs",
        href: "/",
      },
    ],
  };
</script>

<Shell
  class="card h-full p-1"
  slotSidebarLeft="grid grid-cols-1"
  slotSidebarRight="grid grid-cols-1"
  slotPageContent="grid grid-cols-1"
>
  <svelte:fragment slot="header">
    <Header
      pages={headerElements}
      centerHeader={true}
      companyName="Futino Web-template"
    />
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="footer">
    <Footer
      pages={fatFooterElements}
      fatFooter={true}
      companyName="Futino Web-template"
    />
  </svelte:fragment>
</Shell>
