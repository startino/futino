import { contractEntrySchema } from '$lib/schemas';
import { fail, error } from '@sveltejs/kit';
import type { Actions } from './$types';
import { superValidate } from 'sveltekit-superforms/server';
import { fetchUserOrgID } from '$lib/server/organization';
import type { TablesInsert } from '$lib/server/supabase.types';

export const load = async ({ locals: { apiClient } }) => {
	const form = await superValidate(contractEntrySchema);

	const userID = apiClient.user.id;
	const organizationID = await fetchUserOrgID(userID);

	// Fetch all the contracts with vendor name attached that are in the same organization as the current user
	async function getContractsWithVendors() {
		const { data: contracts, error: contractsError } =
			await apiClient.getOrgContracts(organizationID);

		if (contractsError) {
			return error(500, 'Error fetching contacts, please try again later.');
		}

		const { data: vendors, error: vendorError } = await apiClient.getOrgVendors(organizationID);

		if (vendorError) {
			return error(500, 'Error fetching vendor, please try again later.');
		}

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
		const { data: orgUsers } = await apiClient.getOrgUsers(organizationID);
		const { data: approvers } = await apiClient.getApprovers(userID);
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
		organizationUsers: (async () => {
			const { data } = await apiClient.getOrgUsers(organizationID);
			return data;
		})(),
		organizationProjects: (async () => {
			const { data } = await apiClient.getOrgProjects(organizationID);
			return data;
		})(),
		contractsWithVendors: getContractsWithVendors(),
		approversWithNames: attachApproverNames(),
		vendors: (async () => {
			const { data, error: err } = await apiClient.getOrgVendors(organizationID);
			if (err) throw error(500, 'Error fetching vendors. Please try again later');
			return data;
		})(),
		departments: (async () => {
			const { data } = await apiClient.getOrgDeparments(organizationID);
			return data;
		})(),
		organization_id: organizationID
	};
};

export const actions: Actions = {
	default: async (event) => {
		const {
			locals: { apiClient }
		} = event;
		const form = await superValidate(event, contractEntrySchema);

		if (!form.valid) {
			console.error('Form invalid: ', form.errors);
			return fail(400, {
				form
			});
		} else {
			console.info('Contract Form submitted successfully: ', form.data);
		}

		const data = form.data;

		const orgID = await fetchUserOrgID(apiClient.user.id);

		delete data.new_vendor;
		delete data.new_project;

		const { error } = await apiClient.supabase.from('contracts').insert([
			{
				...data,
				amount: Number(data.amount),
				start_date: data.start_date.toISOString(),
				end_date: data.end_date.toISOString(),
				vendor_id: data.vendor_id ? data.vendor_id : null,
				organization_id: orgID
			} as TablesInsert<'contracts'>
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
