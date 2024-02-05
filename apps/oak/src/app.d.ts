// src/app.d.ts

import type { ApiClient } from '$lib/server/api-client';
import { SupabaseClient, Session, type User } from '@supabase/supabase-js';
import { Stripe } from 'stripe';

declare global {
	namespace App {
		interface Locals {
			stripe: Stripe;
			supabase: SupabaseClient;
			getSession(): Promise<Session | null>;
			stripeCustomerId: string;
			user: User;
			apiClient: ApiClient;
		}
		interface PageData {
			session: Session | null;
			supabase: SupabaseClient;
			userAccessToken: string;
		}
		// interface Error {}
		// interface Platform {}
	}
}
