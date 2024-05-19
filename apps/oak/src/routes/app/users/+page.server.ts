import nodemailer from 'nodemailer';
import { message, setError, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, error } from '@sveltejs/kit';
import genarator from 'generate-password';

const { generate: generatePassword } = genarator;

import { createUserByAdminSchema, updateUserByAdminSchema } from '$lib/schemas';
import type { JoinedProfile } from '$lib/types';
import { SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_USER } from '$env/static/private';
import { PUBLIC_SITE_URL } from '$env/static/public';

export const load = async ({ locals: { iam } }) => {
	iam.isAllowedTo('profiles.create');
	const createForm = await superValidate(zod(createUserByAdminSchema));
	const updateForm = await superValidate(zod(updateUserByAdminSchema));
	return { createForm, updateForm };
};

export const actions = {
	create: async ({ request, locals: { apiClient, orgID } }) => {
		const createForm = await superValidate(request, zod(createUserByAdminSchema));

		if (!createForm.valid) {
			return fail(400, { createForm });
		}

		const formData = createForm.data;
		formData.password = generatePassword({ numbers: true, strict: true });

		const { error: authError, data } = await apiClient.supabase.auth.admin.createUser({
			email: formData.email,
			password: formData.password,
			user_metadata: {
				organization_id: orgID,
				...formData
			}
		});

		if (authError) {
			console.log({ authError });

			if (authError.code === 'email_exists') {
				return setError(createForm, 'This email is already registered', { status: 400 });
			}
			return setError(createForm, 'Something went wrong while adding user. Please try again.', {
				status: 500
			});
		}

		const {
			data: {
				properties: { action_link }
			}
		} = await apiClient.supabase.auth.admin.generateLink({
			email: formData.email,
			password: formData.password,
			type: 'signup',
			options: {
				redirectTo: `${PUBLIC_SITE_URL}/login?confirmed&email=${formData.email}`
			}
		});

		const transporter = nodemailer.createTransport({
			host: SMTP_HOST,
			port: SMTP_PORT,
			secure: false,
			auth: {
				user: SMTP_USER,
				pass: SMTP_PASSWORD
			},
			tls: {
				rejectUnauthorized: false
			}
		});

		await transporter.sendMail({
			from: `"Oak" <${SMTP_USER}>`,
			to: formData.email,
			subject: 'Your Oak credentials',
			html: `
				Your Administrator has created an Oak account for you.
				Here is your credentials: <br/>
				<b>Email: </b> ${formData.email}<br/>
				<b>Password: </b> ${formData.password}<br/>
				<b><a href="${action_link}">Confirm and login</a></b>
			`
		});

		const { data: newProfile, error: profileError } = await apiClient.supabase
			.from('profiles')
			.select('*, approver:approver_id (*), department:department_id (*)')
			.eq('id', data.user.id)
			.returns<JoinedProfile[]>()
			.single();

		if (profileError) {
			console.log({ profileError });
			return error(500, 'Something went wrong');
		}

		return message(createForm, newProfile);
	},
	update: async ({ request, locals: { apiClient } }) => {
		const updateForm = await superValidate(request, zod(updateUserByAdminSchema));

		if (!updateForm.valid) {
			return fail(400, { updateForm });
		}

		const formData = updateForm.data;

		const { data: updatedProfile, error } = await apiClient.supabase
			.from('profiles')
			.update({ ...formData })
			.eq('id', formData.id)
			.select('*, approver:approver_id (*), department:department_id (*)')
			.returns<JoinedProfile[]>()
			.single();

		if (error) {
			console.log({ error });

			return setError(updateForm, 'Something went wrong while saving changes. Please try again.', {
				status: 500
			});
		}

		return { updateForm, updatedProfile };
	}
};
