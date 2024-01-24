import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import { companySchema } from '$lib/schemas';

export const load = async () => {
	const form = await superValidate(companySchema);

	return { form };
};

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const form = await superValidate(request, companySchema);

		if (!form.valid) {
			return fail(400, { form });
		}

		const { data, error: orgError } = await supabase
			.from('organizations')
			.insert({ name: form.data.name })
			.select();

		console.log(orgError);

		const departments = form.data.departments.map((d) => ({
			name: d.name,
			number: d.number,
			organization_id: data[0].id
		}));

		const { error: departError } = await supabase.from('departments').insert(departments);

		console.log(departError);

		return { form };
	}
};
