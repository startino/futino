import { z } from 'zod';

const departmentSchema = z.object({ number: z.number().gt(0), name: z.string().min(1) });

const projectSchema = z.string().min(1).optional();

const accountSchema = z.number().min(1).optional();

const userSchema = z
	.object({
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
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'The passwords did not match'
	});

export const companySchema = z.object({
	name: z.string().min(3),
	departments: z.array(departmentSchema).optional().default([]),
	accounts: z.array(accountSchema).optional().default([]),
	projects: z.array(projectSchema).optional().default([])
});

export const registrationSchema = z.object({
	company: companySchema,
	user: userSchema
});

export const loginUserSchema = z.object({
	email: z.string().email('Please enter a valid email address'),
	password: z.string().min(1, 'Please enter a password')
});

export const contractEntrySchema = z.object({
	parentContract: z.string().optional(),
	startDate: z.date(),
	endDate: z.date().optional(),
	description: z.string().optional(),
	projectCode: z.string().optional(),
	owner: z.string(),
	approver: z.string().optional(),
	department: z.string().optional(),
	amount: z.string().optional(),
	spendCategory: z.enum(['Contract', 'Clinical', 'Other']).optional()
});

export type ContractEntryForm = typeof contractEntrySchema;
