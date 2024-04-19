import { registrationSchema } from '$lib/schemas';
import { fail, redirect } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	const form = await superValidate(zod(registrationSchema));

	return {
		form
	};
};

export const actions = async ({ request }) => {
	const form = await superValidate(request, zod(registrationSchema));

	if (!form.valid) {
		return fail(400, { form });
	}

	message(form, 'Success!');
};
