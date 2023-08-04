<input
	type="radio"
	name={$$props.name}
	class="hidden peer/{$$props.for}"
	value={$$props.for}
	id={$$props.for} />
<label
	for={$$props.for}
	class="{$$props.class} flex flex-col md:flex-row gap-x-1 rounded px-3 py-2 cursor-pointer peer-checked/{$$props.for}:border">
	{$$props.text}
	<slot />
</label>
