<script lang="ts">
	import { Slider as SliderPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	type $$Props = SliderPrimitive.Props;

	let className: $$Props['class'] = undefined;
	export let value: $$Props['value'] = [0];
	export { className as class };
</script>

<SliderPrimitive.Root
	bind:value
	class={cn('relative flex w-full touch-none select-none items-center', className)}
	{...$$restProps}
>
	<span class="relative h-3 md:h-4 lg:h-5 w-full grow overflow-hidden rounded-full bg-surface-on">
		<SliderPrimitive.Range class="absolute h-full bg-primary" />
	</span>
	<SliderPrimitive.Thumb
		class="h-5 aspect-square md:h-6 lg:h-7 rounded-3xl border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
	/>
	<svg
		class="absolute -z-10"
		height="20px"
		width="20px"
		version="1.1"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 0 511.6 511.6"
		xml:space="preserve"
		fill="#000000"
		><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
			id="SVGRepo_tracerCarrier"
			stroke-linecap="round"
			stroke-linejoin="round"
		/><g id="SVGRepo_iconCarrier">
			<g>
				<path
					style="fill:#8D6E63;"
					d="M290.2,503.6c-11.2,2.4-22.8,4-34.4,4c-108.4,0-196-112.8-196-252c0-112.4,57.2-207.6,136.4-240 c8-3.2,16.4-6,25.2-8c-13.2,26.8-19.2,55.6-19.2,90c0,75.6,29.6,112.4,61.2,151.6c32.4,40,65.6,81.6,65.6,164.4 c0,30.4-4.4,57.2-14,82C307.4,498.8,298.6,501.6,290.2,503.6z"
				/>
				<path
					style="fill:#8D6E63;"
					d="M255.8,3.6c108.4,0,196,112.8,196,252c0,112.4-57.2,207.6-136.4,240c9.6-24.8,14-51.6,14-82 c0-82.4-33.6-124-65.6-164c-31.6-39.2-61.2-76.4-61.2-151.6c0-34.4,6-63.2,19.2-90C232.6,5.2,244.2,3.6,255.8,3.6z"
				/>
			</g>
			<path
				d="M255.8,511.6c-110.4,0-200-114.8-200-256C55.8,144,111.8,46,194.6,12c8.4-3.6,17.2-6.4,26-8l0,0c11.6-2.8,23.6-4,35.2-4 c110.4,0,200,114.8,200,256c0,111.6-56,209.6-138.8,243.6c-8.4,3.6-17.2,6.4-26,8C279.4,510,267.8,511.6,255.8,511.6z M222.2,11.6 c-8.4,2-16.4,4.4-24.4,7.6c-80,32.8-134,127.6-134,236.4c0,136.8,86,248,192,248c11.2,0,22.4-1.2,33.6-3.6c8.4-2,16.4-4.4,24.4-7.6 c80-32.8,134-127.6,134-236.4c0-136.8-86-248-192-248C244.6,7.6,233.4,9.2,222.2,11.6L222.2,11.6z"
			/>
			<path
				d="M315.4,499.6c-0.4,0-0.8,0-1.6-0.4c-2-0.8-3.2-3.2-2.4-5.2c9.2-24,13.6-50.4,13.6-80.8c0-81.2-32.8-122-64.8-161.6 c-32-40-62-77.2-62-154.4c0-35.2,6.4-64.4,19.6-91.6c0.8-2,3.2-2.8,5.2-2s2.8,3.2,2,5.2c-12.8,26.4-18.8,54.4-18.8,88.4 c0,74,29.2,110.4,60.4,149.2c32.8,40.8,66.8,82.8,66.8,166.8c0,31.2-4.8,58.4-14,83.6C318.6,498.8,317,499.6,315.4,499.6z"
			/>
			<path
				d="M182.2,101.6c-2.4,0-4-1.6-4-4c0-31.2,4.8-58.4,14-83.6c0.8-2,3.2-3.2,5.2-2.4c2,0.8,3.2,3.2,2.4,5.2 c-9.2,24-13.6,50.4-13.6,80.4C186.2,100,184.6,101.6,182.2,101.6z"
			/>
			<path
				d="M290.2,507.6c-0.4,0-1.2,0-1.6-0.4c-2-0.8-2.8-3.2-2-5.2c12.8-26.4,18.8-54.4,18.8-88.4c0-74-29.2-110.4-60.4-149.2 c-23.6-29.2-47.6-59.2-59.2-105.2c-0.4-2,0.8-4.4,2.8-4.8s4.4,0.8,4.8,2.8c11.2,44,34.8,73.6,57.6,102c32,40,62.4,77.6,62.4,154.4 c0,35.2-6.4,64.4-19.6,92C293,506.8,291.8,507.6,290.2,507.6z"
			/>
		</g></svg
	>
</SliderPrimitive.Root>
