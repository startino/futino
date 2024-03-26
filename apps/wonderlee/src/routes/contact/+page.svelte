<script lang="ts">
  import {
    Prose,
    Container,
    ContactForm,
    Card,
    Button,
    Inview,
    fromRight,
  } from "@repo/deprecated-lorc";
</script>

<Prose>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 place-items-center pt-44 min-h-screen gap-0"
  >
    <Container class="flex flex-col gap-12" sizes="max-w-3xl w-full">
      <Card
        class="text-left flex flex-col gap-6"
        size="max-w-none w-full"
        padding=""
      >
        <h1 class="uppercase m-0 sm:m-0">Contact Us</h1>
        <p class="m-0 sm:m-0">
          We're here to assist you with all your gates and garage door needs.
          Feel free to reach out to us anytime for inquiries, consultations, or
          to schedule services. Our team is ready to provide you with the
          highest level of support and expertise.
        </p>
      </Card>
      <ContactForm buttonVariant="pill" />
    </Container>
    <Container
      sizes="max-w-3xl w-full"
      margin="mr-auto"
      class="flex flex-col justify-items-center divide-y divide-surface-on/40"
    >
      <Inview presetOptions={fromRight} delay={150}>
        <div class=" py-12">
          <p class="uppercase text-tertiary m-0 sm:m-0">Email</p>
          <h3 class="m-0 sm:m-0">contact@wonderlee.com</h3>
        </div>
      </Inview>

      <Inview presetOptions={fromRight} delay={300}>
        <div class=" py-12">
          <p class="uppercase text-tertiary m-0 sm:m-0">Phone</p>
          <h3 class="m-0 sm:m-0">+852 6931 0020</h3>
        </div>
      </Inview>

      <Inview presetOptions={fromRight} delay={450}>
        <div class=" py-12">
          <p class="uppercase text-tertiary m-0 sm:m-0">Address</p>
          <h3 class="m-0 sm:m-0 pb-6">
            1402 Hip Kwan Commercial Building <br /> 38 Pitt Street, Yaumatei, Kowloon
          </h3>
          <Button variant="pill" href="#map-iframe" tracking="down-arrow"
            >Google Maps</Button
          >
        </div>
      </Inview>
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
