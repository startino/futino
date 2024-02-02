import type { SupabaseClient, User } from '@supabase/supabase-js';
import type Stripe from 'stripe';

type ApiClientOption = {
	supabase: SupabaseClient;
	user: User;
	stripe: Stripe;
};

export type ApiClient = ReturnType<typeof builApiClient>;

export const builApiClient = (option: ApiClientOption) => () => ({
	getUserSubscription: () => getUserSubscription(option),
	getUserProfile: () => getUserProfile(option),
	getUserBillingMethod: () => getUserBillingMethod(option)
});

export const getUserSubscription = async (option: Omit<ApiClientOption, 'stripe'>) =>
	await option.supabase.from('subscriptions').select().eq('profile_id', option.user.id).single();

export const getUserProfile = async ({ supabase, user }: Omit<ApiClientOption, 'stripe'>) =>
	await supabase.from('profiles').select().eq('id', user.id).single();

export const getUserBillingMethod = async ({
	stripe,
	supabase,
	user
}: ApiClientOption): Promise<Stripe.Response<Stripe.PaymentMethod> | null> => {
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
