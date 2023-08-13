<script lang="ts">
	export let activeTabValue = 0;
</script>

<label
	for={$$props.for}
	class="{$$props.class} flex flex-col md:flex-row rounded headline-medium md:display-medium cursor-pointer">
	{$$props.text}
	<slot />
</label>
<input
	type="radio"
	name={$$props.name}
	class="hidden peer/{$$props.for}"
	bind:group={activeTabValue}
	value={$$props.value}
	id={$$props.for} />
