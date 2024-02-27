<script lang="ts">
	import Logo from '../atoms/Logo.svelte';

	// Props
	/**Provide the list of page links you'd like to put in the header.
	 * @remarks
	 * Type must be { name: string; href: string }[].
	 * @example
	 * [{
	 * name: 'Home',
	 * href: '/home',
	 * }]
	 * */

	export const pages: { [key: string]: string } = {
		Home: '/',
		About: '/'
	};

	/** Provide the company's name as text. If the name */
	export const companyName: string = 'Company Name';

	// Props
	/** Provide classes to set border styles. The default is: md: md:border-primary/50 */
	export const border: string = ' border-outline';
</script>

<footer
	class="lg:prose-md prose prose-invert prose-main max-w-none sm:prose-sm prose-a:no-underline"
>
	<div class="md:px-18 mx-auto px-6 lg:max-w-5xl xl:max-w-6xl">
		<div
			class="z-50 flex h-full w-full flex-col items-start border-b pb-6 pt-12 text-left md:flex-row md:items-center {border} mx-auto justify-start justify-items-start gap-8 lg:max-w-5xl xl:max-w-6xl"
		>
			<a class="not-prose flex w-full items-start gap-3" href="/">
				<Logo />
				<p class="m-0 my-auto flex">{companyName}</p>
			</a>

			<div class="mt-3 flex w-fit flex-row justify-items-center gap-12 justify-self-center sm:mt-0">
				{#each Object.entries(pages) as [name, href]}
					<a {href} class="m-0 hover:underline">
						<h6>
							{name}
						</h6>
					</a>
				{/each}
			</div>
		</div>

		<div class="my-6 block text-left md:text-center">
			Unpublished © 2023
			<a href="https://futi.no" class="m-0 hover:underline"> Futino™ </a>
		</div>
	</div>
</footer>
