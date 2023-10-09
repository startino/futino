<script lang="ts">
  import { Container, Button } from "lorc";
  import { slide } from "svelte/transition";

  const renlita_doors = [
    {
      label: "Renlita Floataway",
      id: "floataway",
      description: [
        " Balanced by counter-weight, the whole door goes up as if float-away.",
        "Built by Renlita USA according to ANSI standard.",
        "Maximum 32' wide and 20' high.",
        "Powered with electrically operated opener for remote control access.",
      ],
    },
    {
      label: "Renlita Hingeway",
      id: "hingeway",
      description: [
        " Balanced by counter-weight, the whole door goes up as if fold-away.",
        "Built by Renlita USA according to ANSI standard.",
        "Maximum 32' wide and 20' high.",
        "Powered with electrically operated opener for remote control access.",
      ],
    },
    {
      label: "Renlita Foldaway",
      id: "foldaway",
      description: [
        "Balanced by counter-weight, the whole door goes up as if hinge-away.",
        "Built by Renlita USA according to ANSI standard.",
        "Maximum 90' wide and 30' high.",
        "Designed to wind load of 10 PSF.",
        "Powered with electrically operated opener for remote control access.",
      ],
    },
    {
      label: "Renlita A750 NuFold",
      id: "nufold",
      description: [
        "Balanced by counter-weight, the whole door goes up without interior projection.",
        "Built by Renlita USA according to ANSI standard.",
        "Maximum 18' wide and 12' high.",
        "Designed to wind load of 30 PSF.",
        "Powered with electrically operated opener for remote control access.",
      ],
    },
    {
      label: " Renlita Sovereign",
      id: "sovereign",
      description: [
        "Also known as stacking door, all panels stack up to the ceiling.",
        "Built by Renlita USA according to ANSI standard.",
        "Maximum 16' wide and 12' high.",
        "Powered with electrically operated opener for remote control access.",
      ],
    },
    {
      label: " Renlita Frameless Glass",
      id: "frameless-glass",
      description: [
        "Elegant window wall with no floor track.",
        "Slide neatly into stacking bay.",
        "Maximum 12' high.",
        "Powered with electrically operated opener for remote control access.",
      ],
    },
  ];
</script>

<Container class="flex flex-col gap-12 pt-44">
  <Container class="flex flex-col">
    <h2>Different Renlita Doors</h2>
    <div class="grid grid-cols-3 gap-6 place-items-center">
      {#each renlita_doors as { label, id }}
        <div class="flex flex-col place-items-center">
          <img
            src="/products/renlita-door/{id}-1.jpg"
            alt=""
            class="object-contain object-center w-full h-full"
          />
          <Button href="#{id}" class="w-full">{label}</Button>
        </div>
      {/each}
    </div>
  </Container>
  {#each renlita_doors as { label, id, description }}
    <Container class="flex flex-col md:grid md:grid-cols-2 gap-6" id="uphill">
      <div class="grid grid-cols-2 md:grid-cols-1 not-prose">
        <img
          src="/products/renlita-door/{id}-1.jpg"
          alt=""
          class="object-contain object-center w-full h-full"
        />
        <img
          src="/products/renlita-door/{id}-2.jpg"
          alt=""
          class="object-contain object-center w-full h-full"
        />
      </div>
      <div class="flex flex-col col-span-1">
        <h2>{label}</h2>
        <ul class="ulink">
          {#each description as item}
            <li>
              {item}
            </li>
          {/each}
        </ul>
      </div>
    </Container>
  {/each}
</Container>
