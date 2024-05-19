import type { RequestEvent } from '@sveltejs/kit';
import type { Tables, Enums, Database, Json } from './server/supabase.types';

type Action =
	`${keyof Database['public']['Tables']}.${'create' | 'read' | 'update' | 'delete' | 'sign'}`;
export class IAM {
	readonly policy: Json;
	readonly currentProfile: Tables<'profiles'>;

	readonly protectedRoutes = [
		{ method: 'POST', path: '/app/users', check: () => this.isAllowedTo('profiles.create') },
		{
			method: 'POST',
			path: '/app/contracts',
			check: () => this.isAllowedTo('contracts.create') || this.isAllowedTo('contracts.update')
		}
	];

	constructor(resourcePolicy: Json, currentProfile: Tables<'profiles'>) {
		this.policy = resourcePolicy;
		this.currentProfile = currentProfile;
	}

	isAllowedTo = (action: Action) => {
		let result = false;
		const path = action.split('.');
		const requiredRoles = path.reduce((prev, curr) => prev?.[curr], this.policy) as
			| Enums<'role'>[]
			| undefined;

		if (!requiredRoles) return false;

		this.currentProfile.roles.forEach((r) => {
			requiredRoles.includes(r) && (result = true);
		});
		return result;
	};

	canAccess = ({ url, request: { method } }: RequestEvent) => {
		let result = true;

		this.protectedRoutes.forEach((pr) => {
			if (pr.method === method && pr.path.includes(url.pathname)) {
				result = pr.check();
			}
		});
		return result;
	};
}
