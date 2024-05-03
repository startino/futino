import nodemailer from 'nodemailer';
import { setError, superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';

import { profileSchema } from '$lib/schemas';
import type { JoinedProfile } from '$lib/types';
import { SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_USER } from '$env/static/private';
import { PUBLIC_SITE_URL } from '$env/static/public';

export const load = async () => {
	const form = await superValidate(zod(profileSchema));

	return { form };
};

export const actions = {
	default: async ({ request, locals: { apiClient, orgID } }) => {
		const form = await superValidate(request, zod(profileSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const formData = form.data;

		const { error, data } = await apiClient.supabase.auth.admin.createUser({
			email: formData.email,
			password: formData.password,
			user_metadata: {
				organization_id: orgID,
				...formData
			}
		});

		if (error) {
			if (error.code === 'email_exists') {
				return setError(form, 'This email is already registered', { status: 400 });
			}
			return setError(form, 'Something went wrong while adding user. Please try again.', {
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
				Your Administrator has created an Oak accound for you.
				Here is your credentials: <br/>
				<b>Email: </b> ${formData.email}<br/>
				<b>Password: </b> ${formData.password}<br/>
				<b><a href="${action_link}">Confirm and login</a></b>
			`
		});

		const { data: newProfile } = await apiClient.supabase
			.from('profiles')
			.select('*, approver:approver_id (*)')
			.eq('id', data.user.id)
			.returns<JoinedProfile[]>()
			.single();

		return { form, newProfile };
	}
};
