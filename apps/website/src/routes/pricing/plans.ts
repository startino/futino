export type Features = {
	Output: {
		'Monthly Work Capacity': string;
		'Requests & Revisions': string;
		'Avg. Turnaround Time': string;
	};
};

// Probably better object oriented way to do this, but sometimes fast is better.
export const features = {
	Output: {
		'Monthly Work Capacity': `The guaranteed number of work hours available to you each month. 
		If your usage exceeds this limit, any remaining Requests will be carried over to the following month.`,
		'Requests & Revisions': `A Request is a task to create something (an illustration, a page, etc.). A Revision is a task to update something already existing.`,
		'Avg. Turnaround Time': `The Average Turnaround Time reflects the typical duration
		 between the submission and completion of a Request. Please note that this time may 
		 vary depending on Request complexity and current workload.`
	},
	
};

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
		name: 'Cruising',
		subtitle: 'Keep it going.',
		cost: 467,
		features: {
			Output: {
				'Monthly Work Capacity': '6 hours',
				'Requests & Revisions': 'ထ',
				'Avg. Turnaround Time': '3 days'
			},
			
		},
		thumbnail: '/artwork/sailboat_2.png'
	},
	{
		stripeIds: {
			monthly: 'price_1O9gzGD09EWpqQ4YXjrd4Qiu',
			yearly: 'price_1O9gzGD09EWpqQ4YA5QHjpRQ'
		},
		index: 1,
		name: 'Expanding',
		subtitle: 'Even the playing field.',
		cost: 1638,
		features: {
			Output: {
				'Monthly Work Capacity': '22 hours',
				'Requests & Revisions': 'ထ',
				'Avg. Turnaround Time': '2 days'
			},
			
		},
		thumbnail: '/artwork/plane_2.png'
	},
	{
		stripeIds: {
			monthly: 'price_1O9qgFD09EWpqQ4YMEReE74v',
			yearly: 'price_1O9h2iD09EWpqQ4YVQMa2qIh'
		},
		index: 2,
		name: 'Blazing',
		subtitle: 'Make it unfair.',
		cost: 6985,
		features: {
			Output: {
				'Monthly Work Capacity': '95 hours',
				'Requests & Revisions': 'ထ',
				'Avg. Turnaround Time': '2 days'
			},
			
		},
		thumbnail: '/artwork/rocket_6.png'
	}
];

export const promotions: {
	label: string;
	index: number;
	for: string;
	discount: string;
}[] = [
	{ label: 'Monthly', index: 0, for: 'monthly', discount: '' },
	{ label: 'Anually', index: 1, for: 'anually', discount: '' }
];
