<script lang="ts">
	export let srcset: { [size: string]: string };
	export let src: string = '';
	export let title: string = 'Video';
	export let poster: string;
</script>

<video muted id="clip" preload="auto" autoplay loop class={$$props.class} {poster}>
	{#if srcset}
		<source type="video/webm" {title} media="(min-width: 800px)" src={srcset['sm']} />

		<source type="video/webm" {title} media="(min-width: 799px)" src={srcset['md']} />
		<source type="video/webm" {title} media="(max-width: 799px)" src={srcset['lg']} />
	{:else}
		<source {title} {src} />
	{/if}
	Your Browser does not support our video types
</video>
