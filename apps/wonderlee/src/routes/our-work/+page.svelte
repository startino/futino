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
    <h1 class="uppercase m-0 sm:m-0">Job References</h1>
    <Container
      class="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-y-12"
      sizes="max-w-none w-full"
      margin="mt-32"
    >
      <div class="absolute hidden sm:flex border-r border-surface-on h-full" />
      {#each Object.entries(projects) as [id, project], i}
        <Card
          class="grid grid-cols-1 items-start content-start {i % 2 == 0
            ? 'weshallseemt-44'
            : 'idkkk-mt-44'}"
          size="max-w-4xl w-full h-full"
        >
          <h6
            class=" {i % 2 == 0
              ? 'justify-self-end'
              : 'justify-self-start'} m-0 sm:m-0 text-tertiary"
          >
            {project.date}
          </h6>
          <div
            class="grid grid-cols-1 xl:grid-cols-2 gap-y-2 items-start gap-x-4"
          >
            <div
              class="flex flex-col xl:col-start-{i % 2 == 0
                ? '1 justify-self-end'
                : '2 justify-self-startt'}"
            >
              <h3 class="mt-0 sm:mt-0">{project.name}</h3>
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
            <img
              src={project.thumbnail}
              alt=""
              class="object-cover object-center w-full md:h-72 not-prose row-start-1 {i %
                2 ==
              0
                ? 'xl:justify-self-end xl:col-start-2'
                : 'xl:justify-self-start xl:col-start-1 '}"
            />
          </div>
        </Card>
      {/each}
    </Container>
  </section>
</Prose>
