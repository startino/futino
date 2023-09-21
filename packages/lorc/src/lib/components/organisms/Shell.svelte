<script lang="ts">
	// Props (regions)
	/** Apply arbitrary classes to the entire `#page` region. */
	export let regionPage: string = '';
	/** Apply arbitrary classes to the `header` slot container element */
	export let headerClass: string = 'z-10';
	/** Apply arbitrary classes to the `sidebarLeft` slot container element */
	export let sidebarLeftClass: string = 'w-auto';
	/** Apply arbitrary classes to the `sidebarRight` slot container element */
	export let sidebarRightClass: string = 'w-auto';
	/** Apply arbitrary classes to the `pageHeader` slot container element */
	export let pageHeaderClass: string = '';
	/** Apply arbitrary classes to the `pageContent` slot container element */
	export let pageContentClass: string = '';
	/** Apply arbitrary classes to the `pageFooter` slot container element */
	export let pageFooterClass: string = '';
	/** Apply arbitrary classes to the `footer` slot container element */
	export let footerClass: string = '';
	/** Apply prose typography classes
	 * @remark
	 * Default:
	 * 'prose prose-sm sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl  space-y-12';
	 */
	export let typographyClass: string =
		'max-w-none prose-a:no-underline  prose sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl  prose-main';

	// Reactive Classes
	$: classesBase = `${typographyClass} ${$$props.class ?? ''}`;
	$: classesHeader = `${headerClass}`;
	$: classesSidebarLeft = `flex-none overflow-x-hidden overflow-y-auto ${sidebarLeftClass}`;
	$: classesSidebarRight = `flex-none overflow-x-hidden overflow-y-auto ${sidebarRightClass}`;
	$: classesPageHeader = `${pageHeaderClass}`;
	$: classesPageContent = `${pageContentClass}`;
	$: classesPageFooter = `${pageFooterClass}`;
	$: classesFooter = `${footerClass}`;
</script>

<div id="shell" class=" h-full flex flex-col overflow-hidden {classesBase}">
	<!-- Slot: Header -->
	{#if $$slots.header}
		<slot name="header" />
	{/if}

	<!-- Content Area -->
	<div class="flex-auto h-full flex overflow-hidden">
		<!-- Slot: Sidebar (left) -->
		{#if $$slots.sidebarLeft}
			<aside id="sidebar-left" class={classesSidebarLeft}><slot name="sidebarLeft" /></aside>
		{/if}

		<!-- Page -->
		<div id="page" class="{regionPage} flex-1 overflow-x-hidden flex flex-col" on:scroll>
			<!-- Slot: Page Content (default) -->
			<main id="page-content" class="flex-auto flex {classesPageContent}"><slot /></main>
		</div>

		<!-- Slot: Sidebar (right) -->
		{#if $$slots.sidebarRight}
			<aside id="sidebar-right" class={classesSidebarRight}><slot name="sidebarRight" /></aside>
		{/if}
	</div>

	<!-- Slot: footer -->
	{#if $$slots.footer}
		<slot name="footer" />
	{/if}
</div>
