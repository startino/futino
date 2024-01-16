import { contractEntrySchema } from '$lib/schemas.ts'
import { redirect, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async (locals: {getSession, supabase}) => {
    const session = await locals.getSession();
    if (!session) {
        throw redirect(303, "/home");
    }
}