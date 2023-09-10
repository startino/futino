export type Features = {
	Output: {
		'Monthly Work Capacity': string;
		'Requests & Revisions': string;
		'Avg. Turnaround Time': string;
	};
	Design: {
		'AI Assisted Design': boolean;
		'UI/UX design': boolean;
		'Graphic design': boolean;
		'3D design': boolean;
	};
	Development: {
		Database: boolean;
		'Responsive Design': boolean;
	};
	Hosting: {
		'Live Server': boolean;
		'Dedicated Storage': string;
		Uptime: string;
	};
	Integration: {
		'Yearly Meetings': string; // "Up to ..."
		'LORC Maintenance': boolean;
	};
};

// Probably better object oriented way to do this, but sometimes fast is better.
export const features = {
	Output: {
		'Monthly Work Capacity': 'this is content to be written',
		'Requests & Revisions': 'this is content for requests and revisions',
	},
	Design: {
		'AI Assisted Design': 'this is content to be written',
		'UI/UX design': 'this is content to be written',
		'Graphic design': 'this is content to be written',
		'3D design': 'this is content to be written',
	},
	Development: {
		Database: 'this is content to be written',
		'Responsive Design': 'this is content to be written',
	},
	Hosting: {
		'Live Server': 'this is content to be written',
		'Dedicated Storage': 'this is content to be written',
		Uptime: 'this is content to be written',
	},
	Integration: {
		'Yearly Meetings': 'this is content to be written',
		'LORC Maintenance': 'this is content to be written',
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
			monthly: 'price_1NoN1nD09EWpqQ4YyjtILNRI',
			yearly: 'price_1NoN1nD09EWpqQ4YUqInAOrP',
		},
		index: 0,
		name: 'Cruising',
		subtitle: 'Keep it going.',
		cost: 179,
		features: {
			Output: {
				'Monthly Work Capacity': '2 hrs',
				'Requests & Revisions': 'ထ',
				'Avg. Turnaround Time': '3 days',
			},
			Design: {
				'AI Assisted Design': true,
				'UI/UX design': true,
				'Graphic design': true,
				'3D design': true,
			},
			Development: {
				Database: true,
				'Responsive Design': true,
			},
			Hosting: {
				'Live Server': true,
				'Dedicated Storage': '10 GB',
				Uptime: '99.5%',
			},
			Integration: {
				'Yearly Meetings': '1',
				'LORC Maintenance': true,
			},
		},
		thumbnail: '/artwork/sailboat_2.png',
	},
	{
		stripeIds: {
			monthly: 'price_1NoN66D09EWpqQ4YOSJyrCzK',
			yearly: 'price_1NoN66D09EWpqQ4YMqt6lYEe',
		},
		index: 1,
		name: 'Expanding',
		subtitle: 'Even the playing field.',
		cost: 1450,
		features: {
			Output: {
				'Monthly Work Capacity': '9 hrs',
				'Requests & Revisions': 'ထ',
				'Avg. Turnaround Time': '2 days',
			},
			Design: {
				'AI Assisted Design': true,
				'UI/UX design': true,
				'Graphic design': true,
				'3D design': true,
			},
			Development: {
				Database: true,
				'Responsive Design': true,
			},
			Hosting: {
				'Live Server': true,
				'Dedicated Storage': '20 GB',
				Uptime: '99.8%',
			},
			Integration: {
				'Yearly Meetings': 'Up to 12',
				'LORC Maintenance': true,
			},
		},
		thumbnail: '/artwork/plane_2.png',
	},
	{
		stripeIds: {
			monthly: 'price_1NoNACD09EWpqQ4YJZn1InAc',
			yearly: 'price_1NoNACD09EWpqQ4YINnuTYRw',
		},
		index: 2,
		name: 'Blazing',
		subtitle: 'Make it unfair.',
		cost: 5600,
		features: {
			Output: {
				'Monthly Work Capacity': '36 hrs',
				'Requests & Revisions': 'ထ',
				'Avg. Turnaround Time': '2 days',
			},
			Design: {
				'AI Assisted Design': true,
				'UI/UX design': true,
				'Graphic design': true,
				'3D design': true,
			},
			Development: {
				Database: true,
				'Responsive Design': true,
			},
			Hosting: {
				'Live Server': true,
				'Dedicated Storage': '30 GB',
				Uptime: '99.9%',
			},
			Integration: {
				'Yearly Meetings': 'Up to 24',
				'LORC Maintenance': true,
			},
		},
		thumbnail: '/artwork/rocket_6.png',
	},
];

export const promotions: { label: string; index: number; for: string; discount: string }[] = [
	{ label: 'Monthly', index: 0, for: 'monthly', discount: '' },
	{ label: 'Anually', index: 1, for: 'anually', discount: '2 Months free' },
];
