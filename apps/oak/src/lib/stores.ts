import { writable } from 'svelte/store';
import type { Tables } from './server/supabase.types';
import type { JoinedProfile } from './types';

export const createProfiles = (profiles: JoinedProfile[]) => writable(profiles);
export const createCurrentProfile = (profile: Tables<'profiles'>) => writable(profile);
export const createOrganization = (organization: Tables<'organizations'>) => writable(organization);
export const createDepartments = (departments: Tables<'departments'>[]) => writable(departments);
export const createProjects = (projects: Tables<'projects'>[]) => writable(projects);
export const createVendors = (vendors: Tables<'vendors'>[]) => writable(vendors);
export const createAccounts = (accounts: Tables<'accounts'>[]) => writable(accounts);
export const createSpendCategories = (spendCategories: Tables<'spend_categories'>[]) =>
	writable(spendCategories);
