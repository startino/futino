import { fail, setError, superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import {
	organizationSchema,
	departmentSchema,
	projectSchema,
	accountSchema,
	vendorSchema,
	spendCategorySchema
} from '$lib/schemas';
import type { RecursiveRequired } from '@sveltejs/kit';

export const load = async () => {
	const orgForm = await superValidate(zod(organizationSchema));
	const departmentForm = await superValidate(zod(departmentSchema));
	const projectForm = await superValidate(zod(projectSchema));
	const accountForm = await superValidate(zod(accountSchema));
	const vendorForm = await superValidate(zod(vendorSchema));
	const spendCategory = await superValidate(zod(spendCategorySchema));

	return { orgForm, departmentForm, projectForm, accountForm, vendorForm, spendCategory };
};

export const actions = {
	organization: async ({ request, locals: { supabase, orgID } }) => {
		const orgForm = await superValidate(request, zod(organizationSchema));

		if (!orgForm.valid) {
			return fail(400, { orgForm });
		}

		const formData = orgForm.data;

		const { data: updatedData, error } = await supabase
			.from('organizations')
			.update(formData)
			.eq('id', orgID)
			.select()
			.single();

		if (error) {
			console.log({ error });

			return setError(
				orgForm,
				'name',
				'Something went wrong while saving changes. Please try again.',
				{
					status: 500
				}
			);
		}

		return {
			orgForm,
			updatedData
		};
	},
	vendor: async ({ request, locals: { supabase, orgID } }) => {
		const vendorForm = await superValidate(request, zod(vendorSchema));

		if (!vendorForm.valid) {
			return fail(400, { vendorForm });
		}

		const formData = vendorForm.data as RecursiveRequired<typeof vendorForm.data>;

		const { data: newVendor, error } = await supabase
			.from('vendors')
			.insert({ ...formData, organization_id: orgID })
			.select()
			.single();

		if (error) {
			console.log({ error });

			return setError(
				vendorForm,
				'name',
				'Something went wrong while adding the vendor. Please try again.',
				{
					status: 500
				}
			);
		}

		return message(vendorForm, newVendor);
	},
	department: async ({ request, locals: { supabase, orgID } }) => {
		const departmentForm = await superValidate(request, zod(departmentSchema));

		if (!departmentForm.valid) {
			return fail(400, { departmentForm });
		}

		const formData = departmentForm.data as RecursiveRequired<typeof departmentForm.data>;

		const { data: newDepartment, error } = await supabase
			.from('departments')
			.insert({ ...formData, organization_id: orgID })
			.select()
			.single();

		if (error) {
			console.log({ error });

			return setError(
				departmentForm,
				'name',
				'Something went wrong while adding the department. Please try again.',
				{
					status: 500
				}
			);
		}

		return message(departmentForm, newDepartment);
	},
	account: async ({ request, locals: { supabase, orgID } }) => {
		const accountForm = await superValidate(request, zod(accountSchema));

		if (!accountForm.valid) {
			return fail(400, { accountForm });
		}

		const formData = accountForm.data as RecursiveRequired<typeof accountForm.data>;

		const { data: newDepartment, error } = await supabase
			.from('accounts')
			.insert({ ...formData, organization_id: orgID })
			.select()
			.single();

		if (error) {
			console.log({ error });

			return setError(
				accountForm,
				'number',
				'Something went wrong while adding the account. Please try again.',
				{
					status: 500
				}
			);
		}

		return message(accountForm, newDepartment);
	}
};
