import type { LayoutServerLoad } from "./$types";
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";
import { registerUserSchema, loginUserSchema } from "$lib/schemas";
import { setError, superValidate } from 'sveltekit-superforms/server';
import { fail, redirect } from '@sveltejs/kit';
import { AuthApiError } from "@supabase/supabase-js";
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'

export const load = async ({ fetch, data, depends }) => {
	depends('supabase:auth')
  
	const supabase = createSupabaseLoadClient({
	  supabaseUrl: PUBLIC_SUPABASE_URL,
	  supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
	  event: { fetch },
	  serverSession: data.session,
	})
  
	const {
	  data: { session },
	} = await supabase.auth.getSession()
  
	return { supabase, session }
  }