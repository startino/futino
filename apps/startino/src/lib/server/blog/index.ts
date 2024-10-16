import { Carta } from 'carta-md';
import type { BlogData, BlogPost, MarkdownMetadata } from './types';
import type { SvelteComponent } from 'svelte';
import { error } from '@sveltejs/kit';
import { base } from '$app/paths';

const BLOG_PATH = `./src/documentation/blog`;

export async function get_blog_post(pathname: string) {
	const { readFile } = await import('node:fs/promises');
	const file = await readFile(`${BLOG_PATH}/${pathname}.md`, 'utf-8');

	if (!file) throw error(404, "Could not find the blog post you're looking for.");

	return file;
}
export async function get_processed_blog_post(
	blog_data: BlogData,
	slug: string
): Promise<BlogPost | null> {
	const carta = new Carta({});
	for (const post of blog_data) {
		if (post.metadata.slug === slug) {
			return {
				...post,
				content: await carta.render(post.content)
			};
		}
	}

	return null;
}

const BLOG_NAME_REGEX = /^(\d{4}-\d{2}-\d{2})-(.+)\.md$/;

export async function get_blog_data(base = BLOG_PATH): Promise<BlogData> {
	const { readdir, readFile } = await import('node:fs/promises');

	const blog_posts: BlogData = [];

	for (const file of (await readdir(base)).reverse()) {
		if (!BLOG_NAME_REGEX.test(file)) continue;

		const { date, date_formatted, slug } = get_date_and_slug(file);
		const { metadata, body } = extractFrontmatter(await readFile(`${base}/${file}`, 'utf-8'));

		blog_posts.push({
			metadata: {
				date,
				date_formatted,
				description: metadata?.description ?? '',
				published: metadata?.published ?? false,
				categories: metadata?.categories ?? [],
				slug,
				title: metadata?.title ?? '',
				file,
				author: metadata?.author ?? 'Startino',
				thumbnail: metadata?.thumbnail ?? 'favicon.png'
			},
			content: body
		});
	}

	return blog_posts;
}

export function get_blog_list(blog_data: BlogData) {
	console.log('blog_data', blog_data);
	return blog_data.map(
		({
			metadata: {
				slug,
				date,
				title,
				description,
				published,
				thumbnail,
				date_formatted,
				author,
				categories
			}
		}) => ({
			slug,
			date,
			title,
			description,
			published,
			thumbnail,
			date_formatted,
			author,
			categories
		})
	);
}

export function get_date_and_slug(filename: string) {
	const match = BLOG_NAME_REGEX.exec(filename);
	if (!match) throw new Error(`Invalid filename for blog: '${filename}'`);

	const [, date, slug] = match;
	const [y, m, d] = date.split('-');
	const date_formatted = `${months[+m - 1]} ${+d}, ${y}`;

	return { date, date_formatted, slug };
}

const months = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');

// Markdown
export function extractFrontmatter(markdown: string) {
	const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
	if (!match) return { metadata: null, body: markdown };

	const frontmatter = match[1];
	const body = markdown.slice(match[0].length);

	let metadata: MarkdownMetadata = {} as MarkdownMetadata;

	frontmatter.split('\n').forEach((pair) => {
		const items = pair.split(':');
		let [key, value] = [items[0] as keyof MarkdownMetadata, items.slice(1).join(':')];

		if (key && value) {
			value = removeQuotes(value).trim();
			let listItems: string[] | null = null;
			if (key === 'categories') {
				listItems = value.split(', ');
			}
			metadata[key] = listItems ?? value;
		}
	});

	return { metadata, body };
}

export function removeQuotes(text: string) {
	return text.replace(/"/g, '');
}
