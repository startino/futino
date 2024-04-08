export type LeadData = {
	type: 'SUBMISSION' | 'COMMENT';
	url: string;
	title?: string;
	body?: string;
};

export type Lead = {
	id: string; // UUID
	discovered_at: Date;
	last_event: string;
	reddit_id: string;
	prospect_username: string;
	source: string;
	data: LeadData; // JSONB
	status: string;
	comment: string;
};
