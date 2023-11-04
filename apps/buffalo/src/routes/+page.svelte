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
  import SearchBox from "lorc/components/atoms/SearchBox.svelte";
  import FaqSection from "lorc/components/organisms/FAQSection.svelte";

  const aboutItems = [
    {
      title: "NO GI",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9172.jpg",
    },
    {
      title: "OUR METHOD",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud.",
      img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9286.jpg",
    },
    {
      title: "THE VISION",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud.",
      img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9288.jpg",
    },
  ];
</script>

<Prose>
  <Hero
    CTAButtons={{}}
    title="BUFFALO JIU-JITSU"
    subtitle=""
    justified="center"
    bgImg="/images/Screenshot.png"
    bgCover="bg-black/60"
    parallax={true}
  />

  <Section class="-translate-y-36 z-10 rounded-t-[50px] bg-background py-12">
    <Container
      class="text-center flex flex-col place-items-center gap-6"
      sizes="max-w-none"
    >
      <h2 class="" style="margin:0">OUR MISSION</h2>
      <p class="max-w-3xl" style="margin:0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div
        class="grid grid-cols-2 gap-4 md:gap-6 place-items-center w-fit pt-12"
      >
        <Button class="w-full" href="#classes">CLASS SCHEDULE</Button>
        <Button class="w-full" href="#classes">CONTACT US</Button>
      </div>
    </Container>
  </Section>
  <Section class="-translate-y-36 z-10 bg-background">
    <Container
      class="text-center w-full place-items-center grid grid-cols-1 md:grid-cols-2"
    >
      {#each aboutItems as { title, body, img }}
        <img src={img} alt="" class="object-cover object-center" />
        <div class="flex flex-col gap-6 max-w-2xl">
          <h2 class="" style="margin:0">{title}</h2>
          <p style="margin:0">{body}</p>
        </div>
      {/each}
    </Container>
  </Section>
</Prose>
