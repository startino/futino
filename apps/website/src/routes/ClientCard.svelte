<script>
  import Button from "$lib/components/atoms/Button.svelte";
  import Icon from "$lib/components/atoms/Icon.svelte";
</script>

<div
  class="{$$props.class} group bg-surface rounded-md items-center max-w-lg md:max-w-7xl w-full lg:items-start grid grid-cols-1 md:grid-cols-2 gap-4 py-4 px-4 md:px-8 md:py-10 lg:px-10 drop-shadow-glow-sm border-1 border-primary"
>
  <div class="flex flex-col h-full gap-2 lg:text-left z-10 text-left">
    <h1 class="display-medium">{$$props.name}</h1>
    <h3 class=" max-w-sm">
      {$$props.body}
    </h3>
    <ul
      class="flex flex-row flex-wrap headline-medium items-center py-4 gap-1 place-items-center"
    >
      <li class="title-medium">Services:</li>
      <br class="w-96 sm:hidden" />
      {#each $$props.services as service, i}
        <li class="title-medium font-bold my-auto">
          {service}
          {#if i !== $$props.services.length - 1},{/if}
        </li>
      {/each}
    </ul>
    <Button
      secondary
      class="justify-self-end mt-auto"
      href={$$props.href}
      target="_blank">Check it out!</Button
    >
  </div>
  <div
    class="flex flex-row flex-nowrap {$$props.bgColor} h-full w-full mx-auto z-0 rounded-xl not-prose p-2 py-6 sm:p-6 md:p-6 justify-center gap-2 md:gap-3 items-center"
  >
    <img
      class="w-[230px] sm:w-[350px] md:w-[250px] lg:w-[300px] xl:w-[400px] 2xl:w-[425px] basis-2 shrink object-contain not-prose"
      src={$$props.desktop_src}
      alt="{$$props.company} desktop mockup"
    />

    <img
      class="w-[53px] sm:w-[100px] md:w-[60px] lg:w-[75px] xl:w-[100px] h-fit object-contain not-prose"
      src={$$props.phone_src}
      alt="{$$props.company} phone mockup"
    />
  </div>
</div>
