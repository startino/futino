<script lang="ts">
  import { Hero, Card, Prose, Button, Container, AnimatedCounter } from "lorc";

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
    },
    Install: {
      href: "/instal",
    },
    "DIY Repair": {
      href: "/diy-repair",
    },
    Maintenance: {
      href: "/maintenance",
    },
  };
  const products = {
    "Garage Door": {
      href: "/garage-door",
      img: "/pre_mockup_designs/garage_ref.png",
      types: "Canopy door, Sectional door, Canopy door",
    },
    "Residential Gate": {
      href: "/residential-gate",
      img: "/pre_mockup_designs/garage_ref.png",
      types: "Folding gate, Slide gate, Swing gate",
    },
    "Commercial Doors": {
      href: "/commercial-door",
      img: "/pre_mockup_designs/garage_ref.png",
      types: "Slide door, Swing door, Revolving door",
    },
  };
</script>

<Prose>
  <Hero
    {CTAButtons}
    title="Lorem ipsum, dolor sit amet consectetur adipisicing."
    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio mollitia excepturi laudantium nostrum sit!"
    justified="center"
    bgImg="bg-landing"
  />
  <section class="grid place-items-center py-24">
    <Container class="grid grid-cols-3 w-full rounded-md " sizes="max-w-screen">
      {#each Object.entries(statistics) as [label, { finalValue, startValue, increment }], i}
        <AnimatedCounter
          class="text-center p-4 w-full"
          border={i == 1 ? "border-x border-surface-on/20" : ""}
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
          class="bg-surface/30 h-fit flex flex-col gap-4 items-center mt-[{i *
            75}px]"
        >
          <!-- mt-[75px] mt-[150px] -->
          <h2 class="text-surface-on text-center">{title}</h2>
          <p class="text-surface-on text-center">
            {body}
          </p>
          <Button class="bg-surface-highlight my-4">
            <p class="m-0 sm:m-0 text-background">Read More</p>
          </Button>
        </Card>
      {/each}
    </Container>
  </section>

  <section class="grid place-items-center py-24">
    <Container
      border="border-y border-surface-on flex"
      sizes="max-w-none w-full"
    >
      <a href="/services" class="mx-auto my-24">
        <h1 class="m-0 sm:m-0">Services</h1>
      </a>
    </Container>
    {#each Object.entries(services) as [label, { href }]}
      <Container
        border="border-y border-surface-on flex"
        sizes="max-w-none w-full"
      >
        <a href="/services" class="mx-auto my-8 text-center">
          <h2 class="m-0 sm:m-0">
            {label}
          </h2>
          <p class="m-0 sm:m-0">Lorem ipsum tandum meyos</p>
        </a>
      </Container>
    {/each}
  </section>

  <section class="grid place-items-center gap-12 py-24">
    {#each Object.entries(products) as [label, { href, img, types }]}
      <Container
        class="flex flex-col sm:flex-row gap-8 items-center justify-between w-full"
        margin="mx-0"
        border="sm:border-l-4 border-primary "
        radius="rounded-none"
        size="max-w-7xl"
      >
        <a {href} class="flex flex-col gap-2 text-center sm:text-left">
          <h2 class="m-0 sm:m-0">{label}</h2>
          <p class="m-0 sm:m-0">
            {types}
          </p>
        </a>
        <img
          src={img}
          alt="garage door"
          class="object-cover order-first sm:order-last object-center h-44 w-96 m-0 sm:m-0"
        />
      </Container>
    {/each}
  </section>
</Prose>
