<script lang="ts">
  import { Card } from "lorc";

  export let body: string;
  export let label: string;
</script>

<Card
  class="col-span-2 grid grid-cols-2 w-full"
  size="max-w-2xl max-h-96"
  border="border border-surface-on"
>
  <p class=" col-start-2">
    {body}
  </p>
  <h1 class="m-0 sm:m-0 uppercase whitespace-nowrap">
    {label}
  </h1>
</Card>
