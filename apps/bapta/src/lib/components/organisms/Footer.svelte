<script lang="ts">
  import Logo from "../atoms/Logo.svelte";

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

  export const pages: { [key: string]: string } = {
    Home: "/",
    Tours: "/tours",
    Contact: "/contact",
    Adventures: "/adventures",
    Privacy: "/legal/privacy",
  };

  /** Provide the company's name as text. If the name */
  export const companyName: string = "Bapta Safaris";

  // Props

  /** Provide classes to set border styles. The default is: md: md:border-primary/50 */
  export const border: string = "border-outline ";
</script>

<footer
  class="max-w-none w-full prose-a:no-underline prose sm:prose-sm lg:prose-md prose-invert prose-main"
>
  <div class="px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto">
    <div
      class="flex text-left flex-col md:flex-row z-50 w-full pt-12 pb-6 h-full items-start md:items-center border-b {border} justify-start gap-8 lg:max-w-5xl xl:max-w-6xl mx-auto justify-items-start"
    >
      <a class="flex gap-3 items-start not-prose w-full" href="/">
        <Logo />
        <p class="flex m-0 my-auto">{companyName}</p>
      </a>

      <div
        class="flex flex-wrap gap-12 mt-3 sm:mt-0 w-fit justify-self-center justify-items-center"
      >
        {#each Object.entries(pages) as [name, href]}
          <a {href} class="hover:underline m-0">
            <h6>
              {name}
            </h6>
          </a>
        {/each}
      </div>
    </div>

    <div class="block text-left md:text-center py-6">
      Created & Hosted by
      <a href="https://futi.no" class="hover:underline m-0"> Futino™ </a>
    </div>
  </div>
</footer>
