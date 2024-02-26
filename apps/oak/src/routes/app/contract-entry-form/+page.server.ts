import { contractEntrySchema } from '$lib/schemas';
import { fail, error } from '@sveltejs/kit';
import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import type { Tables } from '$lib/server/supabase.types';
import type { PostgrestError } from '@supabase/supabase-js';
import { getVendorsInOrg } from '$lib/server/vendors';
import { getApprovers } from '$lib/server/approvers';
import { fetchUserOrgID } from '$lib/server/organization';

export const load = async ({ locals: { getSession, supabase } }) => {
	const session = await getSession();

	const form = await superValidate(contractEntrySchema);

	const userID = await session?.user.id;

	const organizationID = await fetchUserOrgID(userID);

	async function getOrgDeparments(): Promise<{ id: string; name: string }[]> {
		const { data, error: supabaseError } = await supabase
			.from('departments')
			.select('id, name')
			.eq('organization_id', organizationID);

		if (supabaseError) {
			throw error(500, 'Error fetching contacts, please try again later.');
		}

		return data;
	}

	// Fetch all the users in the same organization as the current user
	async function getOrgUsers(): Promise<
		{
			id: string;
			full_name: string;
		}[]
	> {
		const { data, error: supabaseError } = await supabase
			.from('profiles')
			.select('id, full_name')
			.eq('organization_id', organizationID);

		if (supabaseError) {
			throw error(500, 'Error fetching contacts, please try again later.');
		}

		return data;
	}

	// Fetch all the contracts with vendor name attached that are in the same organization as the current user
	async function getContractsWithVendors() {
		const {
			data: contracts,
			error: contractsError
		}: { data: Tables<'contracts'>[]; error: PostgrestError } = await supabase
			.from('contracts')
			.select('*')
			.eq('organization_id', organizationID);

		if (contractsError) {
			throw error(500, 'Error fetching contacts, please try again later.');
		}

		const vendors = await getVendorsInOrg(organizationID);

		// Append the vendors name to the contracts objects
		const contractsWithVendors = contracts.map((contract) => {
			const vendor = vendors.find((vendor) => vendor.id === contract.vendor_id);
			return {
				...contract,
				vendor_name: vendor?.name || ''
			};
		});

		return contractsWithVendors;
	}

	// Attach a name attribute to each approver
	async function attachApproverNames() {
		const orgUsers = await getOrgUsers();
		const approvers = await getApprovers(userID);
		const approversWithNames = approvers.map((approver) => {
			const userName = orgUsers.find((user) => user.id === approver.approver_id)?.full_name;

			return {
				...approver,
				name: userName
			};
		});
		return approversWithNames;
	}

	return {
		form: form,
		userID: userID,
		organizationUsers: getOrgUsers(),
		contractsWithVendors: getContractsWithVendors(),
		approversWithNames: attachApproverNames(),
		vendors: getVendorsInOrg(organizationID),
		departments: getOrgDeparments(),
		organization_id: organizationID
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
			console.log('Form data: ', form.data);
			console.log('event: ', event);
			return fail(400, {
				form
			});
		} else {
			console.log('Form submitted successfully: ', form.data);
		}

		// Parse the form data into a contract object
		const contractForm = contractEntrySchema.parse(form.data);

		const orgID = await fetchUserOrgID(user.id);

		// Insert the contract using the formData into the contracts table
		console.log({ orgID });
		delete contractForm.new_vendor;
		console.log({ contractForm });

		const { data, error } = await supabase.from('contracts').insert([
			{
				...{ ...contractForm, vendor_id: contractForm.vendor_id ? contractForm.vendor_id : null },
				organization_id: orgID
			}
		]);

		if (error) {
			console.log('Error inserting contract: ', error);
			return fail(500, { error, form });
		}

		return {
			form
		};
	}
};
