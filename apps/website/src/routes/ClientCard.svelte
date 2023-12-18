<script>
  import Icon from "$lib/components/atoms/Icon.svelte";
</script>

<div
  class="{$$props.class} group bg-surface rounded-md items-center lg:items-start grid grid-cols-1 md:grid-cols-3 gap-4 py-10 px-6 pb-0 lg:pb-10 lg:px-10 w-full drop-shadow-glow-sm border-1 border-primary"
>
  <div>
    <div class="bg-background rounded-md p-3">
      <img
        src={$$props.topIcon}
        alt="book"
        class="w-7 h-7 object-center object-cover"
      />
    </div>
    <div class="flex flex-col gap-2 lg:text-left z-10">
      <h1 class="headline-large">{$$props.title}</h1>
      <p class="body-large max-w-sm">
        {$$props.body}
      </p>
    </div>
    <div class="flex flex-col justify-self-end mt-auto gap-2 z-10 lg:pb-4">
      <slot />
    </div>
  </div>
  <div
    class="flex flex-row {$$props.bgColor} gap-x-12 h-full z-0 rounded-lg w-full"
  >
    <img
      class="h-fit transition-transform object-cover self-end"
      src={$$props.phone_src}
      alt="{$$props.company} phone mockup"
    />
    <img
      class="h-fit transition-transform object-cover self-end"
      src={$$props.desktop_src}
      alt="{$$props.company} desktop mockup"
    />
  </div>
</div>
