import type { SupabaseClient, User } from '@supabase/supabase-js';
import type Stripe from 'stripe';

export const getUserSubscription = async (supabase: SupabaseClient, user: User) =>
	await supabase.from('subscriptions').select().eq('profile_id', user.id).single();

type UserProfileOp = {
	supabase: SupabaseClient;
	user: User;
};
export const getUserProfile = async ({ supabase, user }: UserProfileOp) =>
	await supabase.from('profiles').select().eq('id', user.id).single();

type UserBillingMethodOp = {
	supabase: SupabaseClient;
	user: User;
	stripe: Stripe;
};
export const getUserBillingMethod = async ({
	stripe,
	supabase,
	user
}: UserBillingMethodOp): Promise<Stripe.Response<Stripe.PaymentMethod> | null> => {
	const { data: billing } = await supabase
		.from('billing_information')
		.select()
		.eq('profile_id', user.id)
		.single();

	try {
		return await stripe.paymentMethods.retrieve(billing.payment_method);
	} catch (error) {
		return null;
	}
};
