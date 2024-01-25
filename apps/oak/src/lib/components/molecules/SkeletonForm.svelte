<script lang="ts">
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { fade } from 'svelte/transition';
</script>

<div class="flex flex-col items-start space-y-6" transition:fade>
	{#each [250, 300, 400, 250, 200, 350, 300] as inputHeight}
		<div class="space-y-3">
			<Skeleton class="h-4 w-[200px]" />
			<div class="flex place-items-center space-x-2">
				<Skeleton class="w-[{inputHeight}px] h-10" />
				<Skeleton class="h-10 w-10" />
			</div>
			<Skeleton class="h-3 w-[300px]" />
		</div>
	{/each}
</div>

<!-- For dynamic tailwind compiling: w-[200px] w-[250px] w-[300px] w-[350px] w-[400px] -->
