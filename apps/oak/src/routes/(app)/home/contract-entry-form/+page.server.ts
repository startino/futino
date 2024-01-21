import { contractEntrySchema } from '$lib/schemas';
import { redirect, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';

export const load: PageServerLoad = async ({ locals: { getSession, supabase } }) => {
	const session = await getSession();

	const form = await superValidate(contractEntrySchema);

	const userID = await session?.user.id;

	// Fetch th company_id for the current user
	const { data: userData, error: userError } = await supabase
		.from('profiles')
		.select('company_id')
		.eq('id', userID)
		.single();

	if (userError) {
		throw fail(404, userError);
	}

	const companyID = userData?.company_id;

	// Fetch all users with the same company_id
	const { data: companyUsers, error: companyError } = await supabase
		.from('profiles')
		.select('id, full_name')
		.eq('company_id', companyID);

	if (companyError) {
		throw fail(404, companyError);
	}

	return {
		form: form,
		userID: userID,
		companyUsers: companyUsers
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, contractEntrySchema);

		if (!form.valid) {
			console.log('Form invalid: ', form.errors);
			return fail(400, {
				form
			});
		} else {
			console.log('Form submitted successfully: ', form.data);
		}
		return {
			form
		};
	}
};
