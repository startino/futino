<script>
  import Prose from "../atoms/Prose.svelte";
</script>

<main
  class="{$$props.class} py-40 px-6 border-b shadow-2xl sm:px-6 md:px-8 border-primary/40 prose-headings:font-sans"
>
  <Prose size="xs">
    <article class="text-left max-w-7xl justify-items-center space-y-8 mx-auto">
      <slot />
    </article>
  </Prose>
</main>
