export type Plan = {
	label: string;
	prefix: string;
	cost: number | string;
	note: string;
	subtext: string;
	features: string[];
	index: number;
};

export type Features = {
	'Work Capacity': string;
	'Requests & Revisions': string;
	'Yearly Meetings': string;
	'UI Maintenance': string;
};

// Probably better object oriented way to do this, but sometimes fast is better.
export const features = [
	'Work Capacity',
	'Requests & Revisions',
	'Yearly Meetings',
	'UI Maintenance',
];

export type NorpTier = {
	index: number;
	name: string;
	subtitle: string;
	cost: string;
	features: Features;
};

export const norpTiers: NorpTier[] = [
	{
		index: 0,
		name: 'Cruising',
		subtitle: 'Tier to chill & relax with slow, exponential',
		cost: '179',
		features: {
			'Work Capacity': '2hrs',
			'Requests & Revisions': 'ထ',
			'Yearly Meetings': '1',
			'UI Maintenance': '✔️',
		},
	},
	{
		index: 1,
		name: 'Expansion',
		subtitle: 'Tier to expand and grow, really darn fast',
		cost: '1 920',
		features: {
			'Work Capacity': '11hrs',
			'Requests & Revisions': 'ထ',
			'Yearly Meetings': 'Up to 12',
			'UI Maintenance': '✔️',
		},
	},
	{
		index: 2,
		name: 'Blazing',
		subtitle: "If you're paying this, we care about you a lot",
		cost: '2 799',
		features: {
			'Work Capacity': '33hrs',
			'Requests & Revisions': 'ထ',
			'Yearly Meetings': 'Up to 24',
			'UI Maintenance': '✔️',
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
