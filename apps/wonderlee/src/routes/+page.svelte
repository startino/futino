<script lang="ts">
  import {
    Card,
    Prose,
    Button,
    Container,
    Counter,
    Inview,
    fromTop,
    fromLeft,
  } from "@repo/deprecated-lorc";
  import ServiceCard from "./ServiceCard.svelte";
  import projects from "./our-work/projects";
  import TestimonialCard from "./TestimonialCard.svelte";
  import faqs from "./faqs";
  import FAQSection from "$lib/organisms/FAQSection.svelte";
  import ModelAnimation from "./ModelAnimation.svelte";

  const CTAButtons = {
    "Our work": {
      href: "/our-work",
      highlight: true,
    },
    "Contact us": {
      href: "/contact",
      highlight: false,
    },
  };
  const statistics = {
    "Custom gates built": {
      finalValue: 100,
      startValue: 0,
      increment: 1,
      unit: "+",
    },
    "Custom garages built": {
      finalValue: 2000,
      startValue: 0,
      increment: 10,
      unit: "+",
    },
    "Years of Experience": {
      finalValue: 25,
      startValue: 0,
      increment: 1,
      unit: "+",
    },
  };

  const audiences = {
    Commercial: {
      body: `
Wonderlee caters to commercial needs with precision.
We specialize in high-quality gates, garage doors, and repair services. 
Whether you're a business owner, property manager, or organization seeking efficient garage solutions, 
we deliver to your needs.`,
      href: "/",
    },
    Residential: {
      body: `
Wonderlee transforms houses into homes. Our premium gates
and garage doors elevate aesthetics and security. Our expert team
blends personal style with functionality and durability, making your dream home a reality.
`,
      href: "/",
    },
    Professionals: {
      body: `
Wonderlee is the choice for architectural and design professionals. 
We collaborate closely to seamlessly integrate our products into your projects,
enhancing elegance and functionality with top craftsmanship standards.
`,
      href: "/",
    },
  };

  const services = {
    Design: {
      body: `Our design services are the foundation of remarkable gates and garage doors. Our expert designers collaborate closely with you to bring your vision to life, ensuring your property shines with exceptional aesthetics.`,
    },
    Install: {
      body: `When it comes to installation, Wonderlee sets the standard. Our skilled technicians guarantee flawless installation, ensuring your gates and garage doors are durable and functional. We handle every detail for your peace of mind.`,
    },
    "DIY Repair": {
      body: `Wonderlee offers DIY repair solutions for those who prefer hands-on approaches. We provide guidance, tools, and parts to help you efficiently address common repair issues, restoring your gates and garage doors.`,
    },
    Maintenance: {
      body: `At Wonderlee, our maintenance services ensure peace of mind. We provide 24-hour technical support via telephone. Under our maintenance contract, inspections and maintenance every 6 months by our experienced team.`,
    },
  };
  const products = {
    "Garage Door": {
      href: "/products#garage-doors",
      img: "/animations/sectional_garage.gif",
      types: "Canopy door, Sectional door, Canopy door",
    },
    "Residential Gate": {
      href: "/products/#residential-gates",
      img: "/animations/fold_gate_button.gif",
      types: "Folding gate, Slide gate, Swing gate",
    },
    "Commercial Doors": {
      href: "/products#commercial-doors",
      img: "/products/commercial-doors/re2.gif",
      types: "Slide door, Swing door, Revolving door",
    },
    "Secret Doors": {
      href: "/products#secret-doors",
      img: "/products/secret-doors/secret_door2.gif",
      types: "",
    },
  };

  const testimonials: {
    name: string;
    img: string;
    body: string;
    href: string;
  }[] = [
    {
      name: "Ron Tsang",
      img: "reviews/r.png",
      body: "Very quick response to fix gate after severe weather. So helpful in warranty covering period to come n change wheels when needed. Wonderlee is also good in recommending the right motor for our gate. Very good service.",
      href: "https://g.co/kgs/3hssko",
    },
    {
      name: "Jeff Chan",
      img: "reviews/jeff.png",
      body: "reviews/Wonderlee is very professional. They built 6 meters span garage door for me. The gate is so reliable which is weatherproof withstand signal 10 strong wind. Well done Wonderlee!",
      href: "https://g.co/kgs/ujkcJB",
    },
    {
      name: "Michael Bradwell",
      img: "reviews/michael.png",
      body: "Mr. Ken Mak, and his Team at Wondrelee are the best! The level of service and professionalism is unrivaled!! If you have garage door needs , I highly recommend Wonderlee.",
      href: "https://g.co/kgs/ax5DSf",
    },
    {
      name: "Jackie Yung",
      img: "reviews/jacky.png",
      body: "Ken and his team helped us design, fabricate and all in between about 6-7 years ago, they are always responsive and fast, an valuable trait as a door and gate specialist~",
      href: "https://g.co/kgs/afSDGc",
    },
    {
      name: "Gail Taylor",
      img: "reviews/gail.png",
      body: "I called this company due to the malfunction of my car gates, which were operated using electric arms via remote. The response was fast, the problem was identified, the repair was finished, all in good time.",
      href: "https://g.co/kgs/141qFt",
    },
    {
      name: "Peter Sanderson",
      img: "reviews/peter.png",
      body: "Positive: Professionalism, Responsive. This company fitted my electric gate arms. They are very responsive and always quick to help if there's a problem. I recommend this company.",
      href: "https://g.co/kgs/w9Wy16",
    },
  ];
</script>

<Prose>
  <ModelAnimation>
    <div
      class="flex flex-col w-screen z-40 text-center h-full items-center gap-12 mx-2 sm:mx-4 md:mx-6"
    >
      <div
        class="flex flex-col items-center gap-4
       "
      >
        <h1 class="" style="margin: 0px">
          Hong Kong's Leading Gate & Garage Firm.
        </h1>
        <h5 class="max-w-6xl" style="margin: 0px">
          Serving homeowners and business owners with premium services &
          products since 1998.
        </h5>
      </div>
      <div
        class="h-full w-fit grid grid-cols-{Object.entries(CTAButtons)
          .length} gap-4 md:gap-6 place-items-center w-fit"
      >
        {#each Object.entries(CTAButtons) as [label, { href, highlight }]}
          <Button variant="pill" class="w-full" {highlight} {href}>
            {label}
          </Button>
        {/each}
      </div>
    </div>
  </ModelAnimation>
  <section class="grid place-items-center -mt-[1500px] md:-mt-[1000px] pb-24">
    <Container class="grid grid-cols-3 w-full rounded-md " sizes="max-w-screen">
      {#each Object.entries(statistics) as [label, { finalValue, startValue, increment, unit }], i}
        <Container
          class="text-center p-4 w-full"
          radius=""
          border={i == 1 ? "md:border-x border-surface-on/50" : ""}
        >
          <Prose size="sm">
            <h1 class="m-0 text-tertiary sm:m-0 whitespace-nowrap">
              <Counter value={finalValue} step={increment} duration={1000} />
              {unit}
            </h1>
            <h6 class="m-0 sm:m-0 text-primary-on font-light">{label}</h6>
          </Prose>
        </Container>
      {/each}
    </Container>
  </section>

  <section class="grid place-items-center">
    <Container
      class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 2xl:gap-x-12 gap-y-6"
      sizes="max-w-none"
    >
      <h6
        class="uppercase text-tertiary col-span-full justify-self-start self-end"
      >
        audience
      </h6>
      {#each Object.entries(audiences) as [title, { body, href }], i}
        <Inview
          presetOptions={fromTop}
          fly={{ y: -50, x: 0 }}
          delay={i * 200}
          class="w-full h-fit"
        >
          <Card
            size="max-w-lg  w-full"
            border="border border-surface-on/90"
            padding="py-14 px-6"
            class="bg-surface/10 flex flex-col gap-6 items-center place-items-center text-center lg:mt-[{i *
              75}px]"
          >
            <!-- lg:mt-[75px] lg:mt-[150px] -->
            <h2 class="text-surface-on uppercase m-0 sm:m-0 font-black">
              {title}
            </h2>
            <p class="text-surface-on m-0 sm:m-0">
              {body}
            </p>
          </Card>
        </Inview>
      {/each}
    </Container>
  </section>

  <section class="grid place-items-center py-24" id="services">
    <Container
      class="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-6 place-items-center"
      sizes="max-w-none w-full"
    >
      <h6
        class="uppercase text-tertiary md:col-span-3 row-start-1 xl:col-span-6 place-self-end w-full -my-2"
      >
        Services
      </h6>

      <Inview
        class="w-full h-full row-start-2 col-span-1 md:col-span-2"
        delay={100}
      >
        <ServiceCard
          src="/images/Dragon_F.jpeg"
          class=""
          label="design"
          body={services["Design"].body}
        />
      </Inview>
      <Inview
        class="xl:col-span-2 col-span-1 w-full h-full hidden md:flex"
        delay={250}
      >
        <img
          src="/images/Dragon_F.jpeg"
          alt=""
          class="h-full w-full flex object-cover not-prose rounded-md"
        /></Inview
      >
      <Inview
        class="md:col-start-2 xl:col-span-2 xl:col-start-auto w-full h-full md:col-span-2"
        delay={400}
      >
        <ServiceCard
          src="/images/Sun_Hung_Kai_Riva_swing_gates.jpg"
          label="Install"
          body={services["Install"].body}
        /></Inview
      >
      <Inview
        class="md:row-start-2 xl:col-span-2 col-span-1 hidden md:flex  xl:row-start-auto md:col-start-3 xl:col-start-auto h-full w-full"
        delay={100}
      >
        <img
          src="/images/Sun_Hung_Kai_Riva_swing_gates.jpg"
          alt=""
          class="h-full flex object-cover not-prose rounded-md"
        />
      </Inview>
      <Inview class="md:col-span-2" delay={250}>
        <ServiceCard
          src="/images/146_Waterloo.jpg"
          label="DIY Repair"
          body={services["DIY Repair"].body}
        />
      </Inview>
      <Inview class="w-full h-full xl:col-span-2 hidden md:flex" delay={400}>
        <img
          src="/images/146_Waterloo.jpg"
          alt=""
          class="w-full h-full object-cover not-prose rounded-md"
        />
      </Inview>
      <Inview class="xl:col-span-3 w-full h-full hidden md:flex" delay={400}>
        <img
          src="/images/DB_Phase_17_B.jpg"
          alt=""
          class="w-full h-full object-cover not-prose rounded-md"
        /></Inview
      >
      <Inview
        class="xl:col-span-3 col-span-1 md:col-span-2 h-full w-full"
        delay={550}
      >
        <ServiceCard
          src="/images/DB_Phase_17_B.jpg"
          class=""
          label="Maintenance"
          body={services["Maintenance"].body}
        />
      </Inview>
    </Container>
  </section>

  <section class="grid place-items-center py-24">
    <Container sizes="max-w-none w-full" padding="">
      <h6
        class="uppercase text-tertiary col-span-full justify-self-start my-4 mx-4 md:mx-6"
      >
        Products
      </h6>

      {#each Object.entries(products) as [label, { href, img, types }], i}
        <Container
          {href}
          class="group hover:bg-surface/50 transition-all duration-300 items-center"
          border="border-y border-surface-on/50 flex"
          sizes="max-w-none w-full"
        >
          <Inview presetOptions={fromLeft} delay={i * 100}>
            <div class=" my-8 text-left flex flex-col gap-2">
              <h2
                class="m-0 sm:m-0 uppercase text-surface-on group-hover:pl-4 transition-[padding] duration-300"
              >
                {label}
              </h2>
              <p class="m-0 sm:m-0 text-surface-on/70 font-light">
                {types}
              </p>
            </div>
          </Inview>
          <Inview
            presetOptions={fromLeft}
            delay={400 + i * 100}
            class="ml-auto h-24 sm:h-28 md:h-32 my-4"
          >
            <img
              src={img}
              alt=""
              class=" ml-auto md:flex h-full aspect-[1.5] object-cover not-prose"
            />
          </Inview>
        </Container>
      {/each}
    </Container>
    <Button
      variant="pill"
      class="bg-surface-highlight m-4 my-12"
      tracking="down-arrow"
      href="/products"
    >
      <p class="m-0 sm:m-0 text-background">See all</p>
    </Button>
  </section>
  <section class="grid place-items-center py-24">
    <Container
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
      sizes="max-w-none"
    >
      <h6
        class="uppercase text-tertiary col-span-full justify-self-end m-0 sm:m-0"
      >
        Our Recent Work
      </h6>
      {#each Object.entries(projects) as [label, project], i}
        {#if i < 6}
          <Inview presetOptions={fromTop} class="h-full w-full">
            <Card class="flex flex-col group h-full" padding="px-0 py-2">
              <h6 class="m-0 sm:m-0 uppercase text-surface-on/70">
                {project.date}
              </h6>
              <img
                src={project.thumbnail}
                alt=""
                class="object-cover h-72 w-full not-prose md:brightness-95 group-hover: brightness-100"
              />
              <div class="flex flex-wrap gap-4">
                <h4 class="m-0 sm:m-0 pt-4 uppercase">
                  {project.name}
                </h4>
                <ul class="m-0 sm:m-0">
                  {#each project.description as item}
                    <li class="m-0 sm:m-0">
                      <p class="m-0 sm:m-0 prose-sm">
                        {item}
                      </p>
                    </li>
                  {/each}
                </ul>
              </div>
            </Card>
          </Inview>
        {/if}
      {/each}
      <Button
        variant="pill"
        href="/our-work"
        class="bg-surface-highlight m-4 my-12 col-span-full justify-self-center"
        tracking="down-arrow"
      >
        <p class="m-0 sm:m-0 text-background">See all</p>
      </Button>
    </Container>
  </section>

  <section class="grid place-items-center py-24" id="testimonials">
    <Container
      class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 place-items-center"
      padding="px-8"
      sizes="max-w-none"
    >
      <h6 class="uppercase text-tertiary col-span-full place-self-start -my-2">
        Testimonials
      </h6>
      {#each testimonials as { name, body, href, img }, i}
        <Inview presetOptions={fromLeft} delay={i * 150} class="w-full h-full">
          <TestimonialCard
            class="{i < 3 ? 'flex' : 'hidden'} sm:flex"
            {name}
            {body}
            {href}
            {img}
          />
        </Inview>
      {/each}
    </Container>
    <Button
      variant="pill"
      href="https://maps.app.goo.gl/QXdmpjRN1mX5RVgD7"
      target="_blank"
      class="bg-surface-highlight m-4 my-12 col-span-full justify-self-center"
      tracking="down-arrow"
    >
      <p class="m-0 sm:m-0 text-background">See more on Google</p>
    </Button>
  </section>

  <section class="grid place-items-center relative py-24" id="faq">
    <FAQSection {faqs} />
  </section>
  <section class="grid place-items-center relative">
    <img
      src="/Wonderlee-Crew.jpg"
      alt="crew"
      class="bg-no-repeat object-cover w-full h-full z-0 absolute"
    />
    <div class="bg-black/80 z-0 absolute h-full w-full" />

    <Container
      class="grid place-items-center gap-12"
      sizes="max-w-none w-full h-fit"
      margin="my-0"
      padding="py-32"
    >
      <h1
        class="text-center font-normal uppercase text-3xl sm:text-4xl md:text-4xl not-prose z-0"
      >
        Let's Get the Ball <br /><span
          class="text-tertiary text-7xl sm:text-9xl md:text-[10rem] font-bold"
          >Rolling
        </span>
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 place-items-center w-fit z-0"
      >
        <Button variant="pill" highlight={true} class="w-full" href="/contact"
          >Request Consultation</Button
        >
        <Button
          variant="pill"
          class="w-full"
          href="/about"
          tracking="down-arrow">Learn More</Button
        >
      </div></Container
    >
  </section>
</Prose>
