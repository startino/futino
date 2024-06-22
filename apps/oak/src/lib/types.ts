import type { SupabaseClient } from '@supabase/supabase-js';

import type { Tables, Database } from '$lib/server/supabase.types';
import type { IAM } from './iam';
import {
	createAccounts,
	createCurrentProfile,
	createDepartments,
	createOrganization,
	createProfiles,
	createProjects,
	createSpendCategories,
	createVendors
} from './stores';

export type { ReportDataTableRow, ReportContracts } from '$lib/server/db/report';
export type { BillDataTableRow } from '$lib/server/db/bills';

export type Client = SupabaseClient<Database>;

export interface EmailContextMap {
	'review-submitted': {
		contract: Tables<'contracts'> & { vendor: Tables<'vendors'> };
		baseUrl: string;
		ownerName: string;
	};
	'review-contracts': { contracts: Tables<'contracts'>[]; baseUrl: string };
	'new-entry': { link: { url: string; label: string }; entryName: 'bill' | 'contract' };
	'entry-validation': {
		link: { url: string; label: string };
		entryName: 'bill' | 'contract';
		action: 'signed' | 'approved' | 'rejected';
	};
}

export interface Context {
	iam: IAM;
	currentProfile: ReturnType<typeof createCurrentProfile>;
	organization: ReturnType<typeof createOrganization>;
	departments: ReturnType<typeof createDepartments>;
	projects: ReturnType<typeof createProjects>;
	accounts: ReturnType<typeof createAccounts>;
	spendCategories: ReturnType<typeof createSpendCategories>;
	vendors: ReturnType<typeof createVendors>;
	profiles: ReturnType<typeof createProfiles>;
}

export interface ContractDatableRow extends Tables<'contracts'> {
	owner: Tables<'profiles'>;
	vendor: Tables<'vendors'>;
}

export interface JoinedProfile extends Tables<'profiles'> {
	approver: Tables<'profiles'> | null;
	department: Tables<'departments'> | null;
}

export interface JoinedContract extends Tables<'contracts'> {
	owner: Tables<'profiles'>;
	vendor: Tables<'vendors'>;
	department: Tables<'departments'>;
	project: Tables<'projects'>;
	approver: Tables<'profiles'> | null;
	signer: Tables<'profiles'> | null;
	parent_contract: Tables<'contracts'> | null;
	spend_category: Tables<'spend_categories'>;
	account: Tables<'accounts'>;
}

export type SvelteEvent<E extends Event = Event, T extends EventTarget = Element> = E & {
	currentTarget: EventTarget & T;
};

export type IconType = string;

export type TransitionOptions = {
	top?: number;
	bottom?: number;
	once?: boolean;
	animation?: Animation | string;
	delay?: number;
	duration?: number;
	fly?:
		| {
				x: number;
				y: number;
		  }
		| undefined;
	axis?: 'x' | 'y';
	threshold?: number;
};

export enum Animation {
	flyIn,
	SomeOtherAnimation
}

export type Contract = {
	id: string;
	amount: number;
	status: 'Pending' | 'Active' | 'Paid' | 'Partially';
	department: 'Accounting' | 'IT' | 'Legal';
	startDate: string;
	endDate: string;
	spendCategory: 'Testing' | 'Manufacturing' | 'Legal';
	attachment: string;
	projectCode: number;
	creator: string;
	approver: string;
	description: string;
	vendorName: string;
};

export type NestedContract = Omit<Tables<'contracts'>, 'vendor' | 'creator'> & {
	vendors: { name: string };
	creator: { full_name: string };
};
