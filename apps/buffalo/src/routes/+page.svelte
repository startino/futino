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
  } from "lorc";
  import type { TransitionOptions } from "lorc";

  const socials = [
    {
      href: "https://www.instagram.com/buffalojiujitsu/",
      icon: "instagram",
    },
    {
      href: "http://www.facebook.com/buffalojiujitsu",
      icon: "facebook",
    },
    {
      href: "mailto:info@buffalojiujitsu.hk",
      icon: "email",
    },
  ];

  const aboutItems = [
    {
      title: "NO GI",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      img: "/images/relaxed_bjj.gif",
    },
    {
      title: "OUR METHOD",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud.",
      img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9286.jpg",
    },
    {
      title: "THE VISION",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud.",
      img: "/images/MJP_20230927_Mui_Wo_jiu-jitsu_9335.jpg",
    },
  ];

  const prices = [
    {
      label: "GUEST TRIAL",
      price: "FREE",
    },
    {
      label: "MONTHLY",
      price: "$750",
    },
    {
      label: "DAY PASS",
      price: "$150",
    },
  ];

  const classTimes = [
    { day: "MON", time: "7:45PM" },
    {
      day: "WED",
      time: "7:45PM",
    },
    {
      day: "THURS",
      time: "7:45PM",
    },
  ];
  const downFadePreset: TransitionOptions = {
    delay: 75,
    duration: 400,
    once: false,
    threshold: 0.2,
    fly: {
      x: 0,
      y: 25,
    },
  };
  const fromTopPreset: TransitionOptions = {
    delay: 75,
    duration: 400,
    once: false,
    threshold: 0.2,
    fly: {
      x: 0,
      y: -25,
    },
  };

  const fromLeftPreset: TransitionOptions = {
    delay: 100,
    duration: 500,
    once: false,
    fly: {
      x: -25,
      y: 0,
    },
  };
  const fromRightPreset: TransitionOptions = {
    delay: 100,
    duration: 500,
    once: false,
    fly: {
      x: 25,
      y: 0,
    },
  };
</script>

<Prose size="lg" class="text-center">
  <Hero
    CTAButtons={{}}
    title="BUFFALO JIU-JITSU"
    subtitle=""
    justified="center"
    bgVideo={{ md: "/videos/1280_high.mp4", lg: "/videos/1920_high.mp4 1.5x" }}
    bgCover="bg-amber-800/60 brightness-[0.1]"
    parallax={true}
    inviewPresetOptions={downFadePreset}
  />

  <Section
    class="-translate-y-36 -mb-36 z-0 rounded-t-[25px] bg-background pt-12 pb-32"
  >
    <Inview presetOptions={downFadePreset} delay={100}>
      <Container
        class="text-center flex flex-col place-items-center gap-6"
        sizes="max-w-none"
      >
        <h2 class="" style="margin:0">OUR MISSION</h2>
        <p class="max-w-3xl" style="margin:0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
  <Section class="bg-background py-18">
    <Container
      class="text-center md:text-left items-start flex flex-col md:grid md:grid-cols-2 md:place-items-center gap-x-12 gap-y-4 sm:gap-y-4 md:gap-y-12"
      sizes="max-w-7xl"
    >
      {#each aboutItems as { title, body, img }}
        <Inview presetOptions={fromLeftPreset} class="w-full h-full">
          <div
            class="w-full max-w-lg md:max-w-none mx-auto h-64 sm:h-96 flex place-items-center"
          >
            <img
              src={img}
              alt=""
              class="not-prose w-full h-full aspect-video object-cover object-center"
            />
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

  <Section class="bg-background py-18 " id="classes">
    <Container
      class="grid grid-cols-1 md:grid-cols-2 gap-y-12 items-center "
      sizes="max-w-7xl w-fit"
    >
      <Inview presetOptions={fromTopPreset} class="w-full h-full">
        <Card
          id="adult-classes"
          class="flex flex-col gap-6 items-center w-full justify-self-end"
        >
          <h1 class="" style="margin:0">ADULT CLASSES</h1>
          <img
            class="not-prose object-cover object-center aspect-[3/4] w-full"
            src="/images/MJP_20230927_Mui_Wo_jiu-jitsu_9342.jpg"
            alt="Adult classes"
          />
          <Prose size="sm" class="w-full">
            <div class="grid grid-cols-2 gap-y-2 w-full">
              {#each prices as { price, label }}
                <h4 class="text-left justify-self-start" style="margin:0">
                  {price}
                </h4>
                <h4
                  class="text-right whitespace-nowrap justify-self-end"
                  style="margin:0"
                >
                  {label}
                </h4>
              {/each}
              <div class="pt-4 col-span-2" />
              {#each classTimes as { day, time }}
                <h4 class="text-left justify-self-start" style="margin:0">
                  {day}
                </h4>
                <h4
                  class="text-right whitespace-nowrap justify-self-end"
                  style="margin:0"
                >
                  {time}
                </h4>
              {/each}
              <div class="pt-6 col-span-2" />
              <Prose size="lg" class="w-full col-span-2 self-end">
                <Button class="col-span-2 w-full">REGISTER</Button>
              </Prose>
            </div>
          </Prose>
        </Card>
      </Inview>
      <Inview presetOptions={fromTopPreset} class="w-full h-full">
        <Card
          id="youth-classes"
          class="flex flex-col gap-6 items-center w-full h-full justify-self-start"
        >
          <h1 class="" style="margin:0">YOUTH CLASSES</h1>
          <img
            class="not-prose object-cover object-center aspect-[3/4] w-full"
            src="/images/MJP_20230927_Mui_Wo_jiu-jitsu_9376.jpg"
            alt="Adult classes"
          />
          <Prose size="sm" class="w-full my-auto">
            <h3 class="">COMING SOON!</h3>
            <h4>SIGN UP IF INTERESTED!</h4>
          </Prose>
          <Button class="col-span-2 w-full place-self-end mt-auto"
            >REGISTER</Button
          >
        </Card>
      </Inview>
    </Container>
  </Section>

  <Section class="bg-background py-18 text-left">
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
  <Section class="py-64">
    <img
      src="/images/MJP_20230927_Mui_Wo_jiu-jitsu_9326.jpg"
      alt=""
      class="not-prose w-full h-full absolute object-cover -z-0"
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
