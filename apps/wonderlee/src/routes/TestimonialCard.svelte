<script lang="ts">
  import { Card, Prose, Icon } from "lorc";
  export let name: string = "no name provided";
  export let body: string = "no body provided";
  export let href: string = "no link";
  export let img: string = "no img";
</script>

<Card
  class="{$$props.class} bg-surface/40 hover:bg-surface/70 transition-all duration-300"
  {href}
  target="_blank"
  border="border"
  size="max-w-none h-full w-full"
>
  <figure class="m-0 sm:m-0 flex flex-col gap-4 h-full not-prose">
    <blockquote class="relative">
      <Icon icon="quotation-mark" class="mb-2" height="32" width="32" />
      <Prose>
        <p class="m-0 sm:m-0 text-surface-on tracking-tight leading-snug">
          {body}
        </p>
      </Prose>
    </blockquote>
    <figcaption
      class="flex flex-row gap-x-3 items-center justify-self-end mt-auto not-prose"
    >
      <img class="h-10 w-10 flex-none rounded-full" src={img} alt="" />
      <Prose>
        <h3 class="m-0 sm:m-0">{name}</h3>
      </Prose>
    </figcaption>
  </figure>
</Card>
