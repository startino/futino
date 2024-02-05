import type { SupabaseClient, User } from '@supabase/supabase-js';
import type Stripe from 'stripe';
import type { TablesInsert } from './supabase.types';

type ApiClientOption = {
	supabase: SupabaseClient;
	user: User;
	stripe: Stripe;
};

export type ApiClient = ReturnType<typeof builApiClient>;

export const builApiClient = (option: ApiClientOption) => ({
	getUserSubscription: () => getUserSubscription(option),
	getUserProfile: () => getUserProfile(option),
	getUserBillingMethod: () => getUserBillingMethod(option),
	createDepartment: (data: { organization_id: string; name: string; number: number }) =>
		createDepartment(option, data),
	createVendor: (data: TablesInsert<'vendors'>) => createVendor(option, data)
});

export const createVendor = async (option: ApiClientOption, data: TablesInsert<'vendors'>) =>
	await option.supabase.from('vendors').insert(data).select().single();

export const createDepartment = async (
	option: ApiClientOption,
	data: { organization_id: string; name: string; number: number }
) => await option.supabase.from('departments').insert(data);

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
