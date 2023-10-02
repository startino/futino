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
  <section class="grid place-items-center">
    <Container class=" flex flex-row justify-around rounded-md my-12">
      {#each Object.entries(statistics) as [label, { finalValue, startValue, increment }]}
        <AnimatedCounter class="text-center p-4" {startValue} {increment}>
          <svelte:fragment slot="value">
            <h1 class="m-0 text-tertiary sm:m-0">{finalValue}</h1>
          </svelte:fragment>
          <svelte:fragment slot="label">
            <h4 class="m-0 sm:m-0 text-primary-on">{label}</h4>
          </svelte:fragment>
        </AnimatedCounter>
      {/each}
    </Container>
  </section>

  <section class="grid place-items-center">
    <Container class="flex flex-row justify-around w-full">
      {#each Array(3) as _, i}
        <div
          class="max-w-sm w-full h-[600px] bg-surface flex flex-col items-center mt-[{i *
            150}px] rounded-md"
        >
          <!-- mt-[150px] mt-[300px] -->
          <h3 class="text-surface-on text-center">Text Here</h3>
          <Button class="justify-self-end mt-auto">
            <h4 class="m-0 sm:m-0 text-background">Click me</h4>
          </Button>
        </div>
      {/each}
    </Container>
  </section>
</Prose>
