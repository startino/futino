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

	// Reactive Classes
	$: classesBase = `$ ${$$props.class ?? ''}`;
	$: classesHeader = `${headerClass}`;
	$: classesSidebarLeft = `flex-none overflow-x-hidden overflow-y-auto ${sidebarLeftClass}`;
	$: classesSidebarRight = `flex-none overflow-x-hidden overflow-y-auto ${sidebarRightClass}`;
	$: classesPageHeader = `${pageHeaderClass}`;
	$: classesPageContent = `${pageContentClass}`;
	$: classesPageFooter = `${pageFooterClass}`;
	$: classesFooter = `${footerClass}`;
</script>

<div id="shell" class="w-full h-full flex flex-col overflow-hidden {classesBase}">
	<!-- Slot: Header -->
	{#if $$slots.header}
		<header id="shell-header" class="flex-none {classesHeader}"><slot name="header" /></header>
	{/if}

	<!-- Content Area -->
	<div class="flex-auto w-full h-full flex overflow-hidden">
		<!-- Slot: Sidebar (left) -->
		{#if $$slots.sidebarLeft}
			<aside id="sidebar-left" class={classesSidebarLeft}><slot name="sidebarLeft" /></aside>
		{/if}

		<!-- Page -->
		<div id="page" class="{regionPage} flex-1 overflow-x-hidden flex flex-col" on:scroll>
			<!-- Slot: Page Header -->
			{#if $$slots.pageHeader}
				<header id="page-header" class="flex-none {classesPageHeader}">
					<slot name="pageHeader">(slot:header)</slot>
				</header>
			{/if}

			<!-- Slot: Page Content (default) -->
			<main id="page-content" class="flex-auto {classesPageContent}"><slot /></main>

			<!-- Slot: Page Footer -->
			{#if $$slots.pageFooter}
				<footer id="page-footer" class="flex-none {classesPageFooter}">
					<slot name="pageFooter">(slot:footer)</slot>
				</footer>
			{/if}
		</div>

		<!-- Slot: Sidebar (right) -->
		{#if $$slots.sidebarRight}
			<aside id="sidebar-right" class={classesSidebarRight}><slot name="sidebarRight" /></aside>
		{/if}
	</div>

	<!-- Slot: footer -->
	{#if $$slots.footer}
		<footer id="shell-footer" class="flex-none {classesFooter}"><slot name="footer" /></footer>
	{/if}
</div>
