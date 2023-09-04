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
	'Monthly Work Capacity': string;
	'Requests & Revisions': string;
	'Yearly Meetings': string;
	'UI Maintenance': string;
};

// Probably better object oriented way to do this, but sometimes fast is better.
export const features = [
	'Monthly Work Capacity',
	'Requests & Revisions',
	'Yearly Meetings',
	'UI Maintenance',
];

export type NorpTier = {
	stripeId: string;

	index: number;
	name: string;
	subtitle: string;
	cost: string;
	features: Features;
	thumbnail: string;
};

export const norpTiers: NorpTier[] = [
	{
		stripeId: 'price_1NibECD09EWpqQ4YRbal1at9',
		index: 0,
		name: 'Cruising',
		subtitle: 'Keep it going.',
		cost: '179',
		features: {
			'Monthly Work Capacity': '2hrs',
			'Requests & Revisions': 'ထ',
			'Yearly Meetings': '1',
			'UI Maintenance': 'checkmark',
		},
		thumbnail: '/artwork/wheel_12.png',
	},
	{
		stripeId: 'price_1NibETD09EWpqQ4Y0Nh7Oyad',
		index: 1,
		name: 'Expanding',
		subtitle: 'Even the playing field.',
		cost: '1 450',
		features: {
			'Monthly Work Capacity': '8hrs',
			'Requests & Revisions': 'ထ',
			'Yearly Meetings': 'Up to 12',
			'UI Maintenance': 'checkmark',
		},
		thumbnail: '/artwork/plane_1.png',
	},
	{
		stripeId: 'price_1NkkCHD09EWpqQ4Yf9lj4X8f',
		index: 2,
		name: 'Blazing',
		subtitle: 'Make it unfair.',
		cost: '5 600',
		features: {
			'Monthly Work Capacity': '33hrs',
			'Requests & Revisions': 'ထ',
			'Yearly Meetings': 'Up to 24',
			'UI Maintenance': 'checkmark',
		},
		thumbnail: '/artwork/rocket_6.png',
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
