<script lang="ts">
  export let pages;
  import Logo from "../atoms/Logo.svelte";
  import { onMount } from "svelte";
  import Icon from "../atoms/Icon.svelte";
  import { fade, slide } from "svelte/transition";
  import Button from "../atoms/Button.svelte";

  // Types to get TailwindCSS Intellisense
  import type { CssClasses } from "../../types.ts";
</script>

<div transition:fade class="fixed inset-0 z-30">
  <div
    on:click={toggleMenu}
    class="bg-black/50 absolute w-screen h-screen backdrop-blur-sm"
  />
  <!-- Menu Card -->
  <div
    in:slide={{ delay: 200, duration: 300 }}
    out:slide
    class="absolute z-50 p-12 w-full mx-auto my-auto top-0 bottom-0 flex flex-col items-center gap-4 left-0 right-0 h-fit max-w-xs md:max-w-xl lg:max-w-2xl bg-surface rounded-lg shadow-lg"
  >
    <!-- Nav Elements -->
    <nav class="text-center flex flex-col gap-6 headline-medium">
      {#each Object.entries(pages) as [name, href]}
        <a
          class="text-primary-container-on hover:text-tertiary hover:scale-105 transition-all duration-200"
          {href}
          on:click={toggleMenu}
        >
          {name}
        </a>
      {/each}
    </nav>
  </div>
</div>
