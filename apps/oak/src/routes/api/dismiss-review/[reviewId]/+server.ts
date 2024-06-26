import { PUBLIC_SITE_URL } from '$env/static/public';
import { sendEmailNotif } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const POST = async ({ locals: { supabase, currentProfile, smtpTransporter }, params }) => {
	const { reviewId } = params;

	try {
		const { data: review, error } = await supabase
			.from('reviewed_contract_changes')
			.delete()
			.eq('id', reviewId)
			.select('*, contract:contracts (*)')
			.single();

		if (error) throw error;

		if (currentProfile.id !== review.contract.owner_id) {
			return json({ error: 'Forbidden action' }, { status: 403 });
		}

		const { data: contract, error: updateError } = await supabase
			.from('contracts')
			.update({ status: 'active' })
			.eq('id', review.contract_id)
			.select('*, vendor:vendors (*)')
			.single();

		if (updateError) throw updateError;

		sendEmailNotif('entry-validation', {
			subject: 'Contract review dismissed',
			receiverProfileId: review.requester_id,
			client: supabase,
			smtp: smtpTransporter,
			context: {
				link: {
					url: `${PUBLIC_SITE_URL}/app/contracts/${contract.id}`,
					label: `#${contract.number} ${contract.vendor.name}`
				},
				action: 'dismissed',
				entryName: 'review change'
			}
		});

		return json({ message: 'Review dismissed' }, { status: 200 });
	} catch (e) {
		console.warn('Error dismissing the review', { e });
		return json({ error: 'Something went wrong' }, { status: 500 });
	}
};
