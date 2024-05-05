import { z } from 'zod';

export const budgetOptions = [
	'less than $4,000',
	'$4,000 - $8,000',
	'$8,000 - $16,000',
	'$16,000 - $32,000',
	'$32,000 - $50,000',
	'more than $50,000'
];

export const sourceOptions = ['Google', 'LinkedIn', 'Reddit', 'Someone else', 'Clutch', 'Other'];

export const formSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	description: z.string().min(5),
	budget: z.string(),
	source: z.string()
});

export type FormSchema = typeof formSchema;
