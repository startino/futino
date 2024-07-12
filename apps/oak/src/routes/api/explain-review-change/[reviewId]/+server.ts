import { error, json } from '@sveltejs/kit';

export const POST = async ({ locals: { supabase }, params, request }) => {
	const { reviewId } = params;
	const { explanation } = await request.json();

	if (!explanation || !reviewId) {
		return json({ error: 'Bad request' }, { status: 400 });
	}

	const { error: updateError } = await supabase
		.from('reviewed_contract_changes')
		.update({ explanation })
		.eq('id', reviewId);

	if (updateError) {
		console.warn('Error explaning the review', { updateError });
		return json({ error: 'Something went wrong, please try again' }, { status: 500 });
	}

	return json({ message: 'Explanation submitted' }, { status: 200 });
};
