<script lang="ts">
  import { Prose, Container } from "lorc";

  const services = {
    Design: {
      href: "/design",
      body: `Lorem ipsum dolor sit amet,  sed do eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    Install: {
      href: "/instal",
      body: `Lorem ipsum dolor sit amet, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    "DIY Repair": {
      href: "/diy-repair",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
    Maintenance: {
      href: "/maintenance",
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    },
  };
</script>

<Prose>
  <section class="grid place-items-center py-24">
    {#each Object.entries(services) as [label, { href, body }]}
      <Container />
    {/each}
  </section>
</Prose>
