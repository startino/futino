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

  export let pages: { [key: string]: { [key: string]: string } } = {
    Explore: {
      Home: "/",
      About: "/",
    },
    Legal: {
      "Privacy Policy": "/",
      "Tems of Service": "/",
    },
    Support: {
      Skills: "/",
      FAQ: "/",
    },
    Company: {
      Careers: "/",
      Blog: "/",
    },
  };

  /**Provide the company's name as text. If the name */
  export let companyName: string = "Company Name";

  // Props (base styles)
  /** Provide classes to set background color. */
  export let background: string = "";
  /** Provide classes to set border styles. The default is: md: md:border-primary/50 */
  export let border: string = " border-outline";
  /** Provide classes to set padding. */
  export let padding: string = "";
  /** Provide classes to define a box shadow. */
  export let shadow: string = "";
  /** Provide classes to set base styling for gap spacing. The default is: gap-6*/
  export let gap: string = "gap-6";
  /** Provide classes to set the base typography styling. The default is: body-small  text-primary*/
  export let typography: string = "text-primary";
</script>

<footer
  class="max-w-none prose-a:no-underline prose sm:prose-sm lg:prose-md prose-invert prose-main bg-background"
>
  <div
    class="flex text-left flex-col md:flex-row z-50 w-full py-24 items-start justify-start gap-8 px-6 md:px-18 lg:max-w-5xl xl:max-w-6xl mx-auto justify-items-start"
  >
    <a class="flex gap-3 items-start not-prose w-full" href="/">
      <Logo />
      <p class="flex m-0 my-auto">{companyName}</p>
    </a>

    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-start items-start mt-3 sm:mt-0 w-full"
    >
      {#each Object.entries(pages) as [category, links]}
        <div
          class="flex flex-col gap-3 max-w-none prose-a:no-underline prose sm:prose-sm lg:prose-md prose-invert prose-main"
        >
          <h6 class="mb-1 font-bold m-0">
            {category}
          </h6>

          {#each Object.entries(links) as [name, href]}
            <a {href} class="hover:underline m-0">
              <h6>
                {name}
              </h6>
            </a>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</footer>
