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
      finalValue: 1998,
      startValue: 2023,
      increment: 1,
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
</script>

<Prose>
  <Hero
    {CTAButtons}
    title="Lorem ipsum, dolor sit amet consectetur adipisicing."
    subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio mollitia excepturi laudantium nostrum sit!"
    justified="center"
    bgImg="bg-landing"
  />
  <section class="grid place-items-center">
    <Container class="grid grid-cols-3 w-full rounded-md py-32">
      {#each Object.entries(statistics) as [label, { finalValue, startValue, increment }], i}
        <AnimatedCounter
          class="text-center p-4 w-full"
          border={i == 1 ? "border-x border-primary" : ""}
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

  <section class="grid place-items-center">
    <Container
      class="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-around w-full"
      sizes="max-w-screen"
    >
      {#each Object.entries(audiences) as [title, { body, href }], i}
        <Card
          class="bg-surface h-fit flex flex-col gap-4 items-center mt-[{i *
            75}px]"
        >
          <!-- mt-[75px] mt-[150px] -->
          <h2 class="text-surface-on text-center">{title}</h2>
          <p class="text-surface-on text-center">
            {body}
          </p>
          <Button class="bg-surface-highlight my-4">
            <h4 class="m-0 sm:m-0 text-background">Read More</h4>
          </Button>
        </Card>
      {/each}
    </Container>
  </section>
</Prose>
