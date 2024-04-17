import type { Session, SupabaseClient } from '@supabase/supabase-js';
import type Stripe from 'stripe';
import type { TablesInsert, Database } from './server/supabase.types';
import type { ContractDatableRow } from './types';

type ApiClientArg = {
	supabase: SupabaseClient<Database>;
	session: Session;
	stripe: Stripe;
};

export class ApiClient {
	supabase: SupabaseClient<Database>;
	session: Session;
	stripe: Stripe;
	stripeCustomerId: string = '';

	constructor(arg: ApiClientArg) {
		this.supabase = arg.supabase;
		this.stripe = arg.stripe;
		this.session = arg.session;
	}

	getOrg = async (organizationId: string) =>
		await this.supabase.from('organizations').select().eq('id', organizationId).single();

	getOrgProjects = async (organizationId: string) =>
		await this.supabase.from('projects').select('*').eq('organization_id', organizationId);

	getOrgDeparments = async (organizationId: string) =>
		await this.supabase.from('departments').select('*').eq('organization_id', organizationId);

	getOrgUsers = async (organizationId: string) =>
		await this.supabase.from('profiles').select().eq('organization_id', organizationId);

	getOrgContracts = async (organizationId: string) =>
		await this.supabase.from('contracts').select('*').eq('organization_id', organizationId);

	getContractRows = async (organizationId: string) =>
		await this.supabase
			.from('contracts')
			.select('*, owner:owner_id (*), vendor:vendor_id(*)')
			.eq('organization_id', organizationId)
			.returns<ContractDatableRow[]>();

	getOrgVendors = async (organizationId: string) =>
		await this.supabase.from('vendors').select('*').eq('organization_id', organizationId);

	getApprovers = async (approveeId: string) =>
		await this.supabase.from('approvers').select('*').eq('approvee_id', approveeId);

	createVendor = async (data: TablesInsert<'vendors'>) =>
		await this.supabase.from('vendors').insert(data).select().single();

	createProject = async (data: TablesInsert<'projects'>) =>
		await this.supabase.from('projects').insert(data).select().single();

	createDepartment = async (data: TablesInsert<'departments'>) =>
		await this.supabase.from('departments').insert(data);

	getUserSubscription = async () =>
		await this.supabase
			.from('subscriptions')
			.select()
			.eq('profile_id', this.session.user.id)
			.single();

	getUserProfile = async () =>
		await this.supabase.from('profiles').select().eq('id', this.session.user.id).single();

	getUserBillingMethod = async (): Promise<Stripe.Response<Stripe.PaymentMethod> | null> => {
		const { data: billing } = await this.supabase
			.from('billing_information')
			.select()
			.eq('profile_id', this.session.user.id)
			.single();

		try {
			return await this.stripe.paymentMethods.retrieve(billing.payment_method);
		} catch (error) {
			return null;
		}
	};
}
