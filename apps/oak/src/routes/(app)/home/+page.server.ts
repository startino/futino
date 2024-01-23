import type { PageServerLoad } from './$types';
import { redirect, fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals: { getSession, supabase } }) => {
	const session = await getSession();
		
	if (!session) {
		throw redirect(303, '/');
	}

	const { data: profile, error } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', session.user.id)
		.single();

	if (error) {
		console.error(error);
		throw fail(400, error);
	}

	if (!profile) {
		console.log('No profile could be found, redirecting back to landing page.');
		throw redirect(303, '/');
	}
	return {
		session,
		profile
	};
};
