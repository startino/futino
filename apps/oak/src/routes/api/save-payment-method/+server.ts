import { json } from '@sveltejs/kit';

export const POST = async ({ request, locals: { supabase, getSession } }) => {
	const { paymentMethod } = await request.json();
	const { user } = await getSession();
	const { error } = await supabase
		.from('billing_information')
		.upsert({ profile_id: user.id, payment_method: paymentMethod });
	if (error) return json({ error: 'something went wrong' }, { status: 500 });

	return json({ error: null }, { status: 200 });
};
