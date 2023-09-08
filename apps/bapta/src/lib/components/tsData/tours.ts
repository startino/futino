import journeys, { Journey } from "$lib/journeys";

export type Tour = {
	id: number;
	name: string;
	thumbnail: string;
	href: string;
	days: number;
	tags: string[];
	journey: Journey;
};

const tours: Tour[] = [
	{
		id: 0,
		thumbnail: '/images/safari/5.webp',
		name: 'Western Corridor Migration',
		days: 6,
		href: '6-days-western-corridor-migration',
		journey: journeys['6-days-western-corridor-migration'],
		tags: ['Top Rated', 'Tarangire', 'Serengeti', 'Ngorongoro', 'Lake Manyara'],
	  },
	  {
		id: 1,
		thumbnail: '/images/safari/1.webp',
		name: 'Tanzania Safari Calving Season',
		days: 6,
		href: '6-days-tanzania-safari-calving-season',
		journey: journeys['6-days-tanzania-safari-calving-season'],
		tags: ['Top Rated','Tarangire', 'Serengeti', 'Ngorongoro', 'Lake Manyara'],
	  },
	  {
		id: 2,
		thumbnail: '/images/safari/11.webp',
		name: 'Traditional Tanzanian Safari',
		days: 7,
		href: '7-days-tanzania-safari',
		journey: journeys['7-days-tanzania-safari'],
		tags: ['Tarangire', 'Serengeti', 'Ngorongoro', 'Lake Manyara'],
	  },
	  {
		id: 3,
		thumbnail: '/images/safari/15.webp',
		name: 'North Migration Safari',
		days: 7,
		href: '7-days-north-migration-safari',
		journey: journeys['7-days-north-migration-safari'],
		tags: ['Tarangire', 'Serengeti', 'Ngorongoro', 'xlSpacer'],
	  },
	  {
		id: 4,
		thumbnail: '/images/safari/44.webp',
		name: 'Camping Safari',
		days: 7,
		href: '7-days-camping-safari',
		journey: journeys['7-days-camping-safari'],
		tags: ['Tarangire', 'Ngorongoro', 'Serengeti', 'Lake Manyara'],
	  },
	  {
		id: 5,
		thumbnail: '/images/safari/63.webp',
		name: 'North Migration Safari',
		days: 8,
		href: '8-days-north-migration-safari',
		journey: journeys['8-days-north-migration-safari'],
		tags: ['Top Rated', 'Tarangire', 'Serengeti', 'Lake Manyara', 'Ngorongoro'],
	  },
	  {
		id: 6,
		thumbnail: '/images/safari/25.webp',
		name: 'Family Fun Tanzanian Safari',
		days: 8,
		href: '8-days-family-safari',
		journey: journeys['8-days-family-safari'],
		tags: ['Tarangire', 'Serengeti', 'Lake Manyara', 'Ngorongoro'],
	  },
	  {
		id: 7,
		thumbnail: '/images/safari/27.webp',
		name: 'Family Tanzanian Safari & Beach',
		days: 9,
		href: '9-days-family-tanzania-safari-&-beach',
		journey: journeys['9-days-family-tanzania-safari-&-beach'],
		tags: ['Zanzibar', 'Tarangire', 'Serengeti', 'Ngorongoro'],
	  },
	  {
		id: 8,
		thumbnail: '/images/safari/65.webp',
		name: 'Honeymoon Safari & Beach',
		days: 9,
		href: '9-days-honeymoon-safari-&-beach',
		journey: journeys['9-days-honeymoon-safari-&-beach'],
		tags: ['Zanzibar', 'Top Rated', 'Tarangire', 'Serengeti', 'Ngorongoro', 'lgSpacer'],
	  },
	  {
		id: 9,
		thumbnail: '/images/safari/66.webp',
		name: 'Honeymoon Safari & Beach',
		days: 12,
		href: '12-days-honeymoon-safari-&-beach',
		journey: journeys['12-days-honeymoon-safari-&-beach'],
		tags: ['Zanzibar', 'Tarangire', 'Serengeti', 'Lake Manyara', 'Ngorongoro'],
	  },
	  {
		id: 10,
		thumbnail: '/images/safari/64.webp',
		name: 'Ngorongoro Crater Day Trip',
		days: 1,
		href: 'ngorongoro-crater-day-trip',
		journey: journeys['ngorongoro-crater-day-trip'],
		tags: ['Ngorongoro'],
	  },
	  {
		id: 11,
		thumbnail: '/images/safari/21.webp',
		name: 'Tarangire National Park Day Trip',
		days: 1,
		href: 'tarangire-national-park-day-trip',
		journey: journeys['tarangire-national-park-day-trip'],
		tags: ['Tarangire'],
	  },
	  {
		id: 12,
		thumbnail: '/images/safari/6.webp',
		name: 'Lake Manyara National Park Day Trip',
		days: 1,
		href: 'lake-manyara-national-park-day-trip',
		journey: journeys['lake-manyara-national-park-day-trip'],
		tags: ['Lake Manyara'],
	  },
];
export default tours;
