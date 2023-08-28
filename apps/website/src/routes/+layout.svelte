<script lang="ts">
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Header from '$lib/components/organisms/Header.svelte';
	import '../app.postcss';
</script>

<Header />
<slot />
<Footer />
