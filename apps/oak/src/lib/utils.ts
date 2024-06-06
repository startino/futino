import { type ClassValue, clsx } from 'clsx';
import { parseDate } from '@internationalized/date';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';
import type { SupabaseClient, PostgrestError } from '@supabase/supabase-js';
import type { Context, EmailContextMap } from '$lib/types';
import { getContext as getSvelteContext, setContext as setSvelteContext } from 'svelte';
import type { Tables, Database } from '$lib/server/supabase.types';
import * as PDFJS from 'pdfjs-dist';
import * as pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs';
import type { createSMPTransport } from '../hooks.server';
import { PUBLIC_SMTP_USER } from '$env/static/public';

PDFJS.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.mjs';

export const pdfjsLib = PDFJS;

export const sendEmailNotif = async <K extends keyof EmailContextMap>(
	type: K,
	option: {
		context: EmailContextMap[K];
		subject: string;
		receiverProfileId: string;
		smtp: ReturnType<typeof createSMPTransport>;
		client: SupabaseClient<Database>;
	}
) => {
	const { context, client, receiverProfileId, subject, smtp } = option;
	const {
		data: { user }
	} = await client.auth.admin.getUserById(receiverProfileId);
	smtp.sendMail({
		template: type,
		from: `"Oak" <${PUBLIC_SMTP_USER}>`,
		to: user.email,
		subject,
		context
	});
};

export const renderPDF = async (pdf: PDFJS.PDFDocumentProxy, container: HTMLElement) => {
	for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
		const canvas = document.createElement('canvas');
		const page = await pdf.getPage(pageNum);

		let viewport = page.getViewport({ scale: 1 });
		const scale = container.clientWidth / viewport.width;
		viewport = page.getViewport({ scale });

		canvas.width = viewport.width;
		canvas.height = viewport.height;

		const context = canvas.getContext('2d');
		const renderContext = {
			canvasContext: context,
			viewport: viewport
		};

		page.render(renderContext);
		container.appendChild(canvas);
	}
};

export const getMonthsDifference = (startStr: string, endStr: string) => {
	let start = parseDate(startStr);
	let end = parseDate(endStr);
	let multiplier = 1;

	if (start.compare(end) > 0) multiplier = -1;

	const yearDifference = end.year - start.year;
	const monthDifference = end.month - start.month;

	return (yearDifference * 12 + monthDifference) * multiplier;
};

export const toDateString = (date: Date) => date.toLocaleDateString('en-us');

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
