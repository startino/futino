<script lang="ts">
	import Icon from '../atoms/Icon.svelte';
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

	export let pages: { [key: string]: { [key: string]: string } } = {
		Explore: {
			Home: '/',
			About: '/'
		},
		Legal: {
			'Privacy Policy': '/',
			'Tems of Service': '/'
		},
		Support: {
			Skills: '/',
			FAQ: '/'
		},
		Company: {
			Careers: '/',
			Blog: '/'
		}
	};

	/**Provide the company's name as text. If the name */
	export let companyName: string = 'Company Name';

	// Props (base styles)
	/** Provide classes to set background color. */
	export let background: string = '';
	/** Provide classes to set border styles. The default is: md: md:border-primary/50 */
	export let border: string = ' border-outline';
	/** Provide classes to set padding. */
	export let padding: string = '';
	/** Provide classes to define a box shadow. */
	export let shadow: string = '';
	/** Provide classes to set base styling for gap spacing. The default is: gap-6*/
	export let gap: string = 'gap-6';
	/** Provide classes to set the base typography styling. The default is: body-small  text-primary*/
	export let typography: string = 'text-primary';
</script>

<footer
	class="lg:prose-md prose prose-invert prose-main max-w-none bg-background sm:prose-sm prose-a:no-underline"
>
	<div
		class="md:px-18 z-50 mx-auto flex w-full flex-col items-start justify-start justify-items-start gap-8 px-6 py-24 text-left md:flex-row lg:max-w-5xl xl:max-w-6xl"
	>
		<div
			class="lg:prose-md prose prose-invert prose-main flex w-full flex-col items-start gap-3 sm:prose-sm prose-a:no-underline"
		>
			<a class="" style="margin: 0" href="/">
				<Logo class="not-prose" />
				{#if companyName != 'Company Name'}
					<p class="m-0 my-auto flex">{companyName}</p>
				{/if}
			</a>
			<slot name="left" />
		</div>

		<div
			class="mt-3 grid w-full grid-cols-2 items-start justify-items-start gap-12 sm:mt-0 md:grid-cols-4"
		>
			{#each Object.entries(pages) as [category, links]}
				<div
					class="lg:prose-md prose prose-invert prose-main flex max-w-none flex-col gap-3 sm:prose-sm prose-a:no-underline"
				>
					<h6 class="m-0 mb-1 font-bold">
						{category}
					</h6>

					{#each Object.entries(links) as [name, href]}
						<a {href} class="m-0 hover:underline">
							<h6>
								{name}
							</h6>
						</a>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</footer>
