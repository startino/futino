//TODO we should group the adventures to this array. would make it cleaner.
type Destination = {
	thumbnail: string;
	tags: string[];
	header: string;
	summary: string;
};

export const destinations: Destination[] = [
	{
		thumbnail: '/images/serengeti/1.jpeg',
		tags: ['serengeti'],
		header: 'Serengeti',
		summary:
			"Prepare for an unforgettable adventure as you embark on game drives, guided walks, and wildlife sightings that will leave you in awe of nature's wonders. Allow yourself to be captivated by the untamed beauty, the vibrant colors, and the symphony of sounds that define the Serengeti National Park.",
	},
];
