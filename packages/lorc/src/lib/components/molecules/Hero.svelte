<script lang="ts">
	import type { CssClasses } from '$lib/types';
	import Button from '../atoms/Button.svelte';

	export let bgImg: string = '';
	/** Provide classes to set the base typography styling. The default is: body-small text-primary-light dark:text-primary-dark*/
	export let typography: CssClasses = 'dark:prose-invert text-primary-light dark:text-primary-dark';
	/** Labels and hrefs of CTA buttons on the hero. Recommended 1-2.*/
	export let CTAButtons: {
		[label: string]: { href: string; secondary: boolean };
	} = {
		'CTA ONE': {
			href: '/',
			secondary: false,
		},
		'CTA TWO': {
			href: '/',
			secondary: true,
		},
	};

	/** Provide how you want the hero text and items to be positioned on the horizontal axis.*/
	export let justified: 'left' | 'center' | 'right' = 'center';

	let justifyClass = () => {
		switch (justified) {
			case 'left':
				return 'items-start text-left';
			case 'right':
				return 'items-end text-right';
			case 'center':
				return 'items-center text-center';
		}
	};
</script>

<section
	class="h-screen bg-[url('{bgImg}')] bg-center bg-cover w-full grid {typography} place-items-center">
	<div class="flex flex-col {justifyClass()} my-auto gap-6 mx-6">
		<h1 class="" style="margin: 0px">Lorem ipsum dolor sit amet.</h1>
		<h5 class="" style="margin: 0px">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quo.
		</h5>
		<div
			class="grid grid-cols-{Object.entries(CTAButtons)
				.length} gap-6 md:gap-8 mt-6 place-items-center w-fit">
			{#each Object.entries(CTAButtons) as [label, { href, secondary }]}
				<Button {secondary} {href}>
					<h6 class="" style="margin: 0px">{label}</h6>
				</Button>
			{/each}
		</div>
	</div>
</section>
