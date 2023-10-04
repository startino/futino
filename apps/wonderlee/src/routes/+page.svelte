<script lang="ts">
  import { text } from "@sveltejs/kit";
  import { Hero, Card, Prose, Button, Container, AnimatedCounter } from "lorc";
  import ServiceCard from "./ServiceCard.svelte";
  const CTAButtons = {
    "Our work": {
      href: "/",
      secondary: false,
    },
    "Contact us": {
      href: "/",
      secondary: true,
    },
  };
  const statistics = {
    "Custom gates built": {
      finalValue: 999,
      startValue: 0,
      increment: 10,
    },
    "Custom garages built": {
      finalValue: 999,
      startValue: 0,
      increment: 10,
    },
    "Years of Experience": {
      finalValue: 25,
      startValue: 0,
      increment: 10,
    },
  };

  const audiences = {
    Commercial: {
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      href: "/",
    },
    "Home Owners": {
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      href: "/",
    },
    Professionals: {
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      href: "/",
    },
  };

  const services = {
    Design: {
      href: "/design",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    Install: {
      href: "/instal",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    "DIY Repair": {
      href: "/diy-repair",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    Maintenance: {
      href: "/maintenance",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
  };
  const products = {
    "Garage Door": {
      href: "/garage-door",
      img: "/animations/sectional_garage.gif",
      types: "Canopy door, Sectional door, Canopy door",
    },
    "Residential Gate": {
      href: "/residential-gate",
      img: "/animations/canopy_garage.gif",
      types: "Folding gate, Slide gate, Swing gate",
    },
    "Commercial Doors": {
      href: "/commercial-door",
      img: "/animations/sectional_garage.gif",
      types: "Slide door, Swing door, Revolving door",
    },
    "Secret Doors": {
      href: "/secret-door",
      img: "/animations/sectional_garage.gif",
      types: "",
    },
  };
</script>

<Prose>
  <Hero
    {CTAButtons}
    title="Lorem ipsum, dolor sit amet consectetur adipisicing."
    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio mollitia excepturi laudantium nostrum sit!"
    justified="center"
    bgImg="/bg-landing"
  />
  <section class="grid place-items-center py-24">
    <Container class="grid grid-cols-3 w-full rounded-md " sizes="max-w-screen">
      {#each Object.entries(statistics) as [label, { finalValue, startValue, increment }], i}
        <AnimatedCounter
          class="text-center p-4 w-full"
          border={i == 1 ? "border-x border-surface-on/50" : ""}
          {startValue}
          {increment}
        >
          <svelte:fragment slot="value">
            <h1 class="m-0 text-tertiary sm:m-0">{finalValue}</h1>
          </svelte:fragment>
          <svelte:fragment slot="label">
            <h6 class="m-0 sm:m-0 text-primary-on font-light">{label}</h6>
          </svelte:fragment>
        </AnimatedCounter>
      {/each}
    </Container>
  </section>

  <section class="grid place-items-center py-24">
    <Container
      class="grid grid-cols-1 lg:grid-cols-3 gap-12"
      sizes="max-w-screen"
    >
      {#each Object.entries(audiences) as [title, { body, href }], i}
        <Card
          class="bg-surface/10 border border-surface-on/90 h-fit flex flex-col gap-4 items-center mt-[{i *
            75}px]"
        >
          <!-- mt-[75px] mt-[150px] -->
          <h2 class="text-surface-on text-center uppercase">
            {title}
          </h2>
          <p class="text-surface-on text-center">
            {body}
          </p>
          <Button class="bg-surface-highlight m-4" arrow={true}>
            <p class="m-0 sm:m-0 text-background">Read More</p>
          </Button>
        </Card>
      {/each}
    </Container>
  </section>

  <section class="grid place-items-center py-24">
    <Container
      class="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-5 place-items-center"
      sizes="max-w-none"
    >
      <ServiceCard label="design" body={services["Design"].body} />
      <img
        src="/pre_mockup_designs/garage_ref.png"
        alt=""
        class="h-full object-cover max-h-96 not-prose rounded-md"
      />
      <ServiceCard label="Install" body={services["Install"].body} />
      <img
        src="/pre_mockup_designs/garage_ref.png"
        alt=""
        class="h-full max-h-96 object-cover not-prose rounded-md"
      />
      <ServiceCard label="DIY Repair" body={services["DIY Repair"].body} />
      <img
        src="/pre_mockup_designs/garage_ref.png"
        alt=""
        class="w-full max-h-96 col-span-2 object-cover not-prose rounded-md"
      />
      <img
        src="/pre_mockup_designs/garage_ref.png"
        alt=""
        class="w-full max-h-96 col-span-3 object-cover not-prose rounded-md"
      />
      <ServiceCard label="Maintenance" body={services["Maintenance"].body} />
    </Container>
  </section>
  <section class="grid place-items-center py-24">
    {#each Object.entries(products) as [label, { href, img, types }], i}
      <Container
        border="border-y border-surface-on/50 flex"
        sizes="max-w-none w-full"
      >
        <div
          class="absolute top-1/2 -translate-y-1/2"
          style="left: {i * 164}px"
        >
          <img src={img} alt="" class="h-32 not-prose" />
        </div>
        <a href="/" class="mx-auto my-6 text-center">
          <h2 class="m-0 sm:m-0 uppercase text-surface-on">
            {label}
          </h2>
          <p class="m-0 sm:m-0 text-surface-on/70 font-light">
            {types}
          </p>
        </a>
      </Container>
    {/each}
  </section>
</Prose>
