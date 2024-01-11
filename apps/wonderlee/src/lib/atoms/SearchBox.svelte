<script lang="ts">
  export let searchInput: string;
  import { Icon } from "@repo/deprecated-lorc";
</script>

<label for="search-field" class=" sr-only">Search</label>
<div
  class="relative max-w-3xl {$$props.class} flex flex-row items-center rounded-lg border border-primary drop-shadow-glow-sm placeholder-surface-on"
>
  <Icon
    icon="search"
    class="px-4 absolute my-auto h-fit pointer-events-none"
    fillColor="transparent"
  />

  <input
    type="text"
    id="search-field"
    bind:value={searchInput}
    class="block py-3 md:py-6 pl-12 w-full placeholder:title-medium md:placeholder:title-large placeholder:text-surface-on bg-surface/10 rounded-lg focus:ring-tertiary focus:border-tertiary"
    placeholder="Find an answer to your question..."
    on:input
  />
</div>
