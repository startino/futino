<script lang="ts">
	import { fullFormatter, relativeFormatter } from '$lib/utils';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Separator } from '$lib/components/ui/separator';
	import * as Popover from '$lib/components/ui/popover';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Switch } from '$lib/components/ui/switch';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Calendar } from '$lib/components/ui/calendar';
	import {
		Archive,
		ArchiveX,
		Trash2,
		Clock,
		Reply,
		ReplyAll,
		Forward,
		EllipsisVertical
	} from 'lucide-svelte';
	import type { Lead } from '$lib/types';
	import * as api from '$lib/api';
	import type { UUID } from '$lib/types';

	export let lead: Lead | null;

	async function handlePublish() {
		console.log('Trying to publish');
		const res: boolean = await api.publishComment(lead?.id, lead?.comment);
		if (res) {
			console.log('Comment published');
		} else {
			console.log('Comment not published');
		}
	}
</script>

<div class="flex h-full flex-col">
	{#if lead}
		<div class="flex h-full flex-1 flex-col overflow-hidden">
			<div class="flex items-start p-4">
				<h1 class="bold text-xl">{lead.data.title}</h1>
				{#if lead.discovered_at}
					<div class="ml-auto text-xs text-muted-foreground">
						{relativeFormatter.format(new Date(lead.discovered_at))}
					</div>
				{/if}
			</div>
			<Separator />
			<div class="flex-1 overflow-y-auto whitespace-pre-wrap p-4 text-left text-sm">
				{lead.data.body}
			</div>
			<Separator class="mt-auto" />
			<div class="p-4">
				<form>
					<div class="grid gap-4">
						<Textarea
							class="h-64 p-4"
							placeholder={`Reply ${lead.id}...`}
							value={lead.comment}
							disabled={lead.status != 'under_review'}
						/>
						<div class="flex items-center">
							{#if lead.status == 'under_review'}
								<Button size="sm" variant="destructive" class="mr-auto">Irrelevant</Button>
								<Button
									size="sm"
									class="ml-auto"
									on:click={() => {
										handlePublish();
									}}>Publish</Button
								>
							{/if}
						</div>
					</div>
				</form>
			</div>
		</div>
	{:else}
		<div class="p-8 text-center text-muted-foreground">No lead selected</div>
	{/if}
</div>
