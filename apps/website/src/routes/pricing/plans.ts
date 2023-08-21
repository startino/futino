export type Plan = {
	label: string;
	prefix: string;
	cost: number | string;
	note: string;
	subtext: string;
	features: string[];
	index: number;
};

export type NorpTier = {
	index: number,
	name: string;
	cost: number;
	features: {
		workCapacity: number,
		requestsAndRevisions: string,
	};
}

export const norp_tiers: NorpTier[] = [
	{
		index: 0,
		name: 'Cruising',
		cost: 179,
		features: {
			workCapacity: 2,
			requestsAndRevisions: 'Unlimited'
		},
	},
	{
		index: 1,
		name: 'Expansion',
		cost: 1920,
		features: {
			workCapacity: 11,
			requestsAndRevisions: 'Unlimited'
		},
	},
	{
		index: 2,
		name: 'Blazing',
		cost: 2799,
		features: {
			workCapacity: 33,
			requestsAndRevisions: 'Unlimited'
		},
	},
];

export const commission_plans: Plan[] = [
	{
		label: 'Commision',
		prefix: '$',
		cost: 45,
		note: '/hour',
		subtext: '',
		features: [],
		index: 0,
	},
];

export const partnership_plans: Plan[] = [
	{
		label: 'Partnership',
		prefix: '',
		cost: '%',
		note: 'of gross revenue (negotiable)',
		subtext: '',
		features: [
			'50% off Hosting Plans',
			'50% off Marketing Plans',
			'90% off Initial Website Developement',
			'50% off Commissions',
		],
		index: 0,
	},
];

export const promotions: { label: string; index: number; for: string; discount: string }[] = [
	{ label: 'Monthly', index: 0, for: 'monthly', discount: '' },
	{ label: 'Anually', index: 1, for: 'anually', discount: '2 Months free' },
];
