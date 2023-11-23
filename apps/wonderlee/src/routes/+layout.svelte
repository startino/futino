<script lang="ts">
  import "../app.postcss";
  import { Header, Shell, FatFooter, Prose } from "lorc";
  import { onMount } from "svelte";
  import { genLorc } from "./theme.ts";

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
      Testimonials: "/#testimonials",
    },
    Support: {
      About: "/about",
      Contact: "/contact",
      FAQ: "/#faq",
    },
    Legal: {
      "Privacy Policy": "/legal/privacy",
      "Terms of Service": "/legal/terms",
      Licenses: "/about#licenses",
    },
  };

  const CTAButtons: {
    [label: string]: { href: string; highlight: boolean };
  } = {
    "Contact us": { href: "/contact", highlight: false },
  };

  let ls: any = null;
  let foo = `Cannot read "foo".`;

  const read = () => !!ls && ls.getItem(`foo`);

  const update = () => {
    !!ls && ls.setItem(`foo`, `bar`);
    foo = read();
  };

  onMount(() => {
    typeof localStorage !== `undefined` && (ls = localStorage);
    foo = read();
    let lorcConfig = genLorc();
    for (let component in lorcConfig) {
      let componentConfig = lorcConfig[component as keyof typeof lorcConfig];
      localStorage.setItem(component, JSON.stringify(componentConfig));
    }
  });
</script>

<Shell class="bg-background">
  <svelte:fragment slot="header">
    <Prose>
      <Header
        buttonVariant="pill"
        companyName=""
        pages={headerLinks}
        {CTAButtons}
      />
    </Prose>
  </svelte:fragment>

  <slot />

  <svelte:fragment slot="footer">
    <FatFooter companyName="" pages={footerLinks} />
  </svelte:fragment>
</Shell>
