import { registrationSchema } from '$lib/schemas';
import { fail, redirect, type RecursiveRequired } from '@sveltejs/kit';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { PUBLIC_SITE_URL } from '$env/static/public';

export const load = async () => {
	const form = await superValidate(zod(registrationSchema));

	return {
		form
	};
};

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const form = await superValidate(request, zod(registrationSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		type FormData = RecursiveRequired<typeof form.data>;

		const formData: FormData = form.data as FormData;

		const { data: org, error: orgErr } = await supabase
			.from('organizations')
			.insert({ name: formData.organization.name })
			.select()
			.single();

		if (orgErr) {
			return setError(form, 'Something went wrong. Please, try again', { status: 500 });
		}

		const userData = formData.user;
		const { error } = await supabase.auth.signUp({
			email: userData.email,
			password: userData.password,
			options: {
				emailRedirectTo: `${PUBLIC_SITE_URL}/login`,
				data: {
					organization_id: org.id,
					roles: ['admin'],
					full_name: userData.fullName
				}
			}
		});

		if (error) {
			if (error.code === 'email_exists') {
				return setError(form, 'This email is already registered', { status: 400 });
			}
			return setError(form, 'Something went wrong. Please, try again', { status: 500 });
		}

		redirect(302, `/login?confirmation-sent&email=${userData.email}`);
	}
};
