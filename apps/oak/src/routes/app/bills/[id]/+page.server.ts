import { error } from '@sveltejs/kit';

import { getBillById } from '$lib/server/db/bills';

export const load = async ({ locals: { supabase }, params }) => {
	const { data: bill, error: billError } = await getBillById({ client: supabase, id: params.id });

	if (billError) {
		billError.code === 'PGRST116'
			? error(404, 'Bill Not Found!')
			: error(500, 'Something went wrong.');
	}

	const {
		data: { signedUrl }
	} = await supabase.storage.from('invoices').createSignedUrl(bill.attachment, 60 * 60 * 24);

	return { bill, attachmentUrl: signedUrl };
};
