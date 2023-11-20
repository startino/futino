<script lang="ts">
  import "../app.postcss";
  import { Header, Shell, FatFooter, Prose, Icon } from "lorc";

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
      "T&C and Waiver": "/legal/t&c-and-waiver",
    },
  };

  const contactItems: { icon: string; label: string; href: string }[] = [
    {
      icon: "phone",
      label: "(+852) 9648 2270",
      href: "tel:(+852) 9648 2270",
    },
    {
      icon: "email",
      label: "info@buffalojiujitsu.hk",
      href: "mailto:info@buffalojiujitsu.hk",
    },
    {
      icon: "location",
      label: "1/F Buffalo Strength Gym, Mui Wo, Lantau Island, Hong Kong",
      href: "https://maps.app.goo.gl/EHDb9uehHdCc8PXj8",
    },
  ];

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
    <FatFooter companyName="" pages={footerLinks}>
      <svelte:fragment slot="left">
        <div class="flex flex-col gap-4">
          {#each contactItems as { icon, label, href }}
            <a
              class="flex flex-row gap-4 place-items-center"
              style="margin: 0px"
              {href}
            >
              <Icon width="24" height="24" {icon} />
              <h6 class="" style="margin:0">{label}</h6>
            </a>
          {/each}
        </div>
      </svelte:fragment>
    </FatFooter>
  </svelte:fragment>
</Shell>
