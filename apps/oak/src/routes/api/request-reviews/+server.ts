import { json } from '@sveltejs/kit';

import { sendEmailNotif } from '$lib/utils';
import type { Tables } from '$lib/server/supabase.types.js';
import { PUBLIC_SITE_URL } from '$env/static/public';
import type { ContractDatableRow } from '$lib/types.js';

export const POST = async ({ request, locals: { supabase, currentProfile, smtpTransporter } }) => {
	let { reviewContracts } = (await request.json()) as { reviewContracts: ContractDatableRow[] };
	reviewContracts = reviewContracts.map((c) => {
		delete c.owner;
		delete c.vendor;
		return c;
	});
	const reviewChangesData = reviewContracts.map((c) => ({
		contract_id: c.id,
		requester_id: currentProfile.id
	}));

	const { error: changeError } = await supabase
		.from('reviewed_contract_changes')
		.insert(reviewChangesData);

	if (changeError) {
		console.error('Error creating contract changes: ', changeError);
		return json({ error: 'Unable to request reviews' }, { status: 500 });
	}

	const { error: updateError } = await supabase
		.from('contracts')
		.upsert(reviewContracts.map((c) => ({ ...c, status: 'under review' as 'under review' })))
		.neq('status', 'under review');

	if (updateError) {
		console.warn({ updateError });
		return json({ error: 'Unable to request reviews' }, { status: 500 });
	}

	const ownerToContracts: Record<string, Tables<'contracts'>[]> = reviewContracts.reduce(
		(prev, curr) => {
			return { [curr.owner_id]: prev[curr.owner_id] ? [...prev[curr.owner_id], curr] : [curr] };
		},
		{}
	);

	Object.entries(ownerToContracts).forEach(([id, contracts]) => {
		sendEmailNotif('review-contracts', {
			subject: 'Contracts to be reviewed',
			receiverProfileId: id,
			client: supabase,
			smtp: smtpTransporter,
			context: {
				baseUrl: PUBLIC_SITE_URL,
				contracts
			}
		});
	});

	return json({ message: 'Successfully requested reviews' }, { status: 201 });
};
