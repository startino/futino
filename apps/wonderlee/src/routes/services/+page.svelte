<script lang="ts">
  import {
    Prose,
    Container,
    ContactForm,
    Card,
    Button,
    SelectMenu,
    Icon,
  } from "lorc";

  const services = {
    Safety: {
      href: "/",
      icon: "safety",
      body: "Safety is our number one concern and we are proud of our perfect safety record and the strict compliance to international safety standard.",
    },

    Design: {
      href: "/design",
      icon: "design",
      body: `Our design services are the foundation of remarkable gates and garage doors. Our expert designers collaborate closely with you to bring your vision to life, ensuring your property shines with exceptional aesthetics.`,
    },
    Install: {
      href: "/install",
      icon: "construction",
      body: `When it comes to installation, Wonderlee sets the standard. Our skilled technicians guarantee flawless installation, ensuring your gates and garage doors are durable and functional. We handle every detail for your peace of mind.`,
    },
    "DIY Repair": {
      href: "/diy-repair",
      icon: "repair",
      body: `Wonderlee offers DIY repair solutions for those who prefer hands-on approaches. We provide guidance, tools, and parts to help you efficiently address common repair issues, restoring your gates and garage doors.`,
    },
    Maintenance: {
      href: "/maintenance",
      icon: "maintenance",
      body: `At Wonderlee, our maintenance services ensure peace of mind. We provide 24-hour technical support via telephone. Under our maintenance contract, inspections and maintenance every 6 months by our experienced team.`,
    },
  };
</script>

<Prose>
  <section class="grid place-items-center pt-44">
    <Container class="grid place-items-center" sizes="max-w-none w-full">
      <h5 class="font-black leading-0 m-0 sm:m-0 text-center">
        Our <span
          class="text-7xl sm:text-9xl md:text-[10rem] uppercase text-tertiary m-0 sm:m-0"
          >Mission</span
        >
        is to <br />
        exceed customers expectations in
        <span class="text-tertiary">every single aspect</span>.
      </h5>
      <div
        class="grid grid-cols-1 md:grid-cols-5 gap-x-4 gap-y-4 place-items-center py-12"
      >
        {#each Object.entries(services) as [label, { href, body }]}
          <a
            {href}
            class="uppercase m-0 sm:m-0 whitespace-nowrap text-5xl md:text-2xl lg:text-4xl mx-auto text-surface-on underline tracking-tighter"
            >{label}.</a
          >
        {/each}
      </div>
    </Container>
    <section class="grid h-full min-h-screen place-items-center pt-44 gap-24">
      {#each Object.entries(services) as [label, { href, body, icon }]}
        <Container class="flex flex-col gap-6 rounded-3xl">
          <div class="flex flex-row place-items-center gap-12">
            <h1 class="display-small uppercase m-0 sm:m-0">
              {label}
            </h1>
            <Icon {icon} height="48" width="48" />
          </div>
          <p class=" m-0 sm:m-0">
            {body}
          </p>
        </Container>
      {/each}
    </section>
  </section></Prose
>
