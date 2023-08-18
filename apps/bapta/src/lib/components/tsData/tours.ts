export type Tour = {
	id: number;
	name: string;
	thumbnail: string;
	href: string;
	days: number;
	tags: string[];
	parks: string;
};

const tours: Tour[] = [
	{
		id: 0,
		thumbnail: '/images/safari/5.webp',
		name: 'Western Corridor Migration',
		days: 6,
		href: '6-days-western-corridor-migration',
		tags: ['Safari', 'Top Rated'],
		parks: 'Tarangire, Western Serengeti, Ngorongoro Crater & Lake Manyara',
	  },
	  {
		id: 1,
		thumbnail: '/images/safari/1.webp',
		name: 'Tanzania Safari Calving Season',
		days: 6,
		href: '6-days-tanzania-safari-calving-season',
		tags: ['Safari'],
		parks: 'Tarangire, South Serengeti, Ngorongoro Crater & Lake Manyara',
	  },
	  {
		id: 2,
		thumbnail: '/images/safari/11.webp',
		name: '7 Days Tanzania Safari',
		days: 7,
		href: '7-days-tanzania-safari',
		tags: ['Safari'],
		parks: 'Tarangire, Serengeti, Ngorongoro Crater & Lake Manyara',
	  },
	  {
		id: 3,
		thumbnail: '/images/safari/15.webp',
		name: '7 Days North Migration Safari',
		days: 7,
		href: '7-days-north-migration-safari',
		tags: ['Safari'],
		parks: 'Tarangire, Serengeti & Ngorongoro Crater',
	  },
	  {
		id: 4,
		thumbnail: '/images/safari/44.webp',
		name: '7 Days Camping Safari',
		days: 7,
		href: '7-days-camping-safari',
		tags: ['Safari'],
		parks: 'Tarangire, Ngorongoro Crater, Serengeti & Lake Manyara',
	  },
	  {
		id: 5,
		thumbnail: '/images/safari/63.webp',
		name: '8 Days North Migration Safari',
		days: 8,
		href: '8-days-north-migration-safari',
		tags: ['Safari', 'Top Rated'],
		parks: 'Tarangire, Serengeti, Manyara & Ngorongoro Crater',
	  },
	  {
		id: 6,
		thumbnail: '/images/safari/25.webp',
		name: '8 Days Family Safari',
		days: 8,
		href: '8-days-family-safari',
		tags: ['Safari'],
		parks: 'Tarangire, Serengeti, Manyara & Ngorongoro Crater',
	  },
	  {
		id: 7,
		thumbnail: '/images/safari/27.webp',
		name: '9 Days Family Tanzania Safari & Beach',
		days: 9,
		href: '9-days-family-tanzania-safari-beach',
		tags: ['Safari', 'Zanzibar'],
		parks: 'Tarangire, Serengeti, Ngorongoro Crater & Zanzibar',
	  },
	  {
		id: 8,
		thumbnail: '/images/safari/65.webp',
		name: '9 Days Honeymoon Safari & Beach',
		days: 9,
		href: '9-days-honeymoon-safari-beach',
		tags: ['Safari', 'Zanzibar', 'Top Rated'],
		parks: 'Tarangire, Serengeti, Ngorongoro Crater & Zanzibar',
	  },
	  {
		id: 9,
		thumbnail: '/images/safari/66.webp',
		name: '12 Days Honeymoon Safari & Beach',
		days: 12,
		href: '12-days-honeymoon-safari-beach',
		tags: ['Safari', 'Zanzibar'],
		parks: 'Tarangire, Serengeti, Manyara, Ngorongoro Crater & Zanzibar',
	  },
	  {
		id: 10,
		thumbnail: '/images/safari/64.webp',
		name: 'Ngorongoro Crater Day Trip',
		days: 1,
		href: 'ngorongoro-crater-day-trip',
		tags: ['Safari', 'Day Trip'],
		parks: 'Ngorongoro Crater',
	  },
	  {
		id: 11,
		thumbnail: '/images/safari/21.webp',
		name: 'Tarangire National Park Day Trip',
		days: 1,
		href: 'tarangire-national-park-day-trip',
		tags: ['Safari', 'Day Trip'],
		parks: 'Tarangire National Park',
	  },
	  {
		id: 12,
		thumbnail: '/images/safari/6.webp',
		name: 'Lake Manyara National Park Day Trip',
		days: 1,
		href: 'lake-manyara-national-park-day-trip',
		tags: ['Safari', 'Day Trip'],
		parks: 'Lake Manyara National Park',
	  },
];
export default tours;
