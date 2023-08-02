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

<a
	href="#_"
	class="relative px-5 py-3 overflow-hidden font-medium bg-transparent border rounded-lg shadow-inner border-primary-dark/80 text-primary-dark group {$$props.class}">
	<span
		class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-primary-dark group-hover:w-full ease" />
	<span
		class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-primary-dark group-hover:w-full ease" />
	<span
		class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 border-primary-dark group-hover:h-full ease" />
	<span
		class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 border-primary-dark group-hover:h-full ease" />
	<span
		class="absolute inset-0 w-full h-full duration-300 delay-300 rounded-sm opacity-0 bg-primary-dark group-hover:opacity-100" />
	<span
		class="relative transition-colors duration-300 delay-200 group-hover:text-primary-on-dark ease"
		>Button Text</span>
</a>
<a
	href="#_"
	class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
	<span
		class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease" />
	<span
		class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease" />
	<span
		class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
	<span
		class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
	<span
		class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100" />
	<span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease"
		>Button Text</span>
</a>
