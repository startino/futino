<script lang="ts">
  import Logo from "../atoms/Logo.svelte";
  import { onMount } from "svelte";
  import Icon from "../atoms/Icon.svelte";
  import { fade, slide } from "svelte/transition";
  import Button from "../atoms/Button.svelte";

  // Types to get TailwindCSS Intellisense
  import type { CssClasses, StyleVariants } from "../../types.ts";

  // Props
  /**Provide the list of page links you'd like to put in the header.
   * @remarks
   * Type must be { name: string; href: string }[].
   * @example
   * [{
   * name: 'Home',
   * href: '/home',
   * }]
   * */
  export let pages: { [key: string]: string } = {
    Home: "/",
  };
  /** Labels and hrefs of CTA buttons on the hero. Recommended 1-2.*/
  export let CTAButtons: {
    [label: string]: { href: string; highlight: boolean };
  } = {};
  /**Property to determine if the class 'fixed' is applied to the header.*/
  export let sticky: boolean = true;
  /**Property to determine if the theme toggle button should be included.*/
  export let dualTheme: boolean = true;
  /**Provide the company's name as text. If the name */
  export let companyName: string = "Company Name";

  export let logoPos: "leading" | "center" | "trailing" = "leading";
  // Props (base styles)
  /** Provide classes to set bg color when header is big. */
  export let bgBig: CssClasses = "";
  /** Provide classes to set bg color when header is small. */
  export let bgSmall: CssClasses = "";
  export let maxWidth: CssClasses = "";
  /** Provide classes to set border styles. The default is: md: md:border-primary/50 */
  export let border: CssClasses = "";
  /** Provide classes to set padding. */
  export let paddingBig: CssClasses = "";
  export let paddingSmall: CssClasses = "";
  export let margin: CssClasses = "mx-auto";
  export let top: CssClasses = "";

  /** Provide classes to set radius. */
  export let radius: CssClasses = "";
  /** Provide classes to define a box shadow. */
  export let shadow: CssClasses = "";
  /** Provide classes to set base styling for gap spacing. The default is: gap-6*/
  export let gap: CssClasses = "gap-6";
  /** Provide classes to set the base typography styling. The default is: body-small  text-primary*/
  export let typography: CssClasses = "";

  export let variant: string = "normal";

  const variants: StyleVariants = {
    normal: {
      colors: ["bg-transparent", "bg-transparent"],
      border: "border-b border-primary/50",
      padding: ["py-12", "py-3"],
      radius: "rounded-md",
      typography: "text-surface-on",
      top: "top-0",
    },
    pill: {
      colors: ["bg-surface", "bg-surface"],
      border: "",
      padding: ["py-4 px-4", "py-2 px-2 md:py-4 md:px-4"],
      radius: "rounded-full",
      typography: "text-surface-on",
      top: "top-4",
      margin: "",
      maxWidth: "max-w-5xl",
    },
  };
  // Reactive Classes
  function setClasses() {
    bgBig = bgBig || variants[variant].colors[0];
    bgSmall = bgSmall || variants[variant].colors[1];
    paddingBig = paddingBig || variants[variant].padding[0];
    paddingSmall = paddingSmall || variants[variant].padding[1];
    margin = margin || variants[variant].margin;
    border = border || variants[variant].border;
    radius = radius || variants[variant].radius;
    top = top || variants[variant].top;
    maxWidth = maxWidth || variants[variant].maxWidth;
    typography = typography || variants[variant].typography;
  }

  setClasses();

  $: classesBase = `${maxWidth} ${margin} ${shadow} ${border} ${radius} ${top} ${$$props.class} ${typography}`;

  // Constant Classes
  /** Default header class; user hasn't scrolled */
  let largeHeaderClass = `${paddingBig} ${bgBig}`;
  /** Class for when user has scrolled;  collapsed header */
  let miniHeaderClass = `${paddingSmall} ${bgSmall} ${border} backdrop-blur`;

  // Variables
  let activeheaderClass = largeHeaderClass;
  let menuOpen = false;
  let flyAmount: number;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  onMount(() => {
    window.addEventListener("scroll", () => {
      activeheaderClass =
        window.scrollY > 12 && sticky ? miniHeaderClass : largeHeaderClass;
    });
  });
</script>

{#if menuOpen}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- Background Blurr -->
  <div transition:fade class="fixed inset-0 z-50">
    <div
      on:click={toggleMenu}
      class="bg-black/50 absolute w-screen h-screen backdrop-blur-sm"
    />
    <!-- Menu Card -->
    <div
      in:slide={{ delay: 200, duration: 300 }}
      out:slide
      class="absolute z-50 p-12 w-full mx-auto my-auto top-0 bottom-0 flex flex-col items-center gap-4 left-0 right-0 h-fit max-w-xs md:max-w-xl bg-surface rounded-lg shadow-lg"
    >
      <!-- Nav Elements -->
      <nav class="text-center flex flex-col gap-6 headline-medium">
        {#each Object.entries(pages) as [name, href]}
          <a
            class="text-surface-on hover:text-tertiary hover:scale-105 transition-all duration-200"
            {href}
            on:click={toggleMenu}
          >
            {name}
          </a>
        {/each}
      </nav>
    </div>
  </div>
{/if}

<header
  id="header"
  class=" {sticky ? 'fixed' : ''} 
 z-40 w-full transition-all duration-400 justify-items-center"
  bind:clientHeight={flyAmount}
>
  <div
    class="{classesBase} {activeheaderClass} z-40 relative transition-all duration-400"
  >
    <div
      class="flex md:grid md:grid-cols-5 z-50 items-center w-full justify-center px-6 max-w-7xl mx-auto"
    >
      {#if logoPos == "leading"}
        <a class="flex gap-3 not-prose justify-self-start mr-auto" href="/">
          <Logo />
          <p class="hidden sm:flex text-xl my-auto">{companyName}</p>
        </a>
      {:else}
        <a
          class="flex md:hidden gap-3 not-prose justify-self-start mr-auto"
          href="/"
        >
          <Logo height="h-10" />
          <p class="hidden sm:flex text-xl my-auto">{companyName}</p>
        </a>
      {/if}

      <!-- Justify-between Header -->
      <nav
        class="hidden {logoPos == 'center'
          ? `col-span-5 md:grid justify-between w-full h-full place-items-center grid-cols-${
              Object.entries(pages).length + 1
            }`
          : `md:flex col-span-3 `} mx-auto {gap} justify-self-center"
      >
        {#each Object.entries(pages) as [name, href], i}
          <a class="text-center {typography}" {href}>
            <h6 class="m-0 sm:m-0">
              {name}
            </h6>
          </a>
          <!-- Places the logo in the middle of the page items. Will only look good if there's an even number of pages!-->
          {#if logoPos == "center" && i == Object.entries(pages).length / 2 - 1}
            <a class="flex gap-3 not-prose" href="/">
              <Logo height="h-10" />
              <p class="hidden sm:flex text-xl my-auto">{companyName}</p>
            </a>
          {/if}
        {/each}
      </nav>

      <div
        class="hidden md:flex grid grid-cols-{Object.entries(CTAButtons)
          .length} gap-4 md:gap-6 place-items-center w-fit justify-self-end"
      >
        {#each Object.entries(CTAButtons) as [label, { href, highlight }]}
          <Button class="w-full" {highlight} {href}>
            {label}
          </Button>
        {/each}
      </div>
      {#if logoPos == "trailing"}
        <a class="flex gap-3 not-prose" href="/">
          <Logo />
          <p class="hidden sm:flex text-xl my-auto">{companyName}</p>
        </a>
      {/if}

      <button
        class="flex md:hidden stroke-primary hover:stroke-tertiary"
        on:click={toggleMenu}
      >
        <Icon
          height="32"
          width="32"
          fill={"none"}
          icon={menuOpen ? "cross" : "burger"}
        />
      </button>
    </div>
  </div>
</header>
