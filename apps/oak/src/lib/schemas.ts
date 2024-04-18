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

export const contractEntrySchema = z
	.object({
		parent_contract: z.string().optional(),
		start_date: z.date(),
		end_date: z.date(),
		description: z.string().min(5, 'Description must be at least 5 characters long').optional(),
		vendor_id: z.string().min(1, 'The vendor is required'),
		new_vendor: z
			.object({
				name: z.string().min(1, 'The name is required'),
				department_id: z.string().min(1, 'The department is required').optional()
			})
			.optional(),
		new_project: z
			.object({
				name: z.string().min(1, 'The name is required'),
				description: z.string().min(5, 'Description must be at least 5 characters long').optional()
			})
			.optional(),
		project_id: z.string().optional(),
		owner: z.string().min(1, 'An owner is required'),
		department_id: z.string().optional(),
		amount: z.string().min(1, 'An amount is required'),
		spend_category: z.string().optional(),
		attachment: z.string()
	})
	.refine((v) => v.start_date <= v.end_date, {
		message: "End date can't be before start date",
		path: ['end_date']
	});

export type ContractEntryForm = typeof contractEntrySchema;
