import { authenticateUser } from '$lib/utils';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	authenticateUser(event);
	return await resolve(event);
};
