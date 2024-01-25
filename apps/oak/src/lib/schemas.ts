import { z } from 'zod';

export const companySchema = z.object({
	name: z.string().min(3),
	departments: z.array(z.object({ number: z.number().gt(0), name: z.string().min(1) })).min(1)
})

export const registerUserSchema = z.object({
	fullName: z.string().max(140, 'Name must be less than 140 characters.').min(3),
	email: z.string().email('Invalid email address'),
	password: z
		.string()
		.max(96, 'Password must be less than 96 characters')
		.min(6, 'Password must be at least 6 characters.'),
	confirmPassword: z
		.string()
		.max(96, 'Password must be less than 96 characters')
		.min(6, 'Password must be at least 6 characters.')
});

export const loginUserSchema = z.object({
	email: z.string().email('Please enter a valid email address'),
	password: z.string().min(1, 'Please enter a password')
});

export const contractEntrySchema = z.object({
	parent_contract: z.string().optional(),
	start_date: z.date(),
	end_date: z.date(),
	description: z.string().optional(),
	vendor_id: z.string(),
	project: z.string().optional(),
	creator: z.string(),
	department: z.string().optional(),
	amount: z.string(),
	spend_category: z.string().optional()
});

export type ContractEntryForm = typeof contractEntrySchema;
