// src/app.d.ts

import type { IAM } from '$lib/iam';
import type { Database } from '$lib/server/supabase.types';
import type { JoinedProfile } from '$lib/types';
import type { SupabaseClient, User } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>;
			currentProfile: JoinedProfile;
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
