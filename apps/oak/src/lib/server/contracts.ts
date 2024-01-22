import type { Contract } from '$lib/types';

const sampleContract: Contract = {
    id: '1',
    amount: 1000000,
    status: 'Pending',
    department: 'Accounting',
    startDate: '2021-07-01',
    endDate: '2021-07-01',
    spendCategory: 'Testing',
    attachment: 'https://www.google.com',
    projectCode: 123,
    creator: 'John Doe',
    approver: 'Jane Doe',
    description: 'This is a sample contract',
    vendorName: 'John Doe',
};

async function insertContract(): Promise<void> {
    // if (!contract) {
    //     contract = sampleContract;
    // }

    // const { data, error } = await supabase
    //     .from('contracts')
    //     .insert({
    //         parent_contract: formData.parent_contract,
    //         org
    //     contract_name: formData.contract_name,
    //         contract_type: formData.contract_type,
    //     });

    // const { error, count } = await supabaseAdmin
    //     .from("contracts")
    //     .select("*")
    //     .eq("user_id", user_id);

    // if (error) {
    //     throw error;
    // }

    // if (!count) {
    //     return 0;
    // }

    // return count;
}
