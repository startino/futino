<script lang="ts">
  import { slide } from "svelte/transition";
  import { Icon } from "@repo/deprecated-lorc";

  export let question = "";
  export let answer = "";

  export let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
</script>

<button
  on:click={toggle}
  class="bg-surface/40 border-1 border-primary/50 py-4 flex flex-col px-3 rounded-md shadow-lg text-left transition-all duration-300 w-full max-w-3xl"
>
  <div class="flex flex-row items-center justify-between w-full">
    <h5 class="m-0 sm:m-0">
      {question}
    </h5>

    <span
      class="justify-self-end self-center transition-all ease-in duration-200"
      style={isOpen ? "transform: rotate(180deg)" : ""}
    >
      <Icon icon="down-arrow" height="22" width="22" class="text-primary" />
    </span>
  </div>
  {#if isOpen}
    <div transition:slide={{ duration: 300 }} class="max-w-xl w-full">
      <p class="m-0 sm:m-0 inline">
        {answer}
      </p>
    </div>
  {/if}
</button>
