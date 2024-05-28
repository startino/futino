import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';
import type { SupabaseClient, PostgrestError } from '@supabase/supabase-js';
import type { Context } from '$lib/types';
import { getContext as getSvelteContext, setContext as setSvelteContext } from 'svelte';
import type { Tables, Database } from '$lib/server/supabase.types';
import * as PDFJS from 'pdfjs-dist';
import * as pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs';

PDFJS.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.mjs';

export const pdfjsLib = PDFJS;

export const findApprover = async (
	currentProfile: Tables<'profiles'>,
	amount: number,
	supabase: SupabaseClient<Database>
): Promise<{ approver: Tables<'profiles'> | null; error: PostgrestError | null }> => {
	if (currentProfile.roles.includes('signer')) return { approver: currentProfile, error: null };

	if (!currentProfile.approver_id) {
		const { data: signer, error } = await supabase
			.from('profiles')
			.select()
			.contains('roles', ['signer']);
		if (error) return { approver: null, error };

		if (signer && signer[0]) {
			return { approver: signer[0], error: null };
		}
		return { approver: null, error: null };
	}

	const { data: approver, error } = await supabase
		.from('profiles')
		.select()
		.eq('id', currentProfile.approver_id)
		.single();

	if (error) return { approver: null, error };

	if (amount <= approver.approval_threshold) {
		return { approver, error: null };
	} else {
		return await findApprover(approver, amount, supabase);
	}
};

export const formatAmount = (value: number) =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(value);

export function setContext<K extends keyof Context>(key: K, value: Context[K]) {
	return setSvelteContext(key, value);
}

export function getContext<K extends keyof Context>(key: K): Context[K] {
	return getSvelteContext<Context[K]>(key);
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
