<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import Container from '../atoms/Container.svelte';
	import Card from '../atoms/Card.svelte';
	import TestimonialCard from '../atoms/TestimonialCard.svelte';

	export let testimonials: {
		name: string;
		img: string;
		body: string;
		href: string;
	}[] = [
		{
			name: 'McGerth',
			img: 'favicon.png',
			body: 'Awesome people and even better products!',
			href: ''
		},
		{
			name: 'Conner',
			img: 'favicon.png',
			body: 'Awesome people and even better products!',
			href: ''
		}
	];
</script>

<div class="relative isolate pb-32 pt-24 sm:pt-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-xl text-center">
			<h2 class="text-lg font-semibold leading-8 tracking-tight">Testimonials</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-surface-on sm:text-4xl">
				We have worked with thousands of amazing people
			</p>
		</div>
		<Container
			class="mx-auto mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
		>
			<div class="space-y-8 xl:contents xl:space-y-0">
				<div class="space-y-8 xl:row-span-2">
					<TestimonialCard
						class="sm:col-span-2 xl:col-start-2 xl:row-end-1"
						name={testimonials[1].name}
						body={testimonials[1].body}
						href={testimonials[1].href}
						img={testimonials[1].img}
					/>
					<TestimonialCard
						class="sm:col-span-2 xl:col-start-2 xl:row-end-1"
						name={testimonials[1].name}
						body={testimonials[1].body}
						href={testimonials[1].href}
						img={testimonials[1].img}
					/>

					<!-- More testimonials... -->
				</div>
				<div class="space-y-8 xl:row-start-1">
					<TestimonialCard
						class="sm:col-span-2 xl:col-start-2 xl:row-end-1"
						name={testimonials[2].name}
						body={testimonials[2].body}
						href={testimonials[2].href}
						img={testimonials[2].img}
					/>

					<!-- More testimonials... -->
				</div>
			</div>
			<div class="space-y-8 xl:contents xl:space-y-0">
				<div class="space-y-8 xl:row-start-1">
					<TestimonialCard
						class="sm:col-span-2 xl:col-start-2 xl:row-end-1"
						name={testimonials[0].name}
						body={testimonials[0].body}
						href={testimonials[0].href}
						img={testimonials[0].img}
					/>
					<TestimonialCard
						class="sm:col-span-2 xl:col-start-2 xl:row-end-1"
						name={testimonials[1].name}
						body={testimonials[1].body}
						href={testimonials[1].href}
						img={testimonials[1].img}
					/>

					<!-- More testimonials... -->
				</div>
				<div class="space-y-8 xl:row-span-2">
					<TestimonialCard
						class="sm:col-span-2 xl:col-start-2 xl:row-end-1"
						name={testimonials[2].name}
						body={testimonials[2].body}
						href={testimonials[2].href}
						img={testimonials[2].img}
					/>

					<!-- More testimonials... -->
				</div>
			</div>
		</Container>
	</div>
</div>
