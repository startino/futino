<script lang="ts">
  import "../app.pcss";
  import Footer from "$lib/components/organisms/Footer.svelte";
  import Header from "$lib/components/organisms/Header.svelte";
</script>

<Header />

<slot />

<Footer />
