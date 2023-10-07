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

  let filterByDate: string = "";
  // let filterByType: string; // for when projects are tagged with their proper product types.

  const projectItems: () => { [label: string]: string } = () => {
    const items: { [key: string]: string } = {};
    Object.entries(projects).forEach((item) => {
      items[item[1].date] = item[1].date.toString().concat("+");
    });
    return items;
  };

  function filteredProjectItems() {
    const items: { [key: string]: any } = {};
    Object.entries(projects).forEach((item) => {
      if (item[1].date >= parseInt(filterByDate.replace("+", ""))) {
        items[item[0]] = item[1];

        console.log("adding item: ", item);
      }
    });
    return items;
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
        removeDuplicates={true}
        descending={true}
        label=""
        items={projectItems()}
      />
    </Container>
    <Container
      class="grid grid-cols-1 sm:grid-cols-2 place-items-center"
      sizes="max-w-none w-full"
      margin="mt-12"
    >
      <div
        class="absolute hidden sm:flex border-r border-surface-on h-full mt-20"
      />
      {#key filterByDate}
        {#each Object.entries(filteredProjectItems()) as [id, project], i}
          <Card
            class="grid grid-cols-1 lg:grid-cols-2 items-start gap-x-4 "
            size="max-w-4xl w-full h-full"
          >
            <h6
              class="lg:col-span-2 {i % 2 == 0
                ? 'justify-self-end'
                : 'justify-self-start'} m-0 sm:m-0 text-tertiary"
            >
              {project.date}
            </h6>
            <div
              class="flex flex-col {i % 2 == 0
                ? 'lg:col-start-1'
                : 'lg:col-start-2 lg:row-start-2'}"
            >
              <h3 class="mt-0 sm:mt-0">{project.name}</h3>
              <ul class="m-0 sm:m-0">
                {#each project.description as item}
                  <li class="m-0 sm:m-0">
                    <p class="m-0 sm:m-0">
                      {item}
                    </p>
                  </li>
                {/each}
              </ul>
            </div>
            <img
              src={project.thumbnail}
              alt=""
              class="object-cover object-center h-full flex self-stretch w-full mb-3 lg:m-0 not-prose row-start-2 {i %
                2 ==
              0
                ? 'lg:justify-self-end lg:col-start-2'
                : 'lg:justify-self-start lg:col-start-1 lg:row-start-2'}"
            />
          </Card>
        {/each}
      {/key}
    </Container>
  </section>
</Prose>
