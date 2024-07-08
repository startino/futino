// src/app.d.ts

import type { SupabaseClient, User } from '@supabase/supabase-js';
import type Stripe from 'stripe';
import type { createSMPTransport } from './hooks.server';
import type { IAM } from '$lib/iam';
import type { Database } from '$lib/server/supabase.types';
import type { JoinedProfile } from '$lib/types';
import type { Tables } from '$lib/server/supabase.types';

declare global {
	namespace App {
		interface Locals {
			stripe: Stripe;
			subscription: Stripe.Subscription | null;
			paymentMethod: Stripe.PaymentMethod | null;
			smtpTransporter: ReturnType<typeof createSMPTransport>;
			supabase: SupabaseClient<Database>;
			currentProfile: JoinedProfile;
			organization: Tables<'organizations'>;
			iam: IAM;
			user: User;
		}
		interface PageData {
			supabase: SupabaseClient;
			userAccessToken: string;
		}
		// interface Error {}
		// interface Platform {}
	}
}
