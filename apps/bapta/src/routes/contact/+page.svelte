<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import mapbox from 'mapbox-gl';
	import { MessageCircle } from 'lucide-svelte';
	import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css';

	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import ContactForm from '$lib/components/organisms/ContactForm.svelte';
	import FaqSection from '$lib/components/organisms/FAQSection.svelte';
	import safariFaq from '$lib/components/tsData/safariFaq';

	const { Map, Marker } = mapbox;

	let mapContainer;

	onMount(() => {
		const lng = 36.561441;
		const lat = -3.367807;
		const initialState = { lng, lat, zoom: 12 };

		const map = new Map({
			container: mapContainer,
			accessToken:
				'pk.eyJ1IjoibmF6aWYiLCJhIjoiY2pmOGZjZGRpMGpwYjQ0bG51cWhkaDQ5NiJ9.M99Kkj88FxSIrkxesKt0OQ',
			style: `mapbox://styles/mapbox/outdoors-v11`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});

		new Marker().setLngLat([lng, lat]).addTo(map);
	});
</script>

<svelte:head>
	<title>Bapta - Contact Us</title>
</svelte:head>

<!--Hero-->
<div
	class="inner-section card-shadow h-screen max-h-[1000px] grid-rows-2 place-items-center border-b border-secondary/40 bg-contact bg-cover bg-center object-contain px-10 pt-56 shadow-lg shadow-background lg:grid-cols-2 lg:px-20 xl:px-40"
>
	<div
		class="flex h-fit max-w-xl flex-col items-center self-center rounded-lg bg-surface/90 px-8 py-12 shadow-2xl drop-shadow-2xl md:px-14"
	>
		<h1 class="display-medium font-bold text-primary">Connect With Bapta</h1>
		<h1 class="body-large pb-4">Bapta at Your Service, to Provide the Best Service</h1>

		<div class="mx-auto grid justify-items-center gap-4">
			<OutlineButton href="/contact#form">
				<h1 class="title-medium md:title-large px-4 py-2">Contact Us</h1>
			</OutlineButton>
			<a
				href="https://wa.me/+255757755174"
				class="flex items-center gap-2 text-secondary hover:underline"
			>
				Text Us On WhatsApp <MessageCircle />
			</a>
		</div>
	</div>
</div>

<div id="form" class="inner-section border-b border-primary/40 shadow-2xl">
	<!--Contact Section-->
	<div class="xs:mx-4 mx-10 my-20 grid gap-6 sm:mx-10 md:mx-20 md:grid-cols-2 lg:mx-32">
		<div class="flex max-w-xl flex-col space-y-6 self-start rounded-xl bg-surface px-10 py-10">
			<h3 class="headline-medium text-left font-bold text-primary">Get in touch.</h3>
			<h4 class=" my-auto text-left text-lg font-thin text-secondary">
				Feel free to contact us regarding any questions or requests. We'll get back to you shortly.
			</h4>
		</div>
		<div class="w-full md:row-span-2">
			<ContactForm />
		</div>
		<div class="absolute mx-auto aspect-video w-full rounded-lg" bind:this={mapContainer} />
	</div>
</div>

<div class="my-20">
	<FaqSection faqs={safariFaq} />
</div>
