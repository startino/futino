<script lang="ts">
  import { fade, fly, slide } from "svelte/transition";
  import {
    quartIn,
    quartOut,
    elasticOut,
    backOut,
    bounceOut,
  } from "svelte/easing";
  import {
    Prose,
    Container,
    ContactForm,
    Card,
    Button,
    SelectMenu,
    Inview,
    fromLeft,
    fromRight,
  } from "lorc";
  import { inview } from "svelte-inview";
  const historyEvents = [
    { date: "08 / 1998", event: "Incorporation of Wonderlee in Hong Kong" },
    { date: "08 / 2000", event: "Incorporation of Wonderlee in Foshan" },
    { date: "10 / 2001 ", event: "Debut of first canopy door in China" },
    { date: "10 / 2001 ", event: "Accreditation of ISO 9001" },
    {
      date: "12 / 2004 ",
      event:
        "Relocated to larger facility to have door and parts manufacturing under one roof",
    },
    { date: "01 / 2007 ", event: "Debut WonderleeTM garage door series" },
    {
      date: "01 / 2008 ",
      event:
        "Inauguration of Foshan Sales Office to serve customers in South China area",
    },
    {
      date: "02 / 2009 ",
      event:
        "Open sales office in Tianjin to serve customers in Northern China",
    },
    {
      date: "05 / 2012 ",
      event: "Inauguration of Wonderlee shop at Kam Tin Road",
    },
    {
      date: "06 / 2012 ",
      event:
        "Dealership of Martin Door, the world's finest, safest garage doors",
    },
    { date: "04 / 2013 ", event: "Designed and built 160 gates for SHK, Riva" },
    {
      date: "09 / 2014 ",
      event: "Designed and installed first Renlita Door in Hong Kong",
    },
    { date: "10 / 2015  ", event: "Hong Kong Building and Hardware Expo" },
    { date: "05 / 2016 ", event: "Build4Asia Exhibition " },
  ];

  // Determines up to which events are shown
  let eventScrolled = 0;
  // Variable used to transition the timeline starting circle's class
  let circleOutroStart = false;

  let scrollY: number;
  let timelineYOffset = 0;
</script>

<svelte:window bind:scrollY />

<Prose>
  <section class="grid h-full min-h-screen place-items-center pt-24 gap-12">
    <Container>
      <img
        src="images/Crew_2021_clip.jpeg"
        alt=""
        class="object-center object-cover w-full"
      />
    </Container>
    <Container class="grid grid-cols-1 md:grid-cols-2 gap-x-12">
      <h1 class="display-small uppercase m-0 sm:m-0">About</h1>
      <Inview presetOptions={fromRight}>
        <p
          class="body-large m-0 sm:m-0 tracking-wide leading-relaxed md:leading-loose"
        >
          With a commitment to excellence since our establishment in 1998,
          Wonderlee has continually evolved to meet the needs of homeowners,
          businesses, and professionals in Hong Kong. Our passion for design,
          precision craftsmanship, and dedication to customer satisfaction have
          earned us a trusted reputation in the industry. We are prescribed as
          BD class 1 Minor Works contractor. <br /> Registration no.
          <b> MWC1628/2012 </b>.
        </p>
      </Inview>
    </Container>
    <Container class="grid grid-cols-1 md:grid-cols-2 gap-x-12">
      <h1 class="display-small py-2 uppercase m-0 sm:m-0">History</h1>
      <Inview presetOptions={fromRight}>
        <p
          class="body-large m-0 sm:m-0 tracking-wide leading-relaxed md:leading-loose"
        >
          Since 1998, Wonderlee has been a trusted name in gates and garage door
          solutions. With a passion for design and a commitment to excellence,
          we've evolved to create transformative solutions for homeowners,
          businesses, and professionals in Hong Kong and the UK. Our enduring
          legacy of quality and customer satisfaction has made Wonderlee a
          symbol of reliability and style in the industry. We're dedicated to
          shaping the future of property aesthetics and security.
        </p>
      </Inview>
    </Container>
    <Container class="grid grid-cols-2 overflow-no-scroll " padding="pt-24">
      <div
        use:inview={{ rootMargin: "-40%" }}
        on:inview_enter={() => {
          console.log("enter");
          timelineYOffset = scrollY;
        }}
        on:inview_leave={() => {
          console.log("leave");
        }}
        class="z-0 absolute w-1 h-full top-0 md:left-1/2 md:-translate-x-1/2 bg-white/70 overflow-hidden"
      >
        {#if timelineYOffset != 0}
          <div
            class="z-[2] absolute w-full h-full top-0 left-0 bg-tertiary transition-all ease-out duration-400 delay-0"
            style=" transform-origin: 50% 0% 0px; transform: translate3d(0px, 0px, 0px) scale(1, {(scrollY -
              timelineYOffset) /
              3600});"
          />
        {:else}
          <!--Circle to show starting point-->
          <div
            out:fly={{ y: 35, duration: 300 }}
            on:outrostart={() => {
              circleOutroStart = true;
            }}
            on:outroend={() => {
              circleOutroStart = false;
            }}
            class="absolute h-3 -left-1 -top-1 bg-white transition-all delay-0 {circleOutroStart
              ? 'w-1 rounded-none'
              : 'w-3 rounded-full'}"
            style="translate: none; rotate: none; scale: none; transform-origin: 50% 0% 0px; transform: translate3d(0px, 0px, 0px) scale(1,1)"
          />
        {/if}
      </div>
      {#each historyEvents as { date, event }, i}
        <Card
          class=" border-surface-on/40 {i % 2 != 0
            ? 'border- col-start-2'
            : 'text-right border- col-start-1'} relative"
          style="grid-row-start: {i + 1};"
          size="max-w-none w-full"
          padding="px-12 py-18"
          radius=""
        >
          <span
            use:inview={{ rootMargin: "-50%" }}
            on:inview_enter={() => {
              if (i > eventScrolled) {
                eventScrolled = i;
              }
            }}
            class="absolute flex items-center z-0 justify-center w-10 h-10 rounded-full transition-all duration-700 {i %
            2
              ? '-left-5'
              : '-right-5'} {i <= eventScrolled
              ? ' bg-surface-highlight'
              : ' bg-surface brightness-50'} "
          >
            <svg
              class="w-3 h-3 z-10 {i % 2
                ? 'text-surface-on'
                : 'text-surface-highlight-on'} bg-transparent"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
              />
            </svg>
          </span>
          {#if i <= eventScrolled}
            <h6
              transition:fly={{ x: i % 2 ? 25 : -25 }}
              class="text-tertiary m-0 sm:m-0"
            >
              {date}
            </h6>
            <h4 transition:fly={{ x: i % 2 ? 25 : -25 }} class="m-0 sm:m-0">
              {event}
            </h4>
          {:else}
            <h6 class="text-tertiary m-0 sm:m-0 invisible">
              {date}
            </h6>
            <h4 class="m-0 sm:m-0 invisible">
              {event}
            </h4>
          {/if}
        </Card>
      {/each}
    </Container>
  </section>

  <section class="grid place-items-center h-full pt-24" id="licenses">
    <Container
      class="grid grid-cols-1 md:grid-cols-4 place-items-center  gap-8 not-prose"
    >
      <Container class="col-span-1 md:col-span-2">
        <img
          src="/images/BD_Class-1-1.jpg"
          alt=""
          class="object-contain object-center w-fit h-full"
        />
      </Container>
      <Container class="md:col-span-2">
        <img
          src="/images/EMSD_REC.jpg"
          alt=""
          class="object-contain h-full w-full object-center max-h-96"
        />
      </Container>
      {#each Array(4) as _, i}
        <Container class="h-full w-full">
          <img
            src="/images/Patent-0{i + 1}.png"
            alt=""
            class="object-contain object-center w-full h-full max-h-96"
          />
        </Container>
      {/each}
    </Container>
  </section>
</Prose>
