

// Probably better object oriented way to do this, but sometimes fast is better.
export const features = {
		'Rate Limits': `The guaranteed number of sessions available to in each period.`,
		'Max Agents In Teams': `The maximum number of agents that can be inside a Team at one time.`,
};

export type Features = typeof features;

// norp = no risk pricing (model)
export type NorpTier = {
	stripeIds: {
		monthly: string;
		yearly: string;
	};
	index: number;
	name: string;
	subtitle: string;
	cost: number;
	features: Features;
	thumbnail: string;
};

export const norpTiers: NorpTier[] = [
	
	{
		stripeIds: {
			monthly: 'price_1O9qPFD09EWpqQ4YzqNx0d4W',
			yearly: 'price_1O9gxQD09EWpqQ4YIl5zeeMA'
		},
		index: 0,
		name: 'Starter',
		subtitle: 'Keep it going.',
		cost: 0,
		features: {
				'Rate Limits': '6 sessions / 3 hours',
				'Max Agents In Teams': '10'
		},
		thumbnail: '/artwork/sailboat.png'
	},
	{
		stripeIds: {
			monthly: 'price_1O9gzGD09EWpqQ4YXjrd4Qiu',
			yearly: 'price_1O9gzGD09EWpqQ4YA5QHjpRQ'
		},
		index: 1,
		name: 'Cruising',
		subtitle: 'Even the playing field.',
		cost: 21,
		features: {
				'Rate Limits': '25 sessions / day',
				'Max Agents In Teams': '25'	
		},
		thumbnail: '/artwork/plane.png'
	},
	{
		stripeIds: {
			monthly: 'price_1O9qPFD09EWpqQ4YzqNx0d4W',
			yearly: 'price_1O9gxQD09EWpqQ4YIl5zeeMA'
		},
		index: 2,
		name: 'Professional',
		subtitle: 'Make it unfair.',
		cost: 69,
		features: {
				'Rate Limits': '50 sessions / day',
				'Max Agents In Teams': '50'
		},
		thumbnail: '/artwork/rocket.png'
	}
];

export const promotions: {
	label: string;
	index: number;
	for: string;
	discount: string;
}[] = [
	{ label: 'Monthly', index: 0, for: 'monthly', discount: '' },
	{ label: 'Anually', index: 1, for: 'anually', discount: '2 Months free' }
];
