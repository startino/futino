<script lang="ts">
  import PromotionToggle from "./PromotionToggle.svelte";
  import { promotions, norpTiers, features } from "./plans";
  import TierListing from "./TierListing.svelte";
  import Button from "$lib/components/atoms/Button.svelte";
  import { loadStripe } from "@stripe/stripe-js";

  import { handleCheckout } from "./handleCheckout";
  import Icon from "$lib/components/atoms/Icon.svelte";
  import InView from "$lib/components/organisms/Inview.svelte";
  import Tooltip from "$lib/components/organisms/tooltip/Tooltip.svelte";
  import { formatter } from "$lib/utils";
  import Particles from "svelte-particles";
  import { loadSlim } from "tsparticles-slim";
  import type { Engine } from "tsparticles-engine";
  import { particlesConfig } from "../pricingParticlesConfig";

  export let activeTabValue = 0;

  let cycle: string = "monthly";

  const handlePromotionToggle = (tabValue: number) => () =>
    (activeTabValue = tabValue);

  let onParticlesLoaded = (event: any) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let particlesInit = async (engine: Engine) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  };
</script>

<main
  class="text-left relative place-items-center grid bg-gradient-to-b from-black/50 to-transparent from-85%"
>
  <Particles
    id="tsparticles"
    class="w-full h-full absolute z-0"
    options={particlesConfig}
    on:particlesLoaded={onParticlesLoaded}
    {particlesInit}
  />
  <section class="z-20">
    <div
      class="flex flex-col items-center gap-8 justify-items-center pt-48 text-center inner-section"
    >
      <div class="flex flex-col items-center gap-2">
        <h1 class="display-small lg:display-large">
          Scalable Tiers Made Just For You
        </h1>
        <h2 class="title-large">
          No contracts, pause or cancel anytime, and upscale or downscale as you
          wish.
        </h2>
      </div>

      <PromotionToggle class="my-4" bind:cycle {promotions} />

      <!-- Mobile view -->
      <div class="flex flex-col w-full gap-12 place-items-start lg:hidden">
        {#each norpTiers as tier}
          <TierListing {tier} {cycle} />
        {/each}
      </div>
      <!-- md+ view -->
      <div class="hidden grid-cols-4 mt-20 lg:grid place-items-center">
        <!--Top Row-->
        <div class="border-none grid-item" />
        {#each norpTiers as { name, subtitle, cost, thumbnail }}
          <div
            class=" flex flex-col max-w-md gap-2 text-left grid-item border-none place-items-start"
            id={name.toLowerCase().replace(" ", "")}
          >
            <img
              src={thumbnail}
              alt=""
              class="object-fit object-center drop-shadow-pricing-art h-1/2 w-1/2 pb-1"
            />
            <div class="">
              <h2 class=" headline-large uppercase font-extrabold">
                {name}
              </h2>
              <h3 class="pb-6 title-medium text-outline">
                {subtitle}
              </h3>
            </div>
            <div class="pb-10 mt-auto">
              <div class="flex flex-row items-end gap-2">
                <div class="flex flex-row place-items-center">
                  <h1
                    class="font-extrabold text-primary tracking-tighter display-large leading-none"
                  >
                    {cycle == "yearly"
                      ? formatter.format((cost * 0.833) / 2)
                      : formatter.format(cost / 2)}
                  </h1>
                </div>
                <div
                  class="relative flex flex-row text-outline place-items-center w-fit overflow-hidden px-0.5 py-1"
                >
                  <span
                    class="absolute right-0 w-full top-1/2 content-[''] border-t-2 border-outline rotate-45"
                  />
                  <h1
                    class="font-extrabold tracking-tighter leading-none headline-medium"
                  >
                    {cycle == "yearly"
                      ? formatter.format(cost * 0.833)
                      : formatter.format(cost)}
                  </h1>
                </div>
              </div>
              <div
                class="flex flex-row place-items-center text-center gap-2 my-2"
              >
                <h2 class="my-auto title-medium text-left">for first year</h2>
                <Tooltip
                  content={`To celebrate our recent launch and to build lasting relationships, we're offering this special first-year discount. 🎉`}
                  direction="left"
                >
                  <Icon
                    icon="info"
                    width="16"
                    height="16"
                    class="text-outline my-auto"
                  />
                </Tooltip>
              </div>
              <h3 class="body-medium text-outline">
                per month, billed {cycle}
              </h3>
            </div>
          </div>
        {/each}
        {#each Object.entries(features) as [catagoryName, catagoryFeatures]}
          <div class="flex pb-0 grid-item border-none col-span-4 mt-2 mb-1">
            <h1
              class="mt-auto uppercase title-large text-outline place-self-end"
            >
              {catagoryName}
            </h1>
          </div>
          <!-- Features Rows-->
          {#each Object.entries(catagoryFeatures) as [featureName, featureAbout]}
            <div class="flex flex-row grid-item place-items-center gap-3">
              <h2 class="my-auto title-medium text-left py-2">
                {featureName}
              </h2>
              <Tooltip content={featureAbout} direction="right">
                <Icon icon="info" width="14" height="14" class="text-outline" />
              </Tooltip>
            </div>
            {#each norpTiers as tier}
              <div class="grid-item self-center items-center flex">
                {#if tier.features[catagoryName][featureName] == true}
                  <Icon
                    icon="checkmark"
                    height="24"
                    width="24"
                    class="-ml-0.5 text-secondary"
                  />
                {:else}
                  <h2 class=" title-medium text-left">
                    {tier.features[catagoryName][featureName]}
                  </h2>
                {/if}
              </div>
            {/each}
          {/each}
        {/each}
        <div class="border-none grid-item" />
        {#each norpTiers as { stripeIds }}
          <div class="w-full mt-10 -ml-2 self-start md:pr-4 lg:pr-10">
            <Button
              class="w-full"
              onClick={() => handleCheckout(stripeIds[cycle])}
            >
              <h1 class="uppercase title-medium lg:title-large">Get Started</h1>
            </Button>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="sm:-m-12 md:m-12 z-20 section">
    <div
      class="flex flex-col items-center w-full inner-section md:flex-row gap-y-6"
    >
      <div class="flex flex-col gap-4">
        <div class="flex flex-row">
          <!-- Mobile text -->
          <div
            class="flex md:hidden flex-col gap-2 pb-4 font-extrabold tracking-wider text-center border-b-4 md:-space-y-4 headline-large sm:display-small md:text-left md:pl-4 md:border-b-0 md:border-l-4 md:pb-0 border-primary md:display-medium lg:display-large"
          >
            <h1 class="uppercase">Got questions?</h1>
            <h1 class="uppercase">Not convinced?</h1>
          </div>
          <!-- md+ text-->
          <div
            class="hidden md:flex flex-col gap-2 pb-4 font-extrabold tracking-wider text-center border-b-4 md:-space-y-4 headline-large sm:display-small md:text-left md:pl-4 md:border-b-0 md:border-l-4 md:pb-0 border-primary md:display-medium lg:display-large"
          >
            <InView fly={{ x: -200, y: 0 }} duration={250} class="">
              <h1 class="uppercase">Got questions?</h1>
            </InView>
            <InView
              fly={{ x: -200, y: 0 }}
              top={120}
              delay={200}
              duration={250}
              class=""
            >
              <h1 class="uppercase">Not convinced?</h1>
            </InView>
          </div>
        </div>
      </div>

      <div
        class="flex md:ml-auto flex-col h-full max-w-sm gap-4 px-8 py-8 text-center rounded-md bg-surface place-items-center"
      >
        <h3 class="pt-4 title-medium sm:title-large">
          Learn more about how Futino works and how it can help your business
          grow.
        </h3>
        <Button class="flex mx-auto mt-6 w-fit" href="/booking">
          <h1 class="uppercase title-medium md:headline-medium">BOOK A CALL</h1>
        </Button>
      </div>
    </div>
  </section>
</main>

<style>
  .grid-item {
    @apply border-t border-outline/50 w-full px-3 py-2 h-full;
  }
</style>
