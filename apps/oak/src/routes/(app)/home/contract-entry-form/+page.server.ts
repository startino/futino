import { contractEntrySchema } from '$lib/schemas'
import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms/server';

export const load: PageServerLoad = async ({ locals: { getSession, supabase } }) => {
    const session = await getSession();

    const {data, error} = await supabase.from("profiles").select("*").eq("id", session?.user.id).single();

    if (error) {
        throw fail(404);
    }

    return {
        form: await superValidate(contractEntrySchema)
    }
}