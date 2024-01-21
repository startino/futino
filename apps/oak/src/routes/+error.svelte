<script>
    export let error;
</script>

<main class="flex flex-col items-center justify-center h-screen font-sans">
    <h1 class="text-2xl mb-4">Error</h1>
    <p class="text-red-500 text-lg">{error.message}</p>
</main>