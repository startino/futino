import { fail } from "@sveltejs/kit";
import { supabaseAdmin } from "./supabase-admin";


// Fetch the user's organization ID
export async function fetchUserOrgID(userID: any): Promise<string> {
    const { data, error: userError } = await supabaseAdmin
        .from('profiles')
        .select('organization_id')
        .eq('id', userID)
        .single();

    if (userError) {
        console.log('User Error: ', userError);
        throw fail(404, userError);
    }

    return data.organization_id;
}