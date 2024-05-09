import { z } from 'zod';

export const updateUserByAdminSchema = z.object({
	id: z.string().uuid(),
	approver_id: z.string().uuid().optional(),
	role: z.enum(['employee', 'admin', 'signer']),
	approval_threshold: z.number().gte(0)
});

export const createUserSchema = z.object({
	full_name: z
		.string()
		.max(140, 'Name must be less than 140 characters.')
		.min(3, 'Name must be at leat 3 characters long')
		.refine((v) => v !== '', 'A full name is required'),
	email: z.string().email('Invalid email address'),
	approval_threshold: z.number().gte(0).default(0),
	approver_id: z.string().uuid().optional(),
	role: z.enum(['employee', 'admin', 'signer']),
	password: z.string().readonly().default('************')
});

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
			.min(8, 'Password must be at least 8 characters logn')
			.max(16, 'Password must be at most 16 characters long')
			.regex(
				/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
				'For security sake, please include lowercase, uppercase letters and digits.'
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

export const contractSchema = z
	.object({
		parent_contract_id: z.string().optional(),
		start_date: z.date(),
		end_date: z.date(),
		description: z.string().min(5, 'Description must be at least 5 characters long'),
		number: z.string().min(1, 'The contract number is required'),
		project_id: z.string().uuid('A project is required'),
		account_id: z.string().uuid('An account is required'),
		organization_id: z.string().uuid(),
		owner_id: z.string().uuid(),
		current_approver_id: z.string().uuid(),
		department_id: z.string().uuid('A department is required'),
		amount: z.string().min(1, 'An amount is required'),
		spend_category_id: z.string().uuid('A spend category is required'),
		attachment: z
			.instanceof(File, { message: 'Please upload the contract PDF.' })
			.refine((f) => f.size / 1024 / 1024 < 5, 'Max 5 MiB upload size.'),
		vendor_id: z.string().uuid('The vendor is required')
	})
	.refine((v) => v.start_date <= v.end_date, {
		message: "End date can't be before start date",
		path: ['end_date']
	});

export type ContractEntryForm = typeof contractSchema;

export const orgManagementSchema = z.object({
	name: z.string().min(1, 'An organization name is required'),
	accounts: z.array(z.object({ name: z.string(), number: z.string() })).optional(),
	departements: z.array(z.object({ name: z.string(), number: z.number() })).optional(),
	projects: z.array(z.string()).optional(),
	spend_categories: z.array(z.string()).optional()
});
