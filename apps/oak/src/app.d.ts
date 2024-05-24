// src/app.d.ts

import type { IAM } from '$lib/iam';
import type { Database, Json, Tables } from '$lib/server/supabase.types';
import type { JoinedProfile } from '$lib/types';
import type { SupabaseClient, User } from '@supabase/supabase-js';
import type TreeModel from 'tree-model';
import type { createSMPTransport } from './hooks.server';

declare global {
	namespace App {
		interface Locals {
			smtpTransporter: ReturnType<typeof createSMPTransport>;
			organization: Tables<'organizations'>;
			hierarchyRoot: TreeModel.Node<Json>;
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
