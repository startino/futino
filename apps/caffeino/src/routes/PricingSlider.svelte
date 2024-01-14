<script lang="ts">
	import { Slider } from '$lib/components/ui/slider';
	import { currencyFormatter } from '$lib/utils';
	const hourlyRate = 25.45;
	const cogs = 5.35;
	const markup = 1.4; // 40%
	const minHours = 1;
	const maxHours = 20;

	export let price: string;
	export let hours: number;
	export let sliderPercent: number;

	$: slider = [0];
	$: hours = Math.floor(
		((12000 / (slider[0] - 600)) * -1 - 20) * (maxHours / 100) * (1 - minHours / 100) + minHours
	);
	$: hours = Math.ceil(maxHours * sliderPercent + 0.0001); // The + 0.0001 is just to make the slider's min hours =0
	$: expenses = hours * hourlyRate + cogs;
	$: markedUp = expenses * markup;
	$: fees = markedUp * 0.0713 + 0.3;
	$: price = currencyFormatter.format(markedUp + fees);
	$: sliderPercent = slider[0] / 500;
	$: console.log(slider);
</script>

<Slider bind:value={slider} class="w-full" max={500} min={0} step={1} />
