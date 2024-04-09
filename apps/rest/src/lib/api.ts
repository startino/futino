import type { UUID } from '$lib/types';
import { PUBLIC_API_URL, REDDIT_USERNAME, REDDIT_PASSWORD } from '$env/static/public';

export const publishComment = async (leadId: UUID, text: string): Promise<boolean> => {
	const success: boolean = await fetch(`${PUBLIC_API_URL}/rest/publish_comment`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			lead_id: leadId,
			comment: text,
			reddit_username: REDDIT_USERNAME,
			reddit_password: REDDIT_PASSWORD
		})
	})
		.then(async (response) => {
			if (!response.ok) {
				console.error(`Failed to publish comment. Bad response`, response, await response.json());
				return false;
			}
			return true;
		})
		.catch((error) => {
			console.error('Error occured when publishing: ', error);
			return false;
		});

	return success;
};
