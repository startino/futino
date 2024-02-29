import { json } from '@sveltejs/kit';

export const POST = async ({ locals: { apiClient }, request }) => {
	const data = await request.json();

	const { error, data: vendor } = await apiClient.createVendor(data);
	if (error) {
		return json({ error: error.message }, { status: 400 });
	}

	return json({ error: null, vendor }, { status: 200 });
};
