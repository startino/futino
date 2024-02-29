<script lang="ts">
  import Icon from "$lib/components/atoms/Icon.svelte";
  import { onMount } from "svelte";

  export let promotions: {
    label: string;
    index: number;
    for: string;
    discount: string;
  }[];
  export let activeTabValue = 0;

  let positionClass: string = "left: 0px";
  let rowHeight: number = 0;

  // Offset from gap. Needs to be same as gap-x of flex-row. Unit is px.
  let rowGap: number = 4;

  // Widths of individual toggle elements (includes padding of element)
  let button_widths: number[] = [0, 0, 0, 0, 0];

  function handleClick(tabValue: number) {
    console.log(tabValue);
    let left = 0;
    button_widths.forEach((value, index) => {
      if (index < tabValue) {
        left += value + rowGap;
      }
    });

    let newString = "left: " + left.toString() + "px";
    positionClass = "left: " + left.toString() + "px";
    activeTabValue = tabValue;

    cycle = tabValue == 0 ? "monthly" : "yearly";
  }
  export let cycle: string = "monthly";

  onMount(() => {
    handleClick(1);
    positionClass = "left: 131px";

  });

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
</script>

<div
  class="{$$props.class} flex bg-surface border rounded-lg border-secondary/20"
>
  <div class="relative flex flex-row gap-1 items-center text-center mx-1 my-2">
    <div
      class="absolute border-2 rounded-lg border-primary transition-all delay-75 ease-in-out duration-500"
      style="width: {button_widths[
        activeTabValue
      ]}px; {positionClass}; height: {rowHeight}px"
    />

    {#each promotions as { label, discount, index }, i}
      <!--{activeTabValue == promotion.index
					? 'active border-2 rounded-xl  border-primary'
					: -->
      <button
        class="py-4 rounded-lg px-4 sm:px-5 md:px-8 {activeTabValue == i
          ? ''
          : 'outline outline-0 hover:outline-1 outline-white'}"
        bind:clientWidth={button_widths[i]}
        bind:clientHeight={rowHeight}
        on:click={() => handleClick(index)}
      >
        <div class="flex flex-row gap-2">
          <h1 class="title-medium tracking-wide uppercase">{label}</h1>

          {#if discount}
            <div
              class="flex flex-row items-center gap-1 text-tertiary fill-tertiary stroke-tertiary"
            >
              <Icon icon="discount" height="16" width="16" />

              <h2 class="body-medium uppercase">
                {discount}
              </h2>
            </div>
          {/if}
        </div>
      </button>
    {/each}
  </div>
</div>

<style>
</style>
