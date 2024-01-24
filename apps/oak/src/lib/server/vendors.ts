import { supabaseAdmin } from '$lib/server/supabase-admin';
import type { Database, Tables } from '$lib/server/supabase.types'; // replace with the actual path to your types
import type { QueryResult, QueryData, QueryError, PostgrestError } from '@supabase/supabase-js'

async function getVendorName(vendorId: string | number): Promise<string | null> {
    const { data, error }: { data: Tables<'vendors'>, error: PostgrestError } = await supabaseAdmin
        .from('vendors')
        .select('name')
        .eq('id', vendorId)
        .single();


    if (error) {
        console.error('Error fetching vendor name:', error);
        return null;
    }

    return data?.name || "N/A";
}