<script lang="ts">
  import {
    Prose,
    Container,
    ContactForm,
    Card,
    Button,
    SelectMenu,
  } from "lorc";

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
</script>

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
      <p
        class="body-large m-0 sm:m-0 tracking-wide leading-relaxed md:leading-loose"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
        consequuntur, esse ex deleniti repellat illo temporibus saepe est odit
        laboriosam ad non reprehenderit aut ullam commodi fugit, dolor iure
        dolores natus debitis facilis tempore.
      </p>
    </Container>
    <Container class="grid grid-cols-1 md:grid-cols-2 gap-x-12">
      <h1 class="display-small py-2 uppercase m-0 sm:m-0">History</h1>
      <p
        class="body-large m-0 sm:m-0 tracking-wide leading-relaxed md:leading-loose"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
        consequuntur, esse ex deleniti repellat illo temporibus.
      </p>
    </Container>
    <Container class="grid grid-cols-2" padding="pt-24">
      {#each historyEvents as { date, event }, i}
        <Card
          class="{i % 2 != 0
            ? 'border-l border-surface-on/40'
            : 'text-right mt-64'} relative"
          size="max-w-none w-full"
          padding="px-24 py-24"
          radius=""
        >
          <span
            class="absolute flex items-center z-20 justify-center w-10 h-10 rounded-full {i %
            2
              ? '-left-5 bg-surface'
              : '-right-5 bg-surface-highlight'} r"
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
          <p class="text-tertiary m-0 sm:m-0">{date}</p>
          <h3 class="m-0 sm:m-0">{event}</h3>
        </Card>
      {/each}
    </Container>
  </section>

  <section class="grid place-items-center h-full pt-24">
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
