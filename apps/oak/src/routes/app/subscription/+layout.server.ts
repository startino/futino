import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({
	locals: { getSession, supabase, stripe },
	cookies
}) => {
	const { user } = await getSession();
	const { data } = await supabase.from('profiles').select().eq('id', user.id).single();

	const customer = await stripe.customers.create({
		email: user.email,
		name: data.full_name
	});

	cookies.set('stripeCustomerId', customer.id, { path: '/' });
};
