import {writable, derived } from 'svelte/store';

type JourneyProps = {
	name: string;
	days: number;
	thumbnail: string;
};

export class Journey {
	name: string;
	thumbnail: string;
	days: number;
	duration: string = 'Daytrip';


	public constructor(journey: JourneyProps) {
		this.name = journey.name;
		this.days = journey.days;
		this.thumbnail = journey.thumbnail;
		this.duration = journey.days === 1 ? 'Daytrip' : `${journey.days} Days`;
	}
}

export type Journeys = {
	[key: string]: Journey;
};

const journeys: Journeys = {
	'zanzibar': new Journey({
		name: 'Zanzibar Beach',
		days: 3,
		thumbnail: '',
	}),
	'ngorongoro-crater': new Journey({
		thumbnail: '/images/safari/64.webp',
		name: 'Ngorongoro Crater Day Trip',
		days: 1,
	}),
	'tarangire-national-park': new Journey({
		thumbnail: '/images/safari/21.webp',
		name: 'Tarangire National Park Day Trip',
		days: 1,
	}),
	'6-days-tanzania-safari-calving-season': new Journey({
		thumbnail: '/images/safari/1.webp',
		name: 'Tanzania Safari Calving Season',
		days: 6,
	}),
	'6-days-western-corridor-migration': new Journey({
		thumbnail: '/images/safari/5.webp',
		name: 'Western Corridor Migration',
		days: 6,
	}),
	'7-days-camping-safari': new Journey({
		thumbnail: '/images/safari/44.webp',
		name: 'Camping Safari',
		days: 7,
	}),
	'7-days-north-migration-safari': new Journey({
		thumbnail: '/images/safari/15.webp',
		name: 'North Migration Safari',
		days: 7,
	}),
	'7-days-tanzania-safari': new Journey({
		thumbnail: '/images/safari/11.webp',
		name: 'Tanzania Safari',
		days: 7,
	}),
	'8-days-family-safari': new Journey({
		thumbnail: '/images/safari/25.webp',
		name: 'Family Safari',
		days: 8,
	}),
	'8-days-north-migration-safari': new Journey({
		thumbnail: '/images/safari/63.webp',
		name: 'North Migration Safari',
		days: 8,
	}),
	'9-days-family-tanzania-safari-&-beach': new Journey({
		thumbnail: '/images/safari/27.webp',
		name: 'Family Tanzania Safari & Beach',
		days: 9,
	}),
	'9-days-honeymoon-safari-&-beach': new Journey({
		thumbnail: '/images/safari/65.webp',
		name: 'Honeymoon Safari & Beach',
		days: 9,
	}),
	'12-days-honeymoon-safari-&-beach': new Journey({
		thumbnail: '/images/safari/66.webp',
		name: 'Honeymoon Safari & Beach',
		days: 12,
	}),
	'lake-manyara-national-park-day-trip': new Journey({
		thumbnail: '/images/safari/6.webp',
		name: 'Lake Manyara National Park Day Trip',
		days: 1,
	}),
};


export default journeys;
