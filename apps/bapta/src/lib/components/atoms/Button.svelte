<button
  on:click={$$props.click}
  class="{$$props.class} inline-flex overflow-hidden relative justify-center items-center py-3 px-6 font-bold rounded-md shadow-2xl group text-primary-on-dark hover:text-secondary-container-on-dark"
>
  <span
    class="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-dark to-secondary-dark opacity-100 transition duration-300 ease-out group-hover:opacity-0"
  />
  <span
    class="absolute inset-0 w-full h-full bg-gradient-to-br from-secondary-container-dark to-primary-container-dark opacity-0 transition duration-300 ease-out group-hover:opacity-100"
  />
  <span class="relative">
    <slot />
  </span></button
>
