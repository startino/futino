import { setError, superValidate } from 'sveltekit-superforms/server';
import { registrationSchema } from '$lib/schemas';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

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
		console.log(form.errors);

		if (!form.valid) {
			return fail(400, {
				msg: form.errors,
				form: form
			});
		}

		const { data, error: orgError } = await supabase
			.from('organizations')
			.insert({ name: company.name })
			.select();

		console.log({ orgError });

		const { error: departError } = await supabase.from('departments').insert(
			company.departments.map((d) => ({
				name: d.name,
				number: d.number,
				organization_id: data[0].id
			}))
		);

		console.log({ departError });

		const { error: projectError } = await supabase.from('projects').insert(
			company.projects.map((p) => ({
				name: p,
				organization_id: data[0].id
			}))
		);

		console.log({ projectError });

		const { error: accountError } = await supabase.from('accounting-accounts').insert(
			company.accounts.map((a) => ({
				number: a,
				organization_id: data[0].id
			}))
		);

		console.log({ accountError });

		const { error: authError } = await event.locals.supabase.auth.signUp({
			email: user.email,
			password: user.password,
			options: {
				data: {
					full_name: user.fullName,
					organization_id: data[0].id
				}
			}
		});

		console.log({ ...authError });

		if (authError || orgError || departError || projectError || accountError) {
			return setError(form, 'An error occured while registering.');
		} else {
			redirect(300, '/login');
		}
	}
};
