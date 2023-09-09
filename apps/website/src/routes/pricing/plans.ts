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
	stripeIds: {
		monthly: string;
		yearly: string;
	};

	index: number;
	name: string;
	subtitle: string;
	cost: string;
	features: Features;
	thumbnail: string;
};

export const norpTiers: NorpTier[] = [
	{
		stripeIds: 
		{
			monthly: 'price_1NoN1nD09EWpqQ4YyjtILNRI',
			yearly: 'price_1NoN1nD09EWpqQ4YUqInAOrP',
		},
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
		thumbnail: '/artwork/sailboat_2.png',
	},
	{
		stripeIds: 
		{
			monthly: 'price_1NoN66D09EWpqQ4YOSJyrCzK',
			yearly: 'price_1NoN66D09EWpqQ4YMqt6lYEe',
		},
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
		thumbnail: '/artwork/plane_2.png',
	},
	{
		stripeIds: 
		{
			monthly: 'price_1NoNACD09EWpqQ4YJZn1InAc',
			yearly: 'price_1NoNACD09EWpqQ4YINnuTYRw',
		},
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
