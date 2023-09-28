<script lang="ts">
  import { Hero, Prose, Button, Container, AnimatedCounter } from "lorc";

  const heroBg = "/pre_mockup_designs/garage_ref.png";

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
    bgImg={heroBg}
  />
  <section>
    <Container
      class="bg-primary-container flex flex-row  justify-around mx-auto rounded-md"
    >
      {#each Object.entries(statistics) as [label, { finalValue, startValue, increment }]}
        <AnimatedCounter class="text-center p-4" {startValue} {increment}>
          <svelte:fragment slot="value">
            <h1 class="m-0 sm:m-0">{finalValue}</h1>
          </svelte:fragment>
          <svelte:fragment slot="label">
            <h4 class="m-0 sm:m-0">{label}</h4>
          </svelte:fragment>
        </AnimatedCounter>
      {/each}
    </Container>
  </section>
</Prose>
