import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	description: z.string().min(5),
	budget: z.string().min(2),
	referralSource: z.enum(['Google', 'LinkedIn', 'Reddit', 'Someone else', 'Clutch', 'Other'])
});

export type FormSchema = typeof formSchema;
