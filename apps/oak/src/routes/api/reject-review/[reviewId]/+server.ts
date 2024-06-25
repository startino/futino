import { PUBLIC_SITE_URL } from '$env/static/public';
import { sendEmailNotif } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const POST = async ({ request, locals: { supabase, smtpTransporter }, params }) => {
	const { reviewId } = params;

	const { note } = await request.json();

	if (!note) {
		return json({ error: 'A note is required' }, { status: 400 });
	}

	const { data: review, error } = await supabase
		.from('reviewed_contract_changes')
		.update({ status: 'rejected', note })
		.eq('id', reviewId)
		.select('*, contract:contracts (*, vendor:vendors (*))')
		.single();

	if (error) json({ error: 'Something went wrong!' });

	sendEmailNotif('entry-validation', {
		subject: 'Contract review rejected',
		receiverProfileId: review.contract.owner_id,
		client: supabase,
		smtp: smtpTransporter,
		context: {
			link: {
				url: `${PUBLIC_SITE_URL}/app/contracts/${review.contract.id}`,
				label: `#${review.contract.number} ${review.contract.vendor.name}`
			},
			action: 'rejected',
			entryName: 'review change'
		}
	});

	return json({ message: 'Review rejected!' }, { status: 200 });
};
