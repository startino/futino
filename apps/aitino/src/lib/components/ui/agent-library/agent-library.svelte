<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="py-4">
	<Tabs.Root value="personal-agents" class="h-screen max-h-[600px]">
		<Tabs.List class="sticky grid w-full grid-cols-2">
			<Tabs.Trigger value="personal-agents">Personal</Tabs.Trigger>
			<Tabs.Trigger value="community-agents">Community</Tabs.Trigger>
		</Tabs.List>

		<Tabs.Content value="personal-agents">
			<div class="grid gap-6">
				<Input class="sticky" placeholder="Search for an agent" />
				<Button class="mx-auto block uppercase">Create from scratch</Button>
				<ul class="h-full py-6">
					<li>
						<article class="flex items-center gap-6 text-sm">
							<div class="flex items-center gap-4">
								<Avatar.Root>
									<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
									<Avatar.Fallback>CN</Avatar.Fallback>
								</Avatar.Root>
								<div class="grid">
									<h2 class="font-bold">Name of Agent</h2>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit
										vestibulum metus et tempus. Curabitur convallis, lacus vitae pellentesque
										tempus, ligula urna pulvinar lorem, eu porttitor quam sapien quis velit.
									</p>
								</div>
							</div>
							<Button>LOAD</Button>
						</article>
					</li>
				</ul>
			</div>
		</Tabs.Content>
	</Tabs.Root>
</div>
