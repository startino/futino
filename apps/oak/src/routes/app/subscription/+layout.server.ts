import { getUserBillingMethod } from '$lib/api-client.js';

export const load = async ({ locals: { stripe, supabase, getSession } }) => {
	const { user } = await getSession();
	const paymentMethod = await getUserBillingMethod({ stripe, supabase, user });
	return {
		paymentMethod: paymentMethod ? { card: paymentMethod.card, id: paymentMethod.id } : null
	};
};
