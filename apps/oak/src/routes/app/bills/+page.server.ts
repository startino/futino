import { error, fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

import type { BillDatableRow } from '$lib/types';
import { billSchema } from '$lib/schemas';

export const load = async ({ locals: { organization, supabase } }) => {
	const form = await superValidate(zod(billSchema));

	const { data: bills, error: billsError } = await supabase
		.from('bills')
		.select(
			`
        *,
        contract:contract_id (
          *,
          vendor:vendor_id (*),
          owner:owner_id (*)
        )
      `
		)
		.eq('organization_id', organization.id)
		.returns<BillDatableRow[]>();

	if (billsError) {
		console.log({ billsError });
		return error(500, 'Something went wrong!');
	}

	return { bills, form };
};

export const actions = {
	default: async ({ locals: { supabase }, request }) => {
		const form = await superValidate(request, zod(billSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		return message(form, 'Bill successfully added!');
	}
};
