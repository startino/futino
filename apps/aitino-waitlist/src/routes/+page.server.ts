import { fail, type Actions } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';
// import type { LayoutServerLoad } from './$types';
import { randomBytes } from 'crypto';

export const actions = {
	register: async ({ request }) => {
		const { email } = Object.fromEntries(await request.formData()) as {
			email: string;
		};

		if (!email || email.length === 0) {
			return fail(400, {
				invalid: true,
				error: 'Email is required'
			});
		}

		// check if user already register

		const check_if_user_already_register = await supabase
			.from('waitlist_users')
			.select('*')
			.eq('email', email)
			.single();

		const selectAll = await supabase.from('waitlist_users').select('*');

		if (check_if_user_already_register && check_if_user_already_register.data !== null) {
			return fail(400, {
				invalid: true,
				error: 'You have already joined the waitlist. See you Soon 👋'
			});
		}

		const { data, error } = await supabase
			.from('waitlist_users')
			.insert([{ email: email }])
			.select();

		if (error) {
			return fail(400, {
				invalid: true,
				error: error.message
			});
		}

		return {
			success: true,
			message: 'You have successfuly joined the waitlist. See you Soon 👋'
		};
	}
} satisfies Actions;
