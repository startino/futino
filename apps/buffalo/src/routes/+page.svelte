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
  } from "lorc";

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
</script>

<Prose size="lg" class="text-center">
  <Hero
    CTAButtons={{}}
    title="BUFFALO JIU-JITSU"
    subtitle=""
    justified="center"
    bgImg="/images/Screenshot.png"
    bgCover="bg-black/60"
    parallax={true}
  />

  <Section
    class="-translate-y-36 -mb-36 z-0 rounded-t-[25px] bg-background pt-12 pb-32"
  >
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
        class="grid grid-cols-2 gap-4 md:gap-6 place-items-center w-fit pt-6"
      >
        <Button class="w-full " href="#classes">CLASS SCHEDULE</Button>
        <Button class="w-full" href="#classes">CONTACT US</Button>
      </div>
    </Container>
  </Section>
  <Section class="bg-background py-12">
    <Container
      class="text-center md:text-left items-start flex flex-col md:grid md:grid-cols-2 md:place-items-center gap-x-12 gap-y-4 sm:gap-y-4 md:gap-y-12"
      sizes="max-w-7xl"
    >
      {#each aboutItems as { title, body, img }}
        <div
          class="w-full max-w-lg md:max-w-none mx-auto h-64 sm:h-96 flex place-items-center"
        >
          <img
            src={img}
            alt=""
            class="not-prose w-full h-full aspect-video object-cover object-center"
          />
        </div>
        <div class="flex max-w-xl flex-col gap-4 mb-12 sm:mb-16 md:mb-0">
          <h2 class="" style="margin:0">{title}</h2>
          <p style="margin:0">{body}</p>
        </div>
      {/each}
    </Container>
  </Section>

  <Section class="bg-background py-24 ">
    <Container
      class="grid grid-cols-1 md:grid-cols-2 gap-y-12 items-center "
      sizes="max-w-7xl w-fit"
    >
      <Card class="flex flex-col gap-6 items-center w-full justify-self-end">
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
      <Card
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
    </Container>
  </Section>

  <Section class="bg-background py-24 text-left">
    <Container
      class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
      sizes="max-w-7xl w-full"
    >
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
          info@buffalojiujitsu.hk(+852) 9648 2270 1/F Buffalo Strength GymMui
          Wo, Lantau Island, Hong Kong
        </p>
      </div>
      <ContactForm />
      <img
        src="/images/buffalo_travel_times.jpg"
        alt="Travel times to Buffalo Jiu-Jitsu"
        class="object-contain md:col-span-2 max-w-7xl w-full rounded-sm"
      />
    </Container>
  </Section>
  <Section class="bg-background py-24 pb-96 -mb-32 text-left">
    <Container
      class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-start"
      sizes="max-w-7xl w-full"
    >
      <img
        src="/images/MJP_20230927_Mui_Wo_jiu-jitsu_9326.jpg"
        alt=""
        class="w-full h-full object-cover"
      />
    </Container>
  </Section>
</Prose>
