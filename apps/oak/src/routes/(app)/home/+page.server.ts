import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals: { getSession, supabase } }) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/');
	}

	const { data: profile } = await supabase
		.from('profiles')
		.select('full_name')
		.eq('id', session.user.id)
		.single();

	if (!profile) {
		console.log('in home but redirecting');
		throw redirect(303, '/');
	}
	return {
		session,
		profile
	};
};
