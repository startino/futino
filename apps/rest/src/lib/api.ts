import { PUBLIC_API_URL } from '$env/static/public';
import { PUBLIC_REDDIT_USERNAME, PUBLIC_REDDIT_PASSWORD } from '$env/static/public';

export const publishComment = async (leadId: string, text: string): Promise<boolean> => {
	const success: boolean = await fetch(`${PUBLIC_API_URL}/rest/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			lead_id: leadId,
			comment: text,
			reddit_username: PUBLIC_REDDIT_USERNAME,
			reddit_password: PUBLIC_REDDIT_PASSWORD
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

export const markAsIrrelevant = async (
	leadId: string,
	submissionId: string,
	correct_reason: string
): Promise<boolean> => {
	const success: boolean = await fetch(`${PUBLIC_API_URL}/rest/mark-lead-as-irrelevant`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			lead_id: leadId,
			reddit_username: PUBLIC_REDDIT_USERNAME,
			reddit_password: PUBLIC_REDDIT_PASSWORD
		})
	})
		.then(async (response) => {
			if (!response.ok) {
				console.error(
					`Failed to mark as irrelevant. Bad response`,
					response,
					await response.json()
				);
				return false;
			}
			return true;
		})
		.catch((error) => {
			console.error('Error occured when marking as irrelevant: ', error);
			return false;
		});
	return success;
};
