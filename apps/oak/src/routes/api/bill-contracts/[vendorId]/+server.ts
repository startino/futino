import { json } from '@sveltejs/kit';

export const GET = async ({ locals: { supabase }, params }) => {
	const { data, error } = await supabase
		.from('contracts')
		.select()
		.eq('vendor_id', params.vendorId)
		.eq('signed', true);

	if (error) {
		if (error.code === '22P02') {
			return json('resource not found', { status: 404 });
		}

		return json('Internal server error', { status: 500 });
	}

	return json(data);
};
