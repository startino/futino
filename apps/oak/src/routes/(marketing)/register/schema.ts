import { z } from 'zod';

//TODO: Add more in-depth validation
export const registerSchema = z
	.object({
		email: z.string().email(),
		password: z.string().superRefine((val, ctx) => {
			if (val.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'Password is required.',
					fatal: true
				});
				return z.NEVER;
			}
			if (val.length < 8) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'Password must be at least 8 characters long.',
					fatal: true
				});
				return z.NEVER;
			}
			if (val.length > 64) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'Password must be at most 64 characters long.',
					fatal: true
				});
				return z.NEVER;
			}
			if (!/[A-Z]/.test(val)) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'Password must contain at least one uppercase letter.'
				});

				return z.NEVER;
			}
			if (!/[a-z]/.test(val)) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: 'Password must contain at least one lowercase letter.'
				});
				return z.NEVER;
			}
		})
	})
	.required();

export type LoginSchema = typeof loginSchema;
