import { PUBLIC_SUPABASE_URL, PUBLIC_SMTP_USER } from '$env/static/public';
import {
	SUPABASE_SERVICE_ROLE_KEY,
	SMTP_HOST,
	SMTP_PASSWORD,
	SMTP_PORT
} from '$env/static/private';
import { dev } from '$app/environment';

import path from 'path';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import type { Database } from '$lib/server/supabase.types';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { error, redirect, type Handle } from '@sveltejs/kit';
import { IAM } from '$lib/iam';
import type { JoinedProfile } from '$lib/types';

export const handle: Handle = async ({ event, resolve }) => {
	const supabase = createSupabaseServerClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: SUPABASE_SERVICE_ROLE_KEY,
		event
	});
	event.locals.supabase = supabase;

	const {
		data: { user }
	} = await supabase.auth.getUser();

	if (!user) {
		if (event.url.pathname.startsWith('/app')) {
			redirect(303, '/login');
		}
	} else {
		const { data: currentProfile } = await supabase
			.from('profiles')
			.select('*, approver:approver_id (*), department:department_id (*)')
			.eq('id', user.id)
			.returns<JoinedProfile[]>()
			.single();
		const { data: organization } = await supabase
			.from('organizations')
			.select()
			.eq('id', currentProfile.organization_id)
			.single();
		const { data: policy } = await supabase.from('resource_policy').select().single();

		event.locals.iam = new IAM(policy.content, currentProfile);
		event.locals.organization = organization;
		event.locals.currentProfile = currentProfile;
		event.locals.user = user;
		event.locals.smtpTransporter = createSMPTransport({
			host: SMTP_HOST,
			port: Number(SMTP_PORT),
			user: PUBLIC_SMTP_USER,
			pass: SMTP_PASSWORD
		});

		if (!event.locals.iam.canAccess(event)) return error(403, 'Forbidden action!');
	}

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};

type SMTPOptions = {
	host: string;
	port: number;
	user: string;
	pass: string;
};
export const createSMPTransport = ({ host, port, user, pass }: SMTPOptions) => {
	const transporter = nodemailer.createTransport({
		host,
		port,
		secure: false,
		auth: {
			user,
			pass
		},
		tls: {
			rejectUnauthorized: false
		}
	});

	const handlebarOptions = {
		viewEngine: {
			partialsDir: path.join(process.cwd(), '/src/email-templates/'),
			defaultLayout: false
		},
		viewPath: path.join(process.cwd(), '/src/email-templates/')
	};

	transporter.use('compile', hbs(handlebarOptions));

	return transporter;
};
