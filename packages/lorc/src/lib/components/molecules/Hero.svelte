<script lang="ts">
  import type { CssClasses } from "$lib/types";
  import Button from "../atoms/Button.svelte";

  // Content Props
  /**Path to the background image. e.g. ``/garages/best_garage.png`` */
  export let bgImg: string = "/favicon.png";
  export let title: string = "This is a great title for Company Name";
  export let subtitle: string =
    "This is an even better piece of text. Specifically, this is a subtitle";
  /** Provide classes to set the base typography styling. The default is: body-small text-primary text-primary*/
  export let typography: CssClasses = "";
  /** Labels and hrefs of CTA buttons on the hero. Recommended 1-2.*/
  export let CTAButtons: {
    [label: string]: { href: string; secondary: boolean };
  } = {
    "CTA ONE": {
      href: "/",
      secondary: false,
    },
    "CTA TWO": {
      href: "/",
      secondary: true,
    },
  };

  /** Provide how you want the hero text and items to be positioned on the horizontal axis.*/
  export let justified: "left" | "center" | "right" = "center";

  let justifyClass = () => {
    switch (justified) {
      case "left":
        return "items-start text-left";
      case "right":
        return "items-end text-right";
      case "center":
        return "items-center text-center";
    }
  };
</script>

<section
  class="h-screen {bgImg} bg-center bg-cover w-full grid {typography} place-items-center"
  style=""
>
  <div
    class="flex flex-col items-center {justifyClass()} my-auto gap-8 mx-2 sm:mx-4 md:mx-6"
  >
    <div class="flex flex-col gap-4">
      <h1 class="" style="margin: 0px">{title}</h1>
      <h5 class="" style="margin: 0px">
        {subtitle}
      </h5>
    </div>
    <div
      class="grid grid-cols-{Object.entries(CTAButtons)
        .length} gap-4 md:gap-6 place-items-center w-fit"
    >
      {#each Object.entries(CTAButtons) as [label, { href, secondary }]}
        <Button {secondary} {href}>
          <h6 class="" style="margin: 0px">{label}</h6>
        </Button>
      {/each}
    </div>
  </div>
</section>
