import { z } from 'zod';

export const departmentSchema = z.object({
	number: z.number().gt(0, 'Please enter a valid number'),
	name: z.string().min(1, 'The deparment name is required')
});

export const projectSchema = z.string().min(1, 'The project name is required');

export const accountSchema = z.number().gt(0, 'Please enter a valid number');

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string()
});

const userSchema = z
	.object({
		fullName: z
			.string()
			.max(140, 'Name must be less than 140 characters.')
			.min(3, 'Name must be at leat 3 characters long')
			.refine((v) => v !== '', 'A full name is required'),
		email: z.string().email('Invalid email address'),
		password: z
			.string()
			.min(8, 'Password must be at least 8 characters')
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,
				'For security sake, please include lowercase, uppercase letters, digits and symbols.'
			),
		confirmPassword: z.string()
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'The passwords did not match'
	});

export const organizationSchema = z.object({
	name: z.string().min(1, 'An organization name is required')
});

export const registrationSchema = z.object({
	organization: organizationSchema,
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
