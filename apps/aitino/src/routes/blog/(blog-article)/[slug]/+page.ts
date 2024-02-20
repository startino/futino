import type { Post } from '$lib/types'
import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
		const post = await import(`../../../../lib/blog/posts/${params.slug}.md`)

		return {
			slug: params.slug,
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}. error: ${e}`)
	}
}

export const prerender = 'auto';
