import type { Node } from '@xyflow/svelte';
import type { Writable } from 'svelte/store';

import type { Variant } from '$lib/components/ui/button';

export interface Maeve {
	instance_id: string;
	composition: {
		receiver: {
			instance_id: string;
		} | null;
		prompts: MaevePrompt[];
		groups: MaeveGroup[];
	};
}

export type MaevePrompt = {
	id: string;
	title: string;
	content: string;
	position: {
		x: number;
		y: number;
	};
};

export type MaeveGroup = {
	communicator: string;
	agents: {
		prompt: string;
		full_name: string;
		job_title: string;
		model: string;
		unique_id: string;
		instance_id: string;
		position: {
			x: number;
			y: number;
		};
	}[];
};

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
}
