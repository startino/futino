<script lang="ts">
  import AccommodationOption from "./AccommodationOption.svelte";

  export let promotions: { label: string; index: number; for: string }[];
  export let activeTabValue = 0;

  let positionClass: string = "left: 0px";

  let button_widths: number[] = [68, 70421];

  const handleClick = (tabValue: number) => () => {
    let left = 0;
    button_widths.forEach((value, index) => {
      console.log("Loop");
      if (index < tabValue) {
        left += value + 8;
      }
    });
    let newString = "left: " + left.toString() + "px";
    positionClass = "left: " + left.toString() + "px";
  };
</script>

<div
  class="flex flex-col max-w-xl m-2 w-fit border rounded-2xl border-secondary-dark/20"
>
  <div class="relative flex flex-row gap-2 px-2 py-4 items-center text-center">
    <div
      class="h-14 md:h-[4.5rem] absolute border-2 mx-2 rounded-xl border-primary-dark transition-all duration-500 ease-in-out"
      style="width: {button_widths[activeTabValue] - 4}px; {positionClass};"
    />

    {#each promotions as promotion, i}
      <!--{activeTabValue == promotion.index
					? 'active border-2 rounded-xl  dark:border-primary-dark'
					: -->
      <div
        class="py-2 rounded-xl transition-all duration-75 px-3 {activeTabValue ==
        i
          ? ''
          : 'outline outline-0 hover:outline-2 outline-white'}"
        bind:clientWidth={button_widths[i]}
      >
        <button type="button" on:click={handleClick(promotion.index)}>
          <AccommodationOption
            name="billing"
            for={promotion.for}
            text={promotion.label}
            value={promotion.index}
            bind:activeTabValue
          />
        </button>
      </div>
    {/each}
  </div>
</div>

<style>
</style>
