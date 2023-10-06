<script lang="ts">
  import { Prose, Container, ContactForm, Card, Button } from "lorc";
</script>

<Prose>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 place-items-center min-h-screen gap-0"
  >
    <Container class="flex flex-col" sizes="max-w-3xl w-full">
      <Card class="text-left" size="max-w-none w-full" padding="">
        <h1 class="uppercase">Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Card>
      <ContactForm />
    </Container>
    <Container
      sizes="max-w-3xl w-full"
      margin="mr-auto"
      class="flex flex-col justify-items-center divide-y divide-surface-on/40"
    >
      <div class=" py-12">
        <p class="uppercase text-tertiary m-0 sm:m-0">Email</p>
        <h3 class="m-0 sm:m-0">Sales@wonderlee.hk</h3>
      </div>
      <div class=" py-12">
        <p class="uppercase text-tertiary m-0 sm:m-0">Phone</p>
        <h3 class="m-0 sm:m-0">6931 0020</h3>
      </div>
      <div class=" py-12">
        <p class="uppercase text-tertiary m-0 sm:m-0">Address</p>
        <h3 class="m-0 sm:m-0 pb-3">
          1402 Hip Kwan Commercial Building <br /> 38 Pitt Street, Yaumatei, Kowloon
        </h3>
        <Button href="#map-iframe" arrow={true}>Google Maps</Button>
      </div>
    </Container>
  </section>

  <section class="grid place-items-center py-24">
    <Container class="flex flex-col place-items-center">
      <h1 class="uppercase m-0 sm:m-0">Find us on Google Maps</h1>
      <iframe
        title="map-iframe"
        id="map-iframe"
        class="w-full sm:w-2/3 md:w-1/2 aspect-1 my-12"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=114.16559815406801,22.310626852209406,114.17381644248964,22.31660197656347&amp;layer=mapnik&amp;marker=22.31361444635304,114.16970729827881"
        style="border: 1px solid black"
      />
    </Container>
  </section>
</Prose>
