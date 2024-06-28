import { error } from '@sveltejs/kit';

import { getReportContracts } from '$lib/server/db/report';

export const load = async ({ locals: { supabase, organization } }) => {
	let snapshots: {url: string; label: string}[] = [];

	try {
		const { data, error: contractError } = await getReportContracts({ supabase, orgId: organization.id });

		if (contractError) throw contractError;

		const { data: snapshotList, error: listError } = await supabase.storage.from('report-snapshots').list(organization.id, {
			limit: 100,
			offset: 0,
			sortBy: { column: 'name', order: 'desc' }
		});

		if(listError) throw listError;

		for (const item of snapshotList) {
			if (item.name === ".emptyFolderPlaceholder") {
				continue;
			}

			const {
				data: { signedUrl }
			} = await supabase.storage
				.from('report-snapshots')
				.createSignedUrl(`${organization.id}/${item.name}`, 60 * 60 * 24 * 7);

			snapshots.push({url: signedUrl, label: item.name.split(' ')[0]})
		}

		return { contracts: data, snapshots };
	} catch (e) {
		console.error("Error while getting report contracts");
		return error(500, 'Something went wrong!');
	}

};
