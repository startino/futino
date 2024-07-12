import { PUBLIC_SUPABASE_URL, PUBLIC_SMTP_USER } from '$env/static/public';
import {
	SUPABASE_SERVICE_ROLE_KEY,
	SMTP_HOST,
	SMTP_PASSWORD,
	SMTP_PORT,
	STRIPE_SECRET_KEY
} from '$env/static/private';

import nodemailer from 'nodemailer';
import Stripe from 'stripe';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { error, redirect, type Handle } from '@sveltejs/kit';
import { IAM } from '$lib/iam';
import type { JoinedProfile } from '$lib/types';
import type { Database } from '$lib/server/supabase.types';

export const handle: Handle = async ({ event, resolve }) => {
	const supabase = createSupabaseServerClient<Database>({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: SUPABASE_SERVICE_ROLE_KEY,
		event
	});

	event.locals.supabase = supabase;
	event.locals.stripe = new Stripe(STRIPE_SECRET_KEY);

	const {
		data: { user }
	} = await supabase.auth.getUser();

	if (!user) {
		if (event.url.pathname.startsWith('/api')) {
			error(401);
		}
		if (event.url.pathname.startsWith('/app')) {
			redirect(303, '/login');
		}
	} else {
		if (['/app', '/app/'].includes(event.url.pathname)) {
			redirect(303, '/app/contracts');
		}

		try {
			const { data: currentProfile, error: profileError } = await supabase
				.from('profiles')
				.select('*, approver:approver_id (*), department:department_id (*)')
				.eq('id', user.id)
				.returns<JoinedProfile[]>()
				.single();

			if (profileError) throw profileError;

			const { data: organization, error: orgError } = await supabase
				.from('organizations')
				.select()
				.eq('id', currentProfile.organization_id)
				.single();

			if (orgError) throw orgError;

			const { data: policy, error: policyError } = await supabase
				.from('resource_policy')
				.select()
				.single();

			if (policyError) throw policyError;

			const subscriptionResponse = await event.locals.stripe.subscriptions.list({
				customer: organization.stripe_customer_id,
				status: 'all',
				limit: 1
			});

			const paymentMethodResponse = await event.locals.stripe.customers.listPaymentMethods(
				organization.stripe_customer_id,
				{ limit: 1 }
			);

			let subscription = subscriptionResponse.data[0] ?? null;
			const paymentMethod = paymentMethodResponse.data[0] ?? null;

			if (!subscription && !event.url.pathname.startsWith('/app/subscription')) {
				redirect(303, '/app/subscription');
			}

			event.locals.iam = new IAM(policy.content, currentProfile);
			event.locals.organization = organization;
			event.locals.currentProfile = currentProfile;
			event.locals.paymentMethod = paymentMethod;
			event.locals.subscription = subscription;
			event.locals.user = user;
			event.locals.smtpTransporter = createSMPTransport({
				host: SMTP_HOST,
				port: Number(SMTP_PORT),
				user: PUBLIC_SMTP_USER,
				pass: SMTP_PASSWORD
			});
		} catch (e) {
			console.warn('Hooks error: ', e);
			return error(500, 'Something Went Wrong!');
		}
	}

	if (!event.locals.iam.canAccess(event)) return error(403, 'Forbidden action!');

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

	return transporter;
};
