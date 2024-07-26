<script lang="ts">
	export let value: string;
</script>

<input type="month" bind:value {...$$restProps} class="rounded-md border-input bg-nbackground" />
