import { contractEntrySchema } from '$lib/schemas';
import { redirect, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { insertContract } from '$lib/server/contracts';

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

	// Fetch users of same organization
	const { data: organizationUsers, error: companyError } = await supabase
		.from('profiles')
		.select('id, full_name')
		.eq('company_id', companyID);

	if (companyError) {
		throw fail(404, companyError);
	}

	return {
		form: form,
		userID: userID,
		organizationUsers: organizationUsers
	};
};

export const actions: Actions = {
	default: async (event) => {
		const supabase = event.locals.supabase;
		const session = await event.locals.getSession();
		const user = session?.user;

		const form = await superValidate(event, contractEntrySchema);

		const formData = form.data;

		if (!form.valid) {
			console.log('Form invalid: ', form.errors);
			return fail(400, {
				form
			});
		} else {
			console.log('Form submitted successfully: ', form.data);
		}




		if (error) {
			throw fail(500, error);
		}

		console.log('Row inserted successfully:', data);

		return {
			form
		};
	}
};
