// src/app.d.ts

import type { ApiClient } from '$lib/api-client';
import { SupabaseClient, Session } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface Locals {
			apiClient: ApiClient;
			orgID: string;
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
