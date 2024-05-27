import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const owner = 'futino';
const repo = 'futino';
const path = 'apps/startino/src/lib/documentation/blog/2024-05-25-mistakes-of-nontech-founders.md';
const ref = 'alpha';

export async function fetchGitHubFile() {
	try {
		const response = await octokit.repos.getContent({
			owner,
			repo,
			path,
			ref
		});

		const fileContent = Buffer.from(response.data.content, 'base64').toString('utf8');
		console.log(fileContent);
	} catch (error) {
		console.error('Error fetching file:', error);
	}
}

fetchGitHubFile();
