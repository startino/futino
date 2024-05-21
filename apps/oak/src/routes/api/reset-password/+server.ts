import { json } from '@sveltejs/kit';
import { PUBLIC_SITE_URL } from '$env/static/public';

export const POST = async ({ locals: { supabase, apiClient } }) => {
	const { error } = await supabase.auth.resetPasswordForEmail(apiClient.user.email, {
		redirectTo: `${PUBLIC_SITE_URL}/update-password`
	});

	if (error) {
		console.log({ error });

		return json(false, { status: 500 });
	}

	return json(true);
};
