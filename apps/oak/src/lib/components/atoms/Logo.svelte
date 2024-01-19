<script lang="ts">
	import type { CssClasses } from '../../types';

	export let height: CssClasses = 'h-8 w-8';
</script>

<!-- Not rounded, should be done in image with transparent background for logos -->
{#if $$props.color == 'primary'}
	<img
		src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=500"
		class="{$$props.class} {height} not-prose"
		alt="Logo"
	/>
{:else if $$props.color == 'secondary'}
	<img
		src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
		class="{$$props.class} {height} not-prose"
		alt="Logo"
	/>
{:else if $$props.color == 'accent'}
	<img
		src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=900"
		class="{$$props.class} {height} not-prose"
		alt="Logo"
	/>
{/if}
