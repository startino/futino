export type Tour = {
	id: number;
	name: string;
	thumbnail: string;
	tags: string[];
	parks: string;
};

const tours: Tour[] = [
	{
		id: 0,
		thumbnail: '',
		name: '6 Days Western Corridor Migration',
		tags: ['Safari', 'Top Rated'],
		parks: 'Tarangire, Western Serengeti, Ngorongoro Crater & Lake Manyara',
	},
	{
		id: 1,
		thumbnail: '',
		name: '6 Days Tanzania Safari Calving Season',
		tags: ['Safari'],
		parks: 'Tarangire, South Serengeti, Ngorongoro Crater & Lake Manyara',
	},
	{
		id: 2,
		thumbnail: '',
		name: '7 Days Tanzania Safari',
		tags: ['Safari'],
		parks: 'Tarangire, Serengeti, Ngorongoro Crater & Lake Manyara',
	},
	{
		id: 3,
		thumbnail: '',
		name: '7 Days North Migration Safari',
		tags: ['Safari'],
		parks: 'Tarangire, Serengeti & Ngorongoro Crater',
	},
	{
		id: 4,
		thumbnail: '',
		name: '7 Days Camping Safari',
		tags: ['Safari'],
		parks: 'Tarangire, Ngorongoro Crater, Serengeti & Lake Manyara',
	},
	{
		id: 5,
		thumbnail: '',
		name: '8 Days North Migration Safari',
		tags: ['Safari', 'Top Rated'],
		parks: 'Tarangire, Serengeti, Manyara & Ngorongoro Crater',
	},
	{
		id: 6,
		thumbnail: '',
		name: '8 Days Family Safari',
		tags: ['Safari'],
		parks: 'Tarangire, Serengeti, Manyara & Ngorongoro Crater',
	},
	{
		id: 7,
		thumbnail: '',
		name: '9 Days Family Tanzania Safari & Beach',
		tags: ['Safari', 'Zanzibar'],
		parks: 'Tarangire, Serengeti, Ngorongoro Crater & Zanzibar',
	},
	{
		id: 8,
		thumbnail: '',
		name: '9 Days Honeymoon Safari & Beach',
		tags: ['Safari', 'Zanzibar', 'Top Rated'],
		parks: 'Tarangire, Serengeti, Ngorongoro Crater & Zanzibar',
	},

	{
		id: 9,
		thumbnail: '',
		name: '12 Days Honeymoon Safari & Beach',
		tags: ['Safari', 'Zanzibar'],
		parks: 'Tarangire, Serengeti, Manyara, Ngorongoro Crater & Zanzibar',
	},
	{
		id: 10,
		thumbnail: '',
		name: 'Ngorongoro Crater Day Trip',
		tags: ['Safari', 'Day Trip'],
		parks: 'Ngorongoro Crater',
	},
	{
		id: 11,
		thumbnail: '',
		name: 'Tarangire National Park Day Trip',
		tags: ['Safari', 'Day Trip'],
		parks: 'Tarangire National Park',
	},
	{
		id: 12,
		thumbnail: '',
		name: 'Lake Manyara National Park Day Trip',
		tags: ['Safari', 'Day Trip'],
		parks: 'Lake Manyara National Park',
	},
];
export default tours;
