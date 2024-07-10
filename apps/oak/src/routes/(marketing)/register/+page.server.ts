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
	default: async ({ request, locals: { supabase, stripe } }) => {
		const form = await superValidate(request, zod(registrationSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		type FormData = RecursiveRequired<typeof form.data>;

		const formData: FormData = form.data as FormData;
		const userData = formData.user;

		try {
			const stripeCustomer = await stripe.customers.create({
				email: userData.email,
				name: userData.fullName
			});

			const { data: org, error: orgErr } = await supabase
				.from('organizations')
				.insert({ name: formData.organization.name, stripe_customer_id: stripeCustomer.id })
				.select()
				.single();

			if (orgErr) throw orgErr;

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

			if (error) throw error;
		} catch (error) {
			console.warn('Error while registering organization: ', { error });

			if (error.code === 'email_exists') {
				return setError(form, 'This email is already registered', { status: 400 });
			}
			return setError(form, 'Something went wrong. Please, try again', { status: 500 });
		}

		redirect(302, `/login?confirmation-sent&email=${userData.email}`);
	}
};
