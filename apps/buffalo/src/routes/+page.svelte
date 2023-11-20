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
    ContactForm,
    Inview,
    Icon,
    Video,
  } from "lorc";
  import type { TransitionOptions } from "lorc";
  import {
    fromTopPreset,
    downFadePreset,
    fromLeftPreset,
    fromRightPreset,
  } from "$lib/transitionOptions.ts";
  import { socials } from "$lib/socials.ts";
  import Classes from "$lib/components/molecules/Classes.svelte";
  const aboutItems = [
    {
      title: "NO GI",
      body: "Hong Kong’s first and only exclusively no gi gym. Leave the pyjamas at home. Wear actual sports attire. Begin your no gi journey with us.",
      src: "/videos/slow_bjj.mp4",
      video: true,
    },
    {
      title: "OUR METHOD",
      body: "Our training is live. You can do it at your own pace. You will work with a partner to explore ideas and become skilful in small areas of the game first, then ‘join the dots’ to mature into a confident grappler.",
      src: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9286.jpg",
    },
    {
      title: "THE VISION",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doe. iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut. aliquip ex ea commodo consequat.",
      src: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9335.jpg",
    },
  ];

  let scrollY: number;

  let endCTAEnterHeight: number | undefined;
</script>

<svelte:window bind:scrollY />

<Prose size="lg" class="text-center">
  <Hero
    CTAButtons={{}}
    title="BUFFALO JIU-JITSU"
    subtitle=""
    justified="center"
    bgVideo={{
      md: "/videos/1280_high.webm",
      lg: "/videos/1280_high.webm",
    }}
    bgCover="bg-amber-800/60 brightness-[0.15]"
    parallax={true}
    inviewPresetOptions={downFadePreset}
  />

  <Section
    class="-translate-y-36 -mb-36 z-0 rounded-t-[25px] bg-background pt-16 pb-32"
    id="mission"
  >
    <Inview presetOptions={downFadePreset} delay={100}>
      <Container
        class="text-center flex flex-col place-items-center gap-6"
        sizes="max-w-none"
      >
        <h2 class="" style="margin:0">OUR MISSION</h2>
        <p class="max-w-3xl" style="margin:0">
          We provide an environment for grapplers to explore and develop their
          game with a friendly, competitive attitude. We help each other get
          sharper by providing challenges. We act as a team on and off the mats.
        </p>

        <div
          class="grid grid-cols-2 gap-4 md:gap-6 place-items-center w-fit pt-6"
        >
          <Button class="w-full" padding="px-4 md:px-8 py-4" href="#classes"
            >CLASS SCHEDULE</Button
          >
          <Button class="w-full" padding="px-4 md:px-8 py-4" href="/contact"
            >CONTACT US</Button
          >
        </div>
      </Container>
    </Inview>
  </Section>
  <Section class="bg-background py-20" id="about">
    <Container
      class="text-center md:text-left items-start flex flex-col md:grid md:grid-cols-2 md:place-items-center gap-x-12 gap-y-4 sm:gap-y-4 md:gap-y-16"
      sizes="max-w-7xl"
    >
      {#each aboutItems as { title, body, src, video }}
        <Inview presetOptions={fromLeftPreset} class="w-full h-full">
          <div
            class="w-full max-w-lg md:max-w-none mx-auto h-64 sm:h-96 flex place-items-center"
          >
            {#if video}
              <Video class="w-full h-full object-cover" {src} {title} />
            {:else}
              <img
                {src}
                alt=""
                class="not-prose w-full h-full aspect-video object-cover object-center"
              />
            {/if}
          </div>
        </Inview>
        <Inview presetOptions={fromRightPreset}>
          <div class="flex max-w-xl flex-col gap-4 mb-12 sm:mb-16 md:mb-0">
            <h2 class="" style="margin:0">{title}</h2>
            <p style="margin:0">{body}</p>
          </div>
        </Inview>
      {/each}
    </Container>
  </Section>

  <Section class="bg-background py-20 " id="classes">
    <Classes />
  </Section>

  <Section class="bg-background py-20 text-left" id="contact">
    <Container
      class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
      sizes="max-w-7xl w-full"
    >
      <Inview presetOptions={fromLeftPreset}>
        <div class="flex flex-col gap-8">
          <h2 class="" style="margin:0">
            GET IN TOUCH, <br /> YOU’LL BE GLAD YOU DID
          </h2>
          <p style="margin:0">
            You’ve had a look at the site. You’re clearly Jiu-Jitsu-curious.
            Whether you’re big, small, young, old, male, female, a beast or a
            nerd, we have a home for you here.
          </p>
          <p style="margin:0">
            info@buffalojiujitsu.hk <br /> (+852) 9648 2270 <br /> <br /> 1/F
            Buffalo Strength Gym <br /> Mui Wo, Lantau Island, Hong Kong
          </p>
          <div class="flex flex-row gap-4 text-primary not-prose">
            {#each socials as { href, icon }}
              <a {href} target="new" class="">
                <Icon {icon} height="32" width="32" />
              </a>
            {/each}
          </div>
        </div>
      </Inview>

      <Inview presetOptions={fromRightPreset}>
        <ContactForm />
      </Inview>
      <Inview class="w-full h-full md:col-span-2" presetOptions={fromTopPreset}>
        <img
          src="/images/buffalo_travel_times.jpg"
          alt="Travel times to Buffalo Jiu-Jitsu"
          class="object-contain not-prose md:col-span-2 max-w-7xl w-full rounded-sm"
        />
      </Inview>
    </Container>
  </Section>
  <Section
    useInview={true}
    onInviewEnter={() => {
      console.log(endCTAEnterHeight);
    }}
    bind:scrollEnterHeight={endCTAEnterHeight}
    class="py-64 overflow-hidden"
    id="end-cta"
  >
    <img
      src="/images/MJP_20230927_Mui_Wo_jiu-jitsu_9326.jpg"
      alt=""
      class="not-prose w-full h-full absolute object-cover -z-0 transition-transform duration-700"
      style={endCTAEnterHeight
        ? "transform: scale(" +
          (1.1 + (scrollY - endCTAEnterHeight) / 10000) +
          "); transition-timing-function: cubic-bezier(0,.5,.5,1); "
        : ""}
    />
    <div class="bg-black/60 w-full h-full absolute z-[5]" />

    <Container
      class="grid place-items-center gap-y-12 z-[7]"
      sizes="max-w-7xl w-full"
    >
      <Inview
        presetOptions={downFadePreset}
        class="w-full h-full z-[7] grid place-items-center"
      >
        <Container
          class="grid place-items-center mx-auto  gap-y-12 z-[7]"
          sizes="max-w-7xl w-full"
          margin=""
        >
          <h2 class="mx-auto" style="margin:0">WELCOME TO BUFFALO JIU-JITSU</h2>
          <div
            class="flex flex-col md:flex-row items-center justify-center mx-auto w-full"
          >
            <div
              class="rounded-full h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 border-4 -translate-x-12 md:translate-x-6 lg:translate-x-12 border-primary flex items-center justify-center"
            >
              <h4 class="" style="margin:0">PASSION</h4>
            </div>
            <div
              class="rounded-full h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 -mt-12 border-4 md:mt-0 border-primary flex items-center justify-center"
            >
              <h4 class="" style="margin:0">COMMUNITY</h4>
            </div>
            <div
              class="rounded-full h-44 w-44 md:h-64 md:w-64 lg:h-80 lg:w-80 -mt-12 border-4 translate-x-12 md:mt-0 md:-translate-x-6 lg:-translate-x-12 border-primary flex items-center justify-center"
            >
              <h4 class="" style="margin:0">AFFORDABILITY</h4>
            </div>
          </div>
          <div
            class="grid grid-cols-2 gap-4 md:gap-6 place-items-center w-full max-w-lg pt-12"
          >
            <Button class="w-full " href="/contact">CONTACT US</Button>
            <Button class="w-full" href="/about">LEARN MORE</Button>
          </div>
        </Container>
      </Inview>
    </Container>
  </Section>
</Prose>
