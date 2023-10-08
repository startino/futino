<script lang="ts">
  import {
    Prose,
    Container,
    ContactForm,
    Card,
    Button,
    SelectMenu,
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
      sizes="max-w-none w-full"
    >
      {#each Object.entries(products) as [name, product]}
        <Container
          class="grid grid-cols-3 lg:grid-cols-4 place-items-center"
          sizes="max-w-none w-full"
        >
          <Card
            class="flex flex-col gap-2 col-span-3 lg:col-span-1 items-start "
            padding="lg:px-6 pb-3"
            size="max-w-none w-full"
          >
            <h2 class="m-0 sm:m-0">
              {product.name}
            </h2>
            <p class="m-0 sm:m-0 prose-sm">
              {product.description}
            </p>
          </Card>
          {#if product.types}
            {#each product.types as { label, thumbnail }}
              <Card
                class="not-prose relative flex"
                size="max-w-none w-full h-full aspect-1 "
                padding="px-1 py-2"
              >
                <p class="text-tertiary self-end">
                  {label}
                </p>
                <img
                  src={thumbnail}
                  alt=""
                  class="object-cover object-center w-full aspect-1 absolute top-0 left-0 brightness-50"
                />
              </Card>
            {/each}
          {/if}
        </Container>
      {/each}
    </Container>
  </section>
</Prose>
