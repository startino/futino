import { redirect } from '@sveltejs/kit';

export const load = async ({ locals: { supabase } }) => {
	const { error } = await supabase.auth.signOut();
	if (error) {
		redirect(300, '/app');
	}
	redirect(300, '/');
};
