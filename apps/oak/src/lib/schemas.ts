import { z } from 'zod';

const departmentSchema = z.object({
	number: z.number().gt(0, 'Please enter a valid number'),
	name: z.string().min(1, 'The deparment name is required')
});

const projectSchema = z.string().min(1, 'The project name is required');

const accountSchema = z.number().gt(0, 'Please enter a valid number');

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
	name: z.string().min(1, 'The name of the company is required'),
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
	parent_contract: z.string().optional(),
	start_date: z.date(),
	end_date: z.date(),
	description: z.string().optional(),
	vendor_id: z.string().min(10),
	new_vendor: z
		.object({
			name: z.string().min(1, 'The name is required'),
			department_id: z.string().min(1).optional()
		})
		.optional(),
	project: z.string().optional(),
	owner: z.string(),
	department: z.string().optional(),
	amount: z.string().min(1),
	spend_category: z.string().optional(),
	attachment: z.string()
});

export type ContractEntryForm = typeof contractEntrySchema;
