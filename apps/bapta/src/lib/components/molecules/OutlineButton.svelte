<div class={$$props.class}>
	<div
		class="relative overflow-hidden transition-all duration-300 delay-200 bg-transparent border-2 rounded-sm w-fit border-primary-dark/80 hover:border-primary-dark group ease hover:cursor-pointer">
		<span
			class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-4 border-opacity-50 border-primary-dark group-hover:w-full ease" />
		<span
			class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-4 border-opacity-50 border-primary-dark group-hover:w-full ease" />
		<span
			class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 border-opacity-50 border-primary-dark group-hover:h-full ease" />
		<span
			class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 border-opacity-50 border-primary-dark group-hover:h-full ease" />
		<span
			class="absolute inset-0 w-full h-full duration-300 delay-300 opacity-0 bg-primary-dark group-hover:opacity-50" />
		<div
			class="inline-flex transition-colors duration-300 delay-200 text-primary-dark group-hover:text-primary-dark ease">
			<slot />
		</div>
	</div>
</div>
