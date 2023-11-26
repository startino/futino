<script lang="ts">
  import {
    Prose,
    Container,
    ContactForm,
    Card,
    Button,
    SelectMenu,
    Inview,
    fromLeft,
  } from "lorc";
  import products from "./products";
</script>

<Prose>
  <section class="grid h-full min-h-screen pt-44 gap-12">
    <Container class="flex flex-col place-items-center gap-6">
      <h1 class="display-small uppercase m-0 sm:m-0">Products</h1>
    </Container>
    <Container
      class="grid grid-cols-1 place-items-center gap-y-12"
      padding="mt-32"
      sizes="max-w-none w-full"
    >
      {#each Object.entries(products) as [name, product]}
        <Container
          id={name}
          class="grid grid-cols-3 gap-x-4 lg:grid-cols-4 place-items-center"
          sizes="max-w-none w-full"
        >
          <Card
            class="flex flex-col gap-2 col-span-3 lg:col-span-1 items-start "
            padding="lg:px-6 pb-3"
            size="max-w-none w-full"
          >
            <h6 class="m-0 sm:m-0 text-tertiary uppercase">
              {product.name}
            </h6>
            <p class="m-0 sm:m-0 prose-sm">
              {product.description}
            </p>
          </Card>
          {#if product.types}
            {#each product.types as { label, thumbnail, href }, i}
              <Inview
                fly={{ y: 0, x: -200 }}
                class="w-full h-full {product.types.length == 1
                  ? 'col-span-2'
                  : ''}"
                delay={i * 200}
              >
                <Card
                  class=" relative flex place-items-center group overflow-hidden "
                  href="/products/{name}{href}"
                  size="max-w-none w-full h-full aspect-[1.7] max-h-72 min-h-96"
                  padding="px-1 py-2"
                >
                  <h3
                    class="m-0 sm:m-0 w-full text-center z-10 group-hover:text-tertiary transition-all duration-300"
                  >
                    {label}
                  </h3>
                  <img
                    src={thumbnail}
                    alt=""
                    class="object-cover not-prose object-center w-full h-full absolute top-0 left-0 brightness-50 md:brightness-50 rounded-md group-hover:brightness-100 transition-all duration-300 group-hover:scale-105"
                  />
                </Card>
              </Inview>
            {/each}
          {/if}
        </Container>
      {/each}
    </Container>
  </section>
</Prose>
