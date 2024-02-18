import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(1).max(30),
	email: z.string().email({ message: 'Invalid email address' }),
	description: z.string().min(20).max(500)
});

export const waitlistSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' })
});

export type FormSchema = typeof formSchema;
export type WaitlistSchema = typeof waitlistSchema;