// src/app.d.ts

import type { ApiClient } from '$lib/api-client';
import type { Tables } from '$lib/server/supabase.types';
import { SupabaseClient, Session } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface Locals {
			apiClient: ApiClient;
			orgID: string;
			currentProfile: Tables<'profiles'>;
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
