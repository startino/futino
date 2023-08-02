<script lang="ts">
	import { onMount } from 'svelte';

	export let finalValue = 6940;
	export let duration = 700;
	export let startValue = 0;

	let step = Math.ceil((finalValue - startValue) / duration);

	let element: HTMLHeadingElement;
	function animatedCounter() {
		let currentValue: number = startValue;
		const increment = (finalValue - startValue) / duration;
		const handle = setInterval(() => {
			if (currentValue < finalValue) {
				currentValue += step;
			} else {
				clearInterval(handle);
				currentValue = finalValue;
			}
			//console.log('current: ', currentValue);
			if (element != null) {
				element.textContent = String(currentValue);
			}
		}, duration / finalValue);
	}

	onMount(() => {
		animatedCounter();
	});
</script>

<h1 bind:this={element} class={$$props.class}>
	{finalValue}
</h1>
