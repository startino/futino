<script lang="ts">
	export let value: string;
	export let placeholder: string;
	export let label: string;
	export let textArea: boolean = false;
	export let required: boolean = false;
</script>

<div class="group relative mx-1.5 mb-8 h-fit w-full overflow-visible {textArea ? 'h-full' : ''}">
	{#if !textArea}
		<label
			for={label.toLowerCase()}
			class=" {value
				? 'text-surface-on -top-1/2 left-0 -translate-y-5 font-bold'
				: 'left-3 top-1/2 font-normal'} text-surface-on group-hover:text-surface-on absolute block -translate-y-1/2 transition-all duration-[400ms] ease-in-out group-hover:-top-1/2 group-hover:left-0 group-hover:-translate-y-5 group-hover:font-bold"
			>{label} {required ? '*' : ''}</label
		>
		<div class="pointer-events-none absolute h-full w-full overflow-hidden">
			<h3
				class="text-surface-on pointer-events-none invisible absolute -left-1/2 top-1/2 -translate-y-1/2 text-left transition-all duration-[400ms] ease-out group-hover:visible group-hover:left-3 group-hover:right-auto"
			>
				{#if !value}
					{placeholder}
				{/if}
			</h3>
		</div>
		<input
			{required}
			name={label.toLowerCase()}
			bind:value
			class="text-surface-on bg-surface/50 focus:shadow-glow focus:shadow-tertiary/20 h-fit w-full appearance-none rounded border border-primary px-3 py-3 leading-tight focus:outline-none"
		/>
	{:else}
		<label
			for={label.toLowerCase()}
			class="{value
				? 'text-surface-on -top-1 left-0 -translate-y-full font-bold'
				: 'left-3 top-2.5 font-normal'} text-surface-on group-hover:text-surface-on absolute block transition-all duration-[400ms] ease-in-out group-hover:-top-1 group-hover:left-0 group-hover:-translate-y-full group-hover:font-bold"
			>{label} {required ? '*' : ''}</label
		>
		<div class="pointer-events-none absolute h-full w-full overflow-hidden">
			<h3
				class="not-prose text-surface-on pointer-events-none invisible absolute -left-1/2 top-0 text-left transition-all duration-[400ms] ease-out group-hover:visible group-hover:left-3 group-hover:right-auto"
			>
				{#if !value}
					{placeholder}
				{/if}
			</h3>
		</div>
		<textarea
			id="message"
			required
			rows="4"
			name="message"
			bind:value
			class="text-surface-on bg-surface/50 focus:shadow-glow focus:shadow-tertiary/20 h-full w-full appearance-none rounded border border-primary px-3 py-3 leading-tight focus:outline-none"
		/>
	{/if}
</div>
