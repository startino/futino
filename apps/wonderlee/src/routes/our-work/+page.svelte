<script lang="ts">
  import {
    Prose,
    Container,
    ContactForm,
    Card,
    Button,
    SelectMenu,
  } from "lorc";

  import projects from "./projects";
  import products from "../products/products";

  let filterByDate: string;
  // let filterByType: string; // for when projects are tagged with their proper product types.

  const productItems: { [label: string]: string } = {};
  for (let key in projects) {
    productItems[key] = projects[key].date.toString();
  }
</script>

<Prose>
  <section class="grid place-items-center pt-44">
    <h1 class="uppercase m-0 sm:m-0">Our Work</h1>
    <Container class="flex flex-col mt-6 items-center" sizes="w-fit">
      <h6 class="uppercase m-0 sm:m-0 text-tertiary">Filter By Date</h6>
      <SelectMenu
        class="-mt-2"
        uppercase={true}
        bind:selected={filterByDate}
        label=""
        items={productItems}
      />
    </Container>
    <Container
      class="grid md:grid-cols-2 place-items-center"
      sizes="max-w-none w-full"
    >
      <div class="absolute border-r border-surface-on h-full mt-20" />
      {#each Object.entries(projects) as [id, project], i}
        <Card
          class="grid grid-cols-2 items-start gap-x-4 "
          size="max-w-3xl w-full"
        >
          <h6
            class="col-span-2 {i % 2 == 0
              ? 'justify-self-end'
              : 'justify-self-start'} m-0 sm:m-0 text-tertiary"
          >
            {project.date}
          </h6>
          <div
            class="flex flex-col {i % 2 == 0
              ? 'col-start-1'
              : 'col-start-2 row-start-2'}"
          >
            <h3 class="mt-0 sm:mt-0">{project.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio
              mollitia excepturi laudantium nostrum sit."
            </p>
          </div>
          <img
            src={project.thumbnail}
            alt=""
            class="object-cover object-center h-full not-prose {i % 2 == 0
              ? 'justify-self-end col-start-2'
              : 'justify-self-start col-start-1 row-start-2'}"
          />
        </Card>
      {/each}
    </Container>
  </section>
</Prose>
