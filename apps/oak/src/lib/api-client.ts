import type { SupabaseClient, User } from '@supabase/supabase-js';
import type Stripe from 'stripe';
import type { TablesInsert, Database } from './server/supabase.types';

type ApiClientArg = {
	supabase: SupabaseClient<Database>;
	user: User;
	userAccessToken: string;
	stripe: Stripe;
};

export class ApiClient {
	supabase: SupabaseClient<Database>;
	user: User;
	userAccesToken: string = '';
	stripe: Stripe;
	stripeCustomerId: string = '';

	constructor(arg: ApiClientArg) {
		this.supabase = arg.supabase;
		this.stripe = arg.stripe;
		this.user = arg.user;
		this.userAccesToken = arg.userAccessToken;
	}

	async getOrgDeparments(organizationId: string) {
		return await this.supabase
			.from('departments')
			.select('*')
			.eq('organization_id', organizationId);
	}

	async getOrgUsers(organizationId: string) {
		return await this.supabase
			.from('profiles')
			.select('id, full_name')
			.eq('organization_id', organizationId);
	}

	async getOrgContracts(organizationId: string) {
		return await this.supabase.from('contracts').select('*').eq('organization_id', organizationId);
	}

	async getOrgVendors(organizationId: string) {
		return await this.supabase.from('vendors').select('*').eq('organization_id', organizationId);
	}

	async getApprovers(approveeId: string) {
		return await this.supabase.from('approvers').select('*').eq('approvee_id', approveeId);
	}

	async createVendor(data: TablesInsert<'vendors'>) {
		return await this.supabase.from('vendors').insert(data).select().single();
	}

	async createDepartment(data: TablesInsert<'departments'>) {
		return await this.supabase.from('departments').insert(data);
	}

	async getUserSubscription() {
		return await this.supabase
			.from('subscriptions')
			.select()
			.eq('profile_id', this.user.id)
			.single();
	}

	async getUserProfile() {
		await this.supabase.from('profiles').select().eq('id', this.user.id).single();
	}

	async getUserBillingMethod(): Promise<Stripe.Response<Stripe.PaymentMethod> | null> {
		const { data: billing } = await this.supabase
			.from('billing_information')
			.select()
			.eq('profile_id', this.user.id)
			.single();

		try {
			return await this.stripe.paymentMethods.retrieve(billing.payment_method);
		} catch (error) {
			return null;
		}
	}
}
