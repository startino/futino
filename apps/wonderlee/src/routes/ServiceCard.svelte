<script lang="ts">
  import { Card, Prose } from "lorc";

  export let body: string;
  export let label: string;
  export let src: string;
</script>

<Card
  class="{$$props.class}  grid gap-x-4 grid-cols-3 w-full bg-surface/10 md:gap-y-0 pt-6"
  size="max-w-none h-full "
  border="border border-surface-on"
>
  <img
    {src}
    alt=""
    class="w-full aspect-[0.8] sm:aspect-[1] self-end md:hidden object-cover not-prose rounded-md mt-1"
  />
  <p
    class="col-span-2 col-start-2 m-0 sm:m-0 prose-base sm:prose-lg leading-tight md:prose-xl lg:prose-2xl xl:prose-2xl"
  >
    {body}
  </p>
  <h1
    class="m-0 sm:m-0 uppercase whitespace-nowrap self-end pt-4 xl:pt-6 2xl:pt-12"
  >
    {label}
  </h1>
</Card>
