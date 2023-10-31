<script lang="ts">
  import Header from "$lib/components/organisms/Header.svelte";
  import Footer from "$lib/components/organisms/Footer.svelte";
  import Button from "$lib/components/atoms/Button.svelte";
  import ContactForm from "$lib/components/organisms/ContactForm.svelte";
  import Particles from "svelte-particles";
  import { loadSlim } from "tsparticles-slim";
  import type { Engine } from "tsparticles-engine";
  import { particlesConfig } from "../particlesConfig";

  const FAQs = [
    {
      index: 0,
      question: "What is the best time of year to climb Kilimanjaro?",
      answer:
        "The best time to climb Kilimanjaro is during the dry season, which runs from June to October and January to March. However, it is possible to climb at other times of the year as well.",
    },
  ];
  let onParticlesLoaded = (event: any) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let particlesInit = async (engine: Engine) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  };
</script>

<main>
  <!--Hero-->
  <section
    id="hero"
    class="grow py-32 sm:py-34 h-screen md:py-44 px-4 sm:px-6 md:px-8 grid justify-items-center bg-[url('/glow_bg_7.png')] bg-no-repeat bg-fit bg-top"
  >
    <div
      class="pointer-events-none bg-gradient-to-b to-black/30 from-black/50 from-90% w-full h-full absolute z-10"
    />
    <Particles
      id="tsparticles"
      class="w-full h-full absolute z-0"
      options={particlesConfig}
      on:particlesLoaded={onParticlesLoaded}
      {particlesInit}
    />
    <div
      class="grid justify-items-center space-y-12 h-fit w-full mx-auto self-center z-20"
    >
      <div class="w-fit">
        <h1 class="display-large">Let's Talk Growth</h1>
      </div>

      <div class="w-fit">
        <h3 class="title-small md:headline-small">
          No automated calls. Person-to-person, with you in mind.
        </h3>
      </div>

      <div class="grid grid-cols-2 gap-x-4">
        <Button class="" href="/booking">
          <p class="px-3 sm:px-5 md:px-6 title-medium">Book a Call</p>
        </Button>

        <Button class="" href="#contact-form" secondary={true}>
          <p class="px-3 sm:px-5 md:px-6 title-medium">Send a Message</p>
        </Button>
      </div>
    </div>
  </section>

  <section
    id="contact-form"
    class=" bg-gradient-to-b from-black/30 to-30% to-transparent"
  >
    <!--Contact Section-->
    <div
      class="grid grid-cols-1 md:grid-cols-2 inner-section text-center md:text-left gap-6 items-center justify-items-center"
    >
      <div
        class=" flex flex-col border-1 border-primary drop-shadow-glow-sm rounded-xl bg-surface py-10 px-10 space-y-4 max-w-xl self-start"
      >
        <h3 class="font-extrabold headline-large">Get in touch.</h3>
        <h4 class="title-medium my-auto max-w-md">
          Need help or have ideas to discuss? Reach out to us! We're ready for
          your questions, and to understand your needs. Let's get this website
          up and going shall we?
        </h4>
      </div>
      <div class="flex flex-col w-full">
        <ContactForm />
      </div>
    </div>
  </section>
</main>
