import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "$lib/schma";

export const load = (async () => {
	return {
		form: await superValidate(formSchema)
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		// const form = await superValidate(request, );
		const form = await superValidate(body, formSchema);
		console.log(form, "form zod supervalidate");
		console.log(body, "from register server");

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { data, error } = await locals.supabase.auth.signUp({
			email: body.email as string,
			password: body.password as string
		});

		console.log(data, "data", error, "error");

		// const user = data.user;

		// if (user) {
		// 	const { error: profileError } = await locals.supabase
		// 		.from("profiles")
		// 		.insert([{ user_id: user.id, display_name: body.display_name as string }]);

		// 	if (profileError) {
		// 		console.error("Failed to create user profile:", profileError);
		// 		return fail(500, { error: "Failed to create user profile" });
		// 	}
		// }

		if (error) {
			return {
				error: error.message
			};
		}

		return {
			success: true,
			message: "Check your email for the verification link"
		};
	}
};
