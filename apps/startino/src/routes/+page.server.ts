import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from '$lib/components/ui/contact-form';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { safeGetSession } }) => {
	const { session } = await safeGetSession();

	// if the user is already logged in return them to the account page
	if (session) {
		throw redirect(303, '/account');
	}

	return {
		url: url.origin,
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const form = await superValidate(request, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { error } = await supabase.from('startino_contact_form').upsert(form.data);

		if (error) {
			return fail(400, { error });
		}

		return {
			form
		};
	}
};
