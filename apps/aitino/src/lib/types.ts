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
