import type { SupabaseClient, User } from '@supabase/supabase-js';
import type Stripe from 'stripe';
import type { TablesInsert } from './server/supabase.types';

type ApiClientArg = {
	supabase: SupabaseClient;
	user: User;
	stripe: Stripe;
};

export type ApiClient = ReturnType<typeof builApiClient>;

export const builApiClient = (arg: ApiClientArg) => ({
	supabase: arg.supabase,
	getApprovers: (approvee_id: string) => getApprovers({ approvee_id, clientArg: arg }),
	getUserSubscription: () => getUserSubscription(arg),
	getUserProfile: () => getUserProfile(arg),
	getUserBillingMethod: () => getUserBillingMethod(arg),
	createDepartment: (data: { organization_id: string; name: string; number: number }) =>
		createDepartment({ clientArg: arg, data }),
	createVendor: (data: TablesInsert<'vendors'>) => createVendor({ data, clientArg: arg })
});

async function getApprovers(arg: { approvee_id: string; clientArg: ApiClientArg }) {
	const { approvee_id, clientArg } = arg;
	return await clientArg.supabase.from('approvers').select('*').eq('approvee_id', approvee_id);
}

const createVendor = async ({
	clientArg,
	data
}: {
	clientArg: ApiClientArg;
	data: TablesInsert<'vendors'>;
}) => await clientArg.supabase.from('vendors').insert(data).select().single();

export const createDepartment = async ({
	clientArg,
	data
}: {
	clientArg: ApiClientArg;
	data: { organization_id: string; name: string; number: number };
}) => await clientArg.supabase.from('departments').insert(data);

const getUserSubscription = async (clientArg: ApiClientArg) =>
	await clientArg.supabase
		.from('subscriptions')
		.select()
		.eq('profile_id', clientArg.user.id)
		.single();

const getUserProfile = async ({ supabase, user }: ApiClientArg) =>
	await supabase.from('profiles').select().eq('id', user.id).single();

const getUserBillingMethod = async ({
	stripe,
	supabase,
	user
}: ApiClientArg): Promise<Stripe.Response<Stripe.PaymentMethod> | null> => {
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
