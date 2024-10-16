import { z } from 'zod';
import type { Enums } from '$lib/server/supabase.types';

export const rejectionSchema = z.object({
	id: z.string().uuid(),
	note: z.string()
});

export const billApprovalSchema = z.object({
	bill_id: z.string().uuid(),
	time_zone: z.string()
});

export const billSchema = z.object({
	contract_id: z.string().uuid('Select a contract'),
	project_id: z.string().uuid('A project is required'),
	account_id: z.string().uuid('An account is required'),
	department_id: z.string().uuid('A department is required'),
	vendor_id: z.string().uuid('The vendor is required'),
	readable_id: z.string(),
	number: z.string(),
	spend_category_id: z.string().uuid('A spend category is required'),
	description: z.string().min(1, 'A description is required').optional(),
	amount: z.number({ message: 'An amount is required' }),
	invoice_date: z.string().date(),
	due_date: z.string().date(),
	accrual_period: z.string(),
	attachment: z
		.instanceof(File, { message: 'Please include the invoice in PDF.' })
		.refine((f) => f.size / 1024 / 1024 < 5, 'Max 5 MiB upload size.')
});

export type BillSchema = typeof billSchema;

export const optionalBillSchema = billSchema.partial();

export type OptionalBillSchema = typeof optionalBillSchema;

export const emailSchema = z.object({
	email: z.string().email('Invalid email address')
});

export const resetPasswordSchema = z
	.object({
		password: z
			.string()
			.min(8, 'Password must be at least 8 characters long')
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

export const updateUserByAdminSchema = z.object({
	id: z.string().uuid(),
	department_id: z.string().uuid().optional().nullable(),
	approver_id: z.string().uuid().optional().nullable(),
	roles: z
		.array(
			z.enum(['employee', 'admin', 'signer', 'finance'] as [Enums<'role'>, ...Enums<'role'>[]])
		)
		.min(1, 'Select at least one role'),
	approval_threshold: z.number().gte(0)
});

export const createUserByAdminSchema = z.object({
	full_name: z
		.string()
		.max(140, 'Name must be less than 140 characters.')
		.min(3, 'Name must be at leat 3 characters long')
		.refine((v) => v !== '', 'A full name is required'),
	email: z.string().email('Invalid email address'),
	approval_threshold: z.number().gte(0).default(0),
	department_id: z.string().uuid().optional().nullable(),
	approver_id: z.string().uuid().optional().nullable(),
	roles: z
		.array(
			z.enum(['employee', 'admin', 'signer', 'finance'] as [Enums<'role'>, ...Enums<'role'>[]])
		)
		.min(1, 'Select at least one role'),
	password: z.string().readonly().default('************')
});

export const departmentSchema = z.object({
	number: z.number().gt(0, 'Please enter a valid number'),
	name: z.string().min(1, 'The department name is required')
});

export const departmentIdSchema = z.object({
	department_id: z.string().uuid('A department is required').optional().nullable()
});

export const projectSchema = z.object({
	name: z.string().min(1, 'The project name is required')
});

export const accountSchema = z.object({
	number: z.string().min(1, 'Please enter a valid number'),
	description: z.string().min(1, 'A description is required')
});

export const vendorSchema = z.object({
	name: z.string().min(1, "The vendor's name is required")
});

export const spendCategorySchema = z.object({
	name: z.string().min(1, "The category's name is required")
});

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
			.min(8, 'Password must be at least 8 characters long')
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

export const contractSchema = z.object({
	parent_contract_id: z.string().optional().nullable(),
	start_date: z.string().date(),
	end_date: z.string().date(),
	description: z.string().min(5, 'Description must be at least 5 characters long'),
	project_id: z.string().uuid('A project is required'),
	account_id: z.string().uuid('An account is required'),
	department_id: z.string().uuid('A department is required'),
	amount: z.number({ message: 'An amount is required' }),
	spend_category_id: z.string().uuid('A spend category is required'),
	attachment: z
		.instanceof(File, { message: 'Please upload the contract PDF.' })
		.refine((f) => f.size / 1024 / 1024 < 5, 'Max 5 MiB upload size.'),
	vendor_id: z.string().uuid('The vendor is required'),
	enters_report: z.boolean().default(true)
});
// .refine((v) => v.start_date <= v.end_date, {
// 	message: "End date can't be before start date",
// 	path: ['end_date']
// });

export type ContractSchema = typeof contractSchema;

export const optionalContractSchema = contractSchema.partial();

export type OptionalContractSchema = typeof optionalContractSchema;

export const orgManagementSchema = z.object({
	name: z.string().min(1, 'An organization name is required'),
	accounts: z.array(z.object({ name: z.string(), number: z.string() })).optional(),
	departements: z.array(z.object({ name: z.string(), number: z.number() })).optional(),
	projects: z.array(z.string()).optional(),
	spend_categories: z.array(z.string()).optional()
});
