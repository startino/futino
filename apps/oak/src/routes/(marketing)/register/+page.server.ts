import { setError, superValidate } from 'sveltekit-superforms/server';
import { registrationSchema } from '$lib/schemas';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { type RequestEvent } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(registrationSchema)
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, registrationSchema);
		const { user, company } = form.data;
		const supabase = event.locals.supabase;

		if (!form.valid) {
			return fail(400, {
				msg: form.errors,
				form: form
			});
		}

		const { data: organization, error: orgError } = await supabase
			.from('organizations')
			.insert({ name: company.name })
			.select()
			.single();

		console.log({ orgError });

		const { error: departError } = await supabase.from('departments').insert(
			company.departments.map((d) => ({
				name: d.name,
				number: d.number,
				organization_id: organization.id
			}))
		);

		console.log({ departError });

		const { error: projectError } = await supabase.from('projects').insert(
			company.projects.map((p) => ({
				name: p,
				organization_id: organization.id
			}))
		);

		console.log({ projectError });

		const { error: accountError } = await supabase.from('accounting-accounts').insert(
			company.accounts.map((a) => ({
				number: a,
				organization_id: organization.id
			}))
		);

		console.log({ accountError });

		const { data: signUpData, error: authError } = await event.locals.supabase.auth.signUp({
			email: user.email,
			password: user.password,
			options: {
				data: {
					full_name: user.fullName,
					organization_id: organization.id
				}
			}
		});

		console.log({ authError });

		const customer = await createStripeCustomer(
			event,
			form.data.user.email,
			form.data.user.fullName
		);

		const { error: profileUpdateError } = await event.locals.supabase
			.from('profiles')
			.update({ stripe_customer_id: customer.id })
			.eq('id', signUpData.user.id);

		console.log({ profileUpdateError });

		if (
			authError ||
			orgError ||
			departError ||
			projectError ||
			accountError ||
			profileUpdateError
		) {
			return setError(form, 'An error occured while registering.');
		} else {
			redirect(300, '/login');
		}
	}
};

async function createStripeCustomer(event: RequestEvent, email: string, fullName: string) {
	const customer = await event.locals.stripe.customers.create({
		email: email,
		name: fullName
	});
	return customer;
}
