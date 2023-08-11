export type Plan = {
	label: string;
	prefix: string;
	cost: number | string;
	note: string;
	subtext: string;
	features: string[];
	index: number;
};
export const hosting_plans: Plan[] = [
	{
		label: 'Basic',
		prefix: '$',
		cost: 239,
		note: '/mo',
		subtext: '',
		features: ['Hosting', 'Customer Support'],
		index: 0,
	},
	{
		label: 'Standard',
		prefix: '$',
		cost: 699,
		note: '/mo',
		subtext: '',
		features: ['Hosting', 'Priority Customer Suport', '2 Hours Maintenance Work'],
		index: 1,
	},
	{
		label: 'Business',
		prefix: '$',
		cost: 2100,
		note: '/mo',
		subtext: '',
		features: [
			'Hosting',
			'Priority Customer Suport',
			'4 Hours Maintenance Work',
			'2 Hours Developement Work',
		],
		index: 2,
	},
	{
		label: 'Enterprise',
		prefix: '$',
		cost: 6200,
		note: '/mo',
		subtext: '',
		features: [
			'Hosting',
			'Priority Customer Suport',
			'8 Hours Maintenance Work',
			'8 Hours Developement Work',
		],
		index: 3,
	},
];

export const marketing_plans: Plan[] = [
	{
		label: '',
		prefix: '',
		cost: 'Personalized',
		note: '',
		subtext: 'Contact us - Standard plans not yet available',
		features: [],
		index: 0,
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
	{ label: 'Biannually', index: 1, for: 'biennially', discount: '1 Month Free' },
	{ label: 'Yearly', index: 2, for: 'annuallyy', discount: '3 Months Free' },
];
