<script lang="ts">
  import { Card } from "lorc";

  export let body: string;
  export let label: string;
</script>

<Card
  class="{$$props.class} col-span-2 grid grid-cols-3 w-full"
  size="max-w-none h-full"
  border="border border-surface-on"
>
  <p class="col-start-2 col-span-2 m-0 sm:m-0 pb-4 xl:pb-6 2xl:pb-12 pt-6">
    {body}
  </p>
  <h1 class="m-0 sm:m-0 uppercase whitespace-nowrap self-end">
    {label}
  </h1>
</Card>
