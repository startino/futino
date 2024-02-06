<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';

	// export let name: 'maeve' | 'agent' | 'workflow';
</script>

<div class="py-4">
	<Tabs.Root value="personal" class="h-screen max-h-[600px]">
		<Tabs.List class="sticky grid w-full grid-cols-2">
			<Tabs.Trigger value="personal">Personal</Tabs.Trigger>
			<Tabs.Trigger value="community">Community</Tabs.Trigger>
		</Tabs.List>
		<Input class="sticky my-6" placeholder="Search..." />
		<Tabs.Content value="personal">
			<ul class="h-full py-6">
				<li>
					<article class="flex items-center gap-6 text-sm">
						<div class="flex items-center gap-4">
							<Avatar.Root>
								<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
								<Avatar.Fallback>CN</Avatar.Fallback>
							</Avatar.Root>
							<div class="grid">
								<h2 class="font-bold">Name</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit
									vestibulum metus et tempus. Curabitur convallis, lacus vitae pellentesque tempus,
									ligula urna pulvinar lorem, eu porttitor quam sapien quis velit.
								</p>
							</div>
						</div>
						<p>
							Lorem ipsum (i), Dolor Sit (i), Consectetur Adipiscing (i), Praesent Suscipit (i),
							Vestibulum Metus (i), Curabitur Convallis (i),
						</p>
						<Button>LOAD</Button>
					</article>
				</li>
			</ul>
		</Tabs.Content>
		<Tabs.Content value="community">(same here...)</Tabs.Content>
	</Tabs.Root>
</div>
