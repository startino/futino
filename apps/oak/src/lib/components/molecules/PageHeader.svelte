<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import * as Command from '$lib/components/ui/command';
	import LucideIcon from '../atoms/LucideIcon.svelte';
	import { Button } from '../ui/button';
	import * as Avatar from '../ui/avatar';

	let searchBarValue: string = '';
</script>

<header class="antialiased">
	<nav class="bg-card border rounded-2xl m-4 px-4 py-4 ">
		<div class="flex flex-wrap items-center justify-between">
			<div class="flex items-center justify-start">
				<!-- <button
					id="toggleSidebar"
					aria-expanded="true"
					aria-controls="sidebar"
					class="mr-3 hidden cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 lg:inline dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 16 12"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h14M1 6h14M1 11h7"
						/>
					</svg>
				</button>
				<button
					aria-expanded="true"
					aria-controls="sidebar"
					class="mr-2 cursor-pointer rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700"
				>
					<svg
						class="h-[18px] w-[18px]"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
						><path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15"
						/></svg
					>
					<span class="sr-only">Toggle sidebar</span>
				</button> -->
				<Command.Root>
					<Command.Input placeholder="Type a command or search..." />
					<Command.List class="hidden">
					  <Command.Empty>No results found.</Command.Empty>
					  <Command.Group heading="Suggestions">
						<Command.Item>Calendar</Command.Item>
						<Command.Item>Search Emoji</Command.Item>
						<Command.Item>Calculator</Command.Item>
					  </Command.Group>
					  <Command.Separator />
					  <Command.Group heading="Settings">
						<Command.Item>Profile</Command.Item>
						<Command.Item>Billing</Command.Item>
						<Command.Item>Settings</Command.Item>
					  </Command.Group>
					</Command.List>
				  </Command.Root>
			</div>
			<div class="flex items-center gap-x-4 lg:order-2">
				<div class="grid grid-cols-2 gap-x-4">
					<Button class="w-full">
						<LucideIcon class="mr-2 " name="PlusCircle" />
						New Contract
					</Button>
					<Button class="w-full">
						<LucideIcon class="mr-2" name="PlusCircle" />
						New Bill
					</Button>
				</div>

				<Button variant="ghost" class="hover:animate-wiggle hover:bg-transparent" size="icon">
					<LucideIcon class="" name="Bell" />
				</Button>

				<Button variant="ghost" size="icon" class="rounded-full">
					<Avatar.Root class="not-prose transition-transform hover:scale-[1.05] ">
						<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
				</Button>
			</div>
		</div>
	</nav>
</header>
