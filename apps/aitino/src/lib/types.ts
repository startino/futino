import type { Node } from '@xyflow/svelte';
import type { Writable } from 'svelte/store';

import type { Variant } from '$lib/components/ui/button';
import type { Tables } from '$lib/supabase.types';

export type Maeve = Tables<'maeve_nodes'>;

export type PanelAction = {
	name: string;
	buttonVariant: Variant;
	onclick?: (e: Event) => void;
	isCustom?: boolean;
};

export type ContextKey = keyof ContextMap;

export interface ContextMap {
	maeve: MaeveContext;
}

export interface MaeveContext {
	receiver: Writable<{ node: Node; targetCount: number } | null>;
	count: Writable<{ agents: number; prompts: number }>;
}

export type Categories = 'multi-agents' | 'automation' | 'ai' | 'problem-solving'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}

export type MarkdownMetadata = {
    title?: string;
    date?: string;
    description?: string;
    tags?: string[];
    author?: string;
	published?: boolean;
	timeToRead?: number;

}
