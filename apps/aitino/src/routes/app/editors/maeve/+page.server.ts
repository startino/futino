import { fail, redirect, error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { AuthApiError } from '@supabase/supabase-js';

export const load: PageServerLoad = async (event) => {

	return {
		
	};
};

export const actions: Actions = {
    fetchAgent: async (event) => {
    }
};