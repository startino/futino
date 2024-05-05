import type { PageServerLoad } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from '$lib/components/ui/contact-form';
import { zod } from 'sveltekit-superforms/adapters';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};
