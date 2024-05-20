// src/app.d.ts

import type { ApiClient } from '$lib/api-client';
import type { IAM } from '$lib/iam';
import type { Database } from '$lib/server/supabase.types';
import type { JoinedProfile } from '$lib/types';
import { SupabaseClient } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface Locals {
			apiClient: ApiClient;
			supabase: SupabaseClient<Database>;
			orgID: string;
			currentProfile: JoinedProfile;
			iam: IAM;
		}
		interface PageData {
			supabase: SupabaseClient;
			userAccessToken: string;
		}
		// interface Error {}
		// interface Platform {}
	}
}
