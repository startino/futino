import { json } from '@sveltejs/kit';

export const POST = async ({ locals: { supabase, currentProfile }, params }) => {
	const { reviewId } = params;

	try {
		const { data: review, error } = await supabase
			.from('reviewed_contract_changes')
			.delete()
			.eq('id', reviewId)
			.select()
			.single();

		if (error) throw error;

		if (currentProfile.id !== review.requester_id) {
			return json({ error: 'Forbidden action' }, { status: 403 });
		}

		const { error: updateError } = await supabase
			.from('contracts')
			.update({ start_date: review.start_date, end_date: review.end_date, status: 'active' })
			.eq('id', review.contract_id);

		if (updateError) throw updateError;

		return json({ message: 'Review approved!' }, { status: 200 });
	} catch (e) {
		console.warn('Error approving the review', { e });
		return json({ error: 'Something went wrong' }, { status: 500 });
	}
};
