import { type ClassValue, clsx } from 'clsx';
import { parseDate, CalendarDate } from '@internationalized/date';
import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
import type { TransitionConfig } from 'svelte/transition';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Context, ReportContracts, ReportDataTableRow } from '$lib/types';
import { getContext as getSvelteContext, setContext as setSvelteContext } from 'svelte';
import type { Database } from '$lib/server/supabase.types';
import { emails } from '$lib/emails';
import * as PDFJS from 'pdfjs-dist';
import * as pdfWorker from 'pdfjs-dist/build/pdf.worker.mjs';
import type { createSMPTransport } from '../hooks.server';
import { PUBLIC_SMTP_USER } from '$env/static/public';

PDFJS.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.mjs';

export const pdfjsLib = PDFJS;

export const roundToPenny = (value: number): number => parseFloat(value.toFixed(2));

export const timestampToISODate = (timestamp: number): string => {
	const date = new Date(timestamp);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};

export const arrayToCSV = (data: any[]) => {
	const csvRows = [];
	const headers = Object.keys(data[0]);
	csvRows.push(headers.join(','));

	for (const row of data) {
		const values = headers.map((header) => {
			const escaped = ('' + row[header]).replace(/"/g, '\\"');
			return `"${escaped}"`;
		});
		csvRows.push(values.join(','));
	}

	return csvRows.join('\n');
};

export const getReportRows = (
	data: ReportContracts,
	period: CalendarDate
): ReportDataTableRow[] => {
	return data
		.filter((c) => period.compare(parseDate(c.start_date)) >= 0)
		.map((c) => {
			const billedAmount = c.bills
				.filter(
					(b) =>
						b.posting_period &&
						parseDate(b.posting_period).compare(period) <= 0 &&
						b.status === 'approved'
				)
				.reduce((prev, curr) => prev + curr.amount, 0);

			let elapsedMonths: number;

			if (
				period.compare(parseDate(c.end_date)) <= 0 &&
				period.compare(parseDate(c.start_date)) >= 0
			) {
				elapsedMonths = getMonthsDifference(c.start_date, period.toString());
			} else if (period.compare(parseDate(c.end_date)) > 0) {
				elapsedMonths = getMonthsDifference(c.start_date, c.end_date);
			} else {
				elapsedMonths = 0;
			}

			const totalMonths = getMonthsDifference(c.start_date, c.end_date);

			let accrualBalance = 0;

			accrualBalance =
				(elapsedMonths / (totalMonths === 0 ? 1 : totalMonths)) * c.amount - billedAmount;

			return { ...c, billedAmount, accrualBalance, openAmount: c.amount - billedAmount };
		});
};

export const sendEmailNotif = async <K extends keyof typeof emails>(
	type: K,
	option: {
		context: Parameters<(typeof emails)[K]>[0];
		subject: string;
		receiverProfileId: string;
		smtp: ReturnType<typeof createSMPTransport>;
		client: SupabaseClient<Database>;
	}
) => {
	if (!option.receiverProfileId) {
		return;
	}
	const { context, client, receiverProfileId, subject, smtp } = option;
	const {
		data: { user }
	} = await client.auth.admin.getUserById(receiverProfileId);
	smtp.sendMail({
		from: `"Oak" <${PUBLIC_SMTP_USER}>`,
		to: user.email,
		subject,
		html: emails[type](context as any)
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
	let multiplier: 1 | -1 = 1;

	if (start.compare(end) > 0) {
		multiplier = -1;
		[start, end] = [end, start];
	}

	const yearDifference = end.year - start.year;
	const monthDifference = end.month - start.month;

	let difference = (yearDifference * 12 + monthDifference) * multiplier;

	if (start.year === end.year && start.month === end.month) {
		const lastDayOfMonth = new Date(end.year, end.month, 0).getDate();
		if (start.day === 1 && end.day === lastDayOfMonth) {
			difference = multiplier;
		}
	}

	return difference;
};

export const toDateString = (date: Date) => date.toLocaleDateString('en-US');

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
