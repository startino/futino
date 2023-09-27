<a
	href={$$props.href}
	class="flex flex-col h-full w-full text-left transition-all group hover:scale-105 duration-300 place-items-start rounded-lg shadow-lg shadow-surface bg-surface">
	<div class="flex shrink-0 h-80 w-full relative overflow-hidden bg-black rounded-md">
		<img
			src={$$props.thumbnail}
			alt="TOUR IMG"
			class="object-cover object-center h-full w-full rounded-t duration-500 ease-in-out group-hover:scale-105 md:opacity-70 group-hover:opacity-100 transition-all" />
	</div>
	<!--Title, Parks, and tags-->
	<div class="rounded-b flex flex-col gap-2 p-4 h-full">
		<h1 class="headline-small">{$$props.title}</h1>
		<div class="headline-small flex gap-6">
			<h1>4 &#9728;&#65039</h1>
			<h1>3 &#127769</h1>
		</div>
		<div class="flex flex-row flex-wrap gap-3 py-1">
			<div class="[&>*]:rounded-xl body-medium [&>*]:px-2 [&>*]:py-0.5 font-bold">
				<div class="bg-gradient-to-tr from-blue-800 to-teal-500">
					<h1 class="">Zanzibar</h1>
				</div>
			</div>
		</div>
	</div>
</a>
