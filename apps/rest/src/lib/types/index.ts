import type { Tables } from './supabase';

export type LeadData = {
	type: 'SUBMISSION' | 'COMMENT';
	url: string;
	title?: string;
	body?: string;
};

export type Lead = Tables<'leads'>;
