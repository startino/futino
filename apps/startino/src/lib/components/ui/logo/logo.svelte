<script lang="ts">
	export let size: string = 'h-9 w-9';

	export let wordmark: boolean = false;
</script>

<div class="flex flex-row place-items-center gap-3">
	{#if wordmark}
		<img src="/wordmark.png" class="{$$props.class} not-prose" alt="STARTINO" />
	{:else}
		<img src="/icon.png" class="{$$props.class} {size} not-prose" alt="Startino Icon" />
	{/if}
</div>
