<script lang="ts">
  import type { CssClasses, TransitionOptions } from "$lib/types";
  import Button from "../atoms/Button.svelte";
  import Section from "../atoms/Section.svelte";
  import Inview from "../atoms/inview/Inview.svelte";
  // Content Props
  /**Path to the background image. e.g. ``/garages/best_garage.png`` */
  export let bgImg: string = "";
  /**Path to the background video */
  export let bgVideo: { [size: string]: string };
  /** Provide classes to set the cover for the bg image. e.g. ``bg-black/50`` to darken the background image */
  export let bgCover: CssClasses = "bg-black/0";
  /** Provide classes to set the position of the b **/
  export let parallax: boolean = false;
  export let title: string = "This is a great title for Company Name";
  export let subtitle: string =
    "This is an even better piece of text. Specifically, this is a subtitle";
  /** Provide classes to set the base typography styling. The default is: body-small text-primary text-primary*/
  export let typography: CssClasses = "";
  /** Labels and hrefs of CTA buttons on the hero. Recommended 1-2.*/
  export let CTAButtons: {
    [label: string]: { href: string; highlight: boolean };
  } = {
    "CTA ONE": {
      href: "/",
      highlight: true,
    },
    "CTA TWO": {
      href: "/",
      highlight: false,
    },
  };

  export let inviewPresetOptions: TransitionOptions = {
    delay: 0,
    duration: 400,
  };
  export let buttonVariant: string = "normal";

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

  let y: number;
  let scrollY: number;
  $: scrollY = Math.round(y);
</script>

<svelte:window bind:scrollY={y} />

<Section
  class="h-screen w-full z-0 {typography}"
  style="{$$props.style} ; clip-path: inset(0 0 0 0);"
>
  <div class="{bgCover} w-full h-full z-0 absolute" />
  <div class="{parallax ? 'fixed' : 'absolute '} w-full h-full not-prose -z-10">
    {#if bgVideo}
      <video
        muted
        id="clip"
        preload="auto"
        autoplay
        loop
        class="object-cover object-center w-full h-screen max-h-screen"
      >
        <source
          type="video/webm"
          title="Hero Video"
          media="(min-width: 800px)"
          src={bgVideo["lg"]}
        />

        <source
          type="video/webm"
          media="(max-width: 799px)"
          src={bgVideo["md"]}
        />
        Your Browser does not support our video types
      </video>
    {:else if bgImg}
      <img
        src={bgImg}
        alt=""
        class="object-cover object-center w-full h-screen max-h-screen mix-blend-darken"
      />
    {/if}
  </div>
  <div
    class="flex flex-col w-full z-10 items-center {justifyClass()} my-auto gap-12 mx-2 sm:mx-4 md:mx-6 {parallax
      ? 'fixed'
      : ''}"
  >
    <Inview class="w-full h-full" presetOptions={inviewPresetOptions}>
      <div
        class="flex flex-col items-center gap-4
       "
      >
        <h1 class="" style="margin: 0px">{title}</h1>
        <h5 class="max-w-6xl" style="margin: 0px">
          {subtitle}
        </h5>
      </div>
    </Inview>
    <div
      class="grid grid-cols-{Object.entries(CTAButtons)
        .length} gap-4 md:gap-6 place-items-center w-fit"
    >
      {#each Object.entries(CTAButtons) as [label, { href, highlight }]}
        <Button variant={buttonVariant} class="w-full" {highlight} {href}>
          {label}
        </Button>
      {/each}
    </div>
  </div>
</Section>
