export interface BlogPost {
	title: string;
	description: string;
	date: string;
	date_formatted: string;
	slug: string;
	file: string;
	author: {
		name: string;
		url?: string;
	};
	draft: boolean;
	content: string;
	timeToRead: number;
}

export type BlogData = BlogPost[];

export interface BlogPostSummary {
	slug: string;
	title: string;
	description: string;
	date: string;
	draft: boolean;
}

export type MarkdownMetadata = {
    title?: string;
    date?: string;
    description?: string;
    tags?: string[];
    author?: string;
	published?: boolean;
	timeToRead?: number;
}