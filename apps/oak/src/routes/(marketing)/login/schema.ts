import { z } from 'zod';

//TODO: Add more in-depth validation
export const loginSchema = z
	.object({
		email: z.string().email(),
		password: z.string()
	})
	.required();

export type LoginSchema = typeof loginSchema;
