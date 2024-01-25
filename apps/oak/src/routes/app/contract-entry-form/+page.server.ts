import { contractEntrySchema } from '$lib/schemas';
import { redirect, fail, error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import type { Tables } from '$lib/server/supabase.types';
import type { PostgrestError, QueryData } from '@supabase/supabase-js';
import { getVendorsInOrg } from '$lib/server/vendors';

export const load = async ({ locals: { getSession, supabase } }) => {
	const session = await getSession();

	const form = await superValidate(contractEntrySchema);

	const userID = await session?.user.id;

	// Fetch the company_id for the current user
	const { data: userData, error: userError } = await supabase
		.from('profiles')
		.select('organization_id')
		.eq('id', userID)
		.single();

	if (userError) {
		console.log('User Error: ', userError);
		throw fail(404, userError);
	}

	const organizationID = userData?.organization_id;

	// Fetch users of same organization
	const { data: organizationUsers, error: organizationError } = await supabase
		.from('profiles')
		.select('id, full_name')
		.eq('organization_id', organizationID);

	if (organizationError) {
		console.log('Org Error: ', organizationError);
		throw fail(404, organizationError);
	}

	async function getOrgUsers(): Promise<
		{
			id: any;
			full_name: any;
		}[]
	> {
		const orgUsersData = supabase
			.from('profiles')
			.select('id, full_name')
			.eq('organization_id', organizationID);
		const {
			data: orgUsers,
			error: contractsError
		}: { data: QueryData<typeof orgUsersData>; error: PostgrestError } = await orgUsersData;

		if (contractsError) {
			throw error(500, 'Error fetching contacts, please try again later.');
		}
		await new Promise((r) => setTimeout(r, 5000));

		return orgUsers;
	}

	async function getContractsWithVendors() {
		const contractsData = supabase
			.from('contracts')
			.select('*')
			.eq('organization_id', organizationID);
		const {
			data: contracts,
			error: contractsError
		}: { data: Tables<'contracts'>[]; error: PostgrestError } = await contractsData;

		if (contractsError) {
			throw error(500, 'Error fetching contacts, please try again later.');
		}

		const vendors: Tables<'vendors'>[] = await getVendorsInOrg(organizationID);
		console.log(vendors);
		// Add vendors "name" to contracts
		const contractsWithVendors = contracts.map((contract) => {
			console.log(contract.vendor_id);
			const vendor = vendors.find((vendor) => vendor.id === contract.vendor_id);
			console.log(vendor);
			return {
				...contract,
				vendor_name: vendor?.name || ''
			};
		});

		return contractsWithVendors;
	}

	return {
		form: form,
		userID: userID,
		organizationUsers: getOrgUsers(),
		contractsWithVendors: getContractsWithVendors()
	};
};

export const actions: Actions = {
	default: async (event) => {
		const supabase = event.locals.supabase;
		const session = await event.locals.getSession();
		const user = session?.user;

		const form = await superValidate(event, contractEntrySchema);



		if (!form.valid) {
			console.log('Form invalid: ', form.errors);
			return fail(400, {
				form
			});
		} else {
			console.log('Form submitted successfully: ', form.data);
		}

		// Parse the form data into a contract object
		const contract = contractEntrySchema.parse(form.data);

		// Insert the contract using the formData into the contracts table
		const { data, error } = await supabase.from('contracts').insert(
			{
				...contract,
				organization_id: 'this-one'
			}
		);

		return {
			form
		};
	}
};
