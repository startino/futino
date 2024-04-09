<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import Icon from '../atoms/Icon.svelte';
</script>

<footer class="{$$props.class} border-t border-green-600/10 p-6 pt-12">
	<div
		class="px-auto md:px-auto sm:flex sm:items-center sm:justify-between md:px-10 lg:px-20 xl:px-40"
	>
		<Logo />
		<ul
			class="text-background-on mb-6 grid grid-cols-4 place-items-center space-x-6 text-sm sm:mb-0"
		>
			<li>
				<a
					class="hover:text-tertiary mx-auto inline text-green-600"
					href="https://www.instagram.com/ggsoccercamps/"
				>
					<Icon icon="instagram" height="38" width="38" />
				</a>
			</li>
			<li>
				<a
					class="hover:text-tertiary mx-auto inline text-green-600"
					href="https://www.facebook.com/goodgamesoccercamps"
				>
					<Icon icon="facebook" height="42" width="42" fillColor="DarkSlateBlue" />
				</a>
			</li>
			<!--<li>
				<a
					class="inline  text-green-600 hover:text-tertiary mx-auto"
					href=""
				>
					<Icon icon="phone" height="38" width="38" fillColor="DarkSlateBlue" />
				</a>
			</li>
			<li>
				<a
					class="inline  text-green-600 hover:text-tertiary mx-auto"
					href=""
				>
					<Icon icon="email" height="42" width="42" fillColor="FireBrick" />
				</a>
			</li>-->
		</ul>
	</div>
	<hr class="my-6 border-green-600/10 sm:mx-auto lg:my-8" />
	<span class="text-background-on block text-sm sm:text-center">
		©2023. All Rights Reserved.
		<a href="https://ggsoccer.futi.no/" class="link hover: hover:underline"> Good Game Soccer™ </a>
	</span>
</footer>
