<script lang="ts">
  import { text } from "@sveltejs/kit";
  import {
    Hero,
    Card,
    Prose,
    Section,
    Button,
    Container,
    AnimatedCounter,
  } from "lorc";
  import FaqSection from "lorc/components/organisms/FAQSection.svelte";
  const HeroCTA = {
    "Our work": {
      href: "/",
      highlight: true,
    },
    "Contact us": {
      href: "/",
      highlight: false,
    },
  };
</script>

<Prose>
  <Hero
    CTAButtons={{}}
    title="BUFFALO JIU-JITSU"
    subtitle=""
    justified="center"
    bgImg="bg-landing"
  />

  <Section class="-translate-y-36">
    <div
      class="text-center mx-auto w-full place-items-center rounded-[50px] bg-background flex flex-col"
    >
      <h2 class="">OUR MISSION</h2>
      <p class="max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </Section>
</Prose>
