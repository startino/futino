import type { Tables } from '$lib/server/supabase.types';
import {
	createAccounts,
	createCurrentProfile,
	createDepartments,
	createOrganization,
	createProjects,
	createSpendCategories,
	createVendors
} from './stores';

export interface Context {
	currentProfile: ReturnType<typeof createCurrentProfile>;
	organization: ReturnType<typeof createOrganization>;
	departments: ReturnType<typeof createDepartments>;
	projects: ReturnType<typeof createProjects>;
	accounts: ReturnType<typeof createAccounts>;
	spendCategories: ReturnType<typeof createSpendCategories>;
	vendors: ReturnType<typeof createVendors>;
}

export interface ContractDatableRow extends Tables<'contracts'> {
	owner: Tables<'profiles'>;
	vendor: Tables<'vendors'>;
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
