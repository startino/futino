import type { Node } from '@xyflow/svelte';
import type { Writable } from 'svelte/store';

export type ContextKey = keyof ContextMap;

export interface ContextMap {
	maeve: MaeveContext;
}

export interface MaeveContext {
	receiver: Writable<{ node: Node; targetCount: number } | null>;
}
