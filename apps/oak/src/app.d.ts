// src/app.d.ts

import { SupabaseClient, Session } from '@supabase/supabase-js';
import { Stripe } from 'stripe';

declare global {
	namespace App {
		interface Locals {
			stripe: Stripe;
			supabase: SupabaseClient;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Error {}
		// interface Platform {}
	}
}
