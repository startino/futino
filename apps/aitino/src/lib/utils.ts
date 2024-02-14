import { type ClassValue, clsx } from 'clsx';
import type { Edge, Node } from '@xyflow/svelte';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';
import { getContext as getSvelteContext, setContext as setSvelteContext } from 'svelte';
import { writable } from 'svelte/store';
import type { ContextKey, ContextMap, Maeve } from '$lib/types';
import { browser } from '$app/environment';

const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export function getPremadeInputsMap() {
	if (browser) {
		const inputStr = localStorage.getItem('premade-inputs');

		if (inputStr) {
			return JSON.parse(inputStr) as Record<string, string>;
		}
	}

	return null;
}

export function injectPremadeValues(str: string) {
	let result = str;
	const premadeInputsMap = getPremadeInputsMap();

	if (premadeInputsMap) {
		const matches = str.match(/\{\{(.*?)\}\}/g);

		if (!matches) return result;

		matches.forEach((m) => {
			if (Object.hasOwn(premadeInputsMap, m)) {
				result = result.replace(m, premadeInputsMap[m]);
			}
		});

		return result;
	}
}

export function getLocalMaeve() {
	let maeveStr: string | null = null;
	if (browser) {
		maeveStr = localStorage.getItem('maeve');
	}
	if (!maeveStr) return null;

	return JSON.parse(maeveStr) as Maeve;
}

export function getInitialNodes(maeve: Maeve): Node[] {
	const agentEncounter: Record<string, boolean> = {};

	return [
		...maeve.composition.prompts.map((v) => ({
			id: v.id,
			position,
			type: 'prompt',
			data: { ...v, title: writable(v.title), content: writable(v.content) }
		})),
		...maeve.composition.groups
			.map((g) => [
				...g.agents
					.filter((a) => !agentEncounter[a.instance_id])
					.map((a) => {
						agentEncounter[a.instance_id] = true;
						return {
							id: a.instance_id,
							type: 'agent',
							position,
							data: {
								...a,
								prompt: writable(a.prompt),
								full_name: writable(a.full_name),
								job_title: writable(a.job_title),
								model: writable(a.model)
							}
						};
					})
			])
			.flat()
	];
}

export function getInitialEdges(maeve: Maeve): Edge[] {
	let edgeId = -1;
	const receiver = maeve.composition.receiver;
	return [
		...maeve.composition.prompts.reduce((ac: Edge[], p) => {
			const edges: Edge[] = [...ac];
			edgeId++;
			if (receiver) {
				edges.push({
					id: 'e' + edgeId.toString(),
					source: p.id,
					target: receiver.instance_id,
					type: edgeType,
					animated: true
				});
			}
			return edges;
		}, []),
		...maeve.composition.groups.reduce((ac: Edge[], g) => {
			const edges: Edge[] = [...ac];

			g.agents.forEach((aSource) => {
				if (aSource.instance_id === g.communicator) {
					edgeId++;
					edges.push(
						...g.agents
							.filter((aTarget) => aSource.instance_id !== aTarget.instance_id)
							.map((aTarget) => {
								edgeId++;
								return {
									id: 'e' + edgeId.toString(),
									source: aSource.instance_id,
									target: aTarget.instance_id,
									type: edgeType,
									animated: true
								};
							})
					);
				}
			});

			return edges;
		}, [])
	];
}

export function setContext(key: ContextKey, value: ContextMap[typeof key]) {
	return setSvelteContext(key, value);
}

export function getContext(key: ContextKey) {
	return getSvelteContext<ContextMap[typeof key]>(key);
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;

	const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (style: Record<string, number | string | undefined>): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, '');
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};
