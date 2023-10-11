<script lang="ts">
  import type { CssClasses } from "$lib/types";
  import { onMount } from "svelte";

  export let label: string = "Label";

  export let items: { [key: string]: string } = {
    "id-one": "Option One",
    "id-two": "Option Two",
  };
  export let selected: string = "two";

  /** Provide the max widths of the container at different screen sizes. */
  export let size: CssClasses = "max-w-md";
  /** provide classes to set border styles. the default is: md: md:border-primary/50 */
  export let border: CssClasses = "";

  export let radius: CssClasses = "rounded-md";
  /** provide classes to set padding. */
  export let padding: CssClasses = "p-1";
  export let margin: CssClasses = "mx-auto";
  /** provide classes to define a box shadow. */
  export let shadow: CssClasses = "";

  export let uppercase: boolean = false;

  export let removeDuplicates: boolean = true;

  function removeDuplicateItems<T>() {
    const result: { [key: string]: string } = {};
    Object.entries(items).forEach((item) => {
      if (!Object.entries(result).includes(item)) {
        result[item[0]] = item[1];
        console.log("adding item: ", item);
      }
    });
    return result;
  }

  onMount(() => {
    selected = Object.entries(items)[0][0];
  });

  $: classesBase = `${size} ${margin} ${
    uppercase ? "uppercase" : ""
  } ${padding} ${shadow} ${border} ${radius} ${$$props.class}`;
</script>

<div class={classesBase}>
  <label
    for="location"
    class="block text-sm font-medium leading-6 text-surface-on {uppercase
      ? 'uppercase'
      : ''}">{label}</label
  >
  <select
    id="location"
    name="location"
    bind:value={selected}
    class="mt-2 block bg-surface w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-surface-on ring-inset ring-surface-on focus:ring-2 focus:ring-surface-on sm:leading-6"
  >
    {#each Object.entries(removeDuplicateItems()) as [id, label]}
      <option selected={selected == id} value={id}>{label}</option>
    {/each}
  </select>
</div>
