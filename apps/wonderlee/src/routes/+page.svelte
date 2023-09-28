<script lang="ts">
  import { Hero, Prose, Button, Container, AnimatedCounter } from "lorc";

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
    "Gates made": {
      finalValue: 999,
      startValue: 0,
      increment: 10,
    },
    "Garages made": {
      finalValue: 999,
      startValue: 0,
      increment: 10,
    },
    "Creating since": {
      finalValue: 1998,
      startValue: 2023,
      increment: 1,
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
  <section class="grid place-items-center bg-secondary-container">
    <Container
      class="bg-tertiary-container w-full flex flex-row justify-around rounded-sm my-12"
    >
      {#each Object.entries(statistics) as [label, { finalValue, startValue, increment }]}
        <AnimatedCounter class="text-center p-4" {startValue} {increment}>
          <svelte:fragment slot="value">
            <h1 class="m-0 text-tertiary sm:m-0">{finalValue}</h1>
          </svelte:fragment>
          <svelte:fragment slot="label">
            <h4 class="m-0 sm:m-0 text-tertiary-container-on">{label}</h4>
          </svelte:fragment>
        </AnimatedCounter>
      {/each}
    </Container>
  </section>
</Prose>
