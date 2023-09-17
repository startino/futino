import { writable, derived } from 'svelte/store';
import { journeysStore } from './journeysStore';

type JourneyProps = {
	name: string;
	days: number;
	thumbnail: string;
	midrange: number[];
	luxury: number[];
};

export class Journey {
	name: string;
	thumbnail: string;
	days: number;
	duration: string = 'Daytrip';
	midrange: number[] = [];
	luxury: number[] = [];

	public constructor(journey: JourneyProps) {
		this.name = journey.name;
		this.days = journey.days;
		this.thumbnail = journey.thumbnail;
		this.duration = journey.days === 1 ? 'Daytrip' : `${journey.days} Days`;
		this.midrange = journey.midrange;
		this.luxury = journey.luxury;
	}
}

export type Journeys = {
	[key: string]: Journey;
};

const journeys: Journeys = {
	zanzibar: new Journey({
		name: 'Zanzibar Beach',
		days: 3,
		thumbnail: '/images/zanzibar/2.webp',
		midrange: [], // No price for this item
		luxury: [], // No price for this item
	}),
	'marangu-route': new Journey({
		name: 'Kilimanjaro Marangu Route',
		days: 5,
		thumbnail: '/images/kilimanjaro/2.webp',
		midrange: [], // No price for this item
		luxury: [], // No price for this item
	}),
	'machame-route': new Journey({
		name: 'Kilimanjaro Machame Route',
		days: 6,
		thumbnail: '/images/kilimanjaro/5.webp',
		midrange: [], // No price for this item
		luxury: [], // No price for this item
	}),
	'lemosho-route': new Journey({
		name: 'Kilimanjaro Lemosho Route',
		days: 7,
		thumbnail: '/images/kilimanjaro/11.webp',
		midrange: [], // No price for this item
		luxury: [], // No price for this item
	}),
	'momella-route': new Journey({
		name: 'Mt Meru Momella Route',
		days: 7,
		thumbnail: '/images/kilimanjaro/11.webp',
		midrange: [], // No price for this item
		luxury: [], // No price for this item
	}),

	'ngorongoro-crater-day-trip': new Journey({
		thumbnail: '/images/safari/64.webp',
		name: 'Ngorongoro Crater Day Trip',
		days: 1,
		midrange: [410, 0],
		luxury: [0, 0], // Only one standard for day trips
	}),
	'tarangire-national-park-day-trip': new Journey({
		thumbnail: '/images/safari/21.webp',
		name: 'Tarangire National Park Day Trip',
		days: 1,
		midrange: [410, 0],
		luxury: [0, 0], // Only one standard for day trips
	}),
	'6-days-tanzania-safari-calving-season': new Journey({
		thumbnail: '/images/safari/1.webp',
		name: 'Tanzania Safari Calving Season',
		days: 6,
		midrange: [420, 785],
		luxury: [920, 1284],
	}),
	'6-days-western-corridor-migration': new Journey({
		thumbnail: '/images/safari/5.webp',
		name: 'Western Corridor Migration',
		days: 6,
		midrange: [420, 785],
		luxury: [920, 1284],
	}),
	'7-days-camping-safari': new Journey({
		thumbnail: '/images/safari/44.webp',
		name: 'Camping Safari',
		days: 7,
		midrange: [228, 517],
		luxury: [0, 0], // Missing from doc
	}),
	'7-days-north-migration-safari': new Journey({
		thumbnail: '/images/safari/15.webp',
		name: 'North Migration Safari',
		days: 7,
		midrange: [419, 790],
		luxury: [782, 1154],
	}),
	'7-days-tanzania-safari': new Journey({
		thumbnail: '/images/safari/11.webp',
		name: 'Tanzania Safari',
		days: 7,
		midrange: [414, 776],
		luxury: [943, 1314],
	}),
	'8-days-family-safari': new Journey({
		thumbnail: '/images/safari/25.webp',
		name: 'Family Safari',
		days: 8,
		midrange: [0, 0], // Missing from doc
		luxury: [1050, 1317],
	}),
	'8-days-north-migration-safari': new Journey({
		thumbnail: '/images/safari/63.webp',
		name: 'North Migration Safari',
		days: 8,
		midrange: [631, 992],
		luxury: [1050, 1317],
	}),
	'9-days-family-tanzania-safari-&-beach': new Journey({
		thumbnail: '/images/safari/27.webp',
		name: 'Family Tanzania Safari & Beach',
		days: 9,
		midrange: [403, 646], // Missing from doc
		luxury: [0, 0], // Missing from doc
	}),
	'9-days-honeymoon-safari-&-beach': new Journey({
		thumbnail: '/images/safari/65.webp',
		name: 'Honeymoon Safari & Beach',
		days: 9,
		midrange: [451, 451], // Missing from doc
		luxury: [0, 0], // Missing from doc
	}),
	'12-days-honeymoon-safari-&-beach': new Journey({
		thumbnail: '/images/safari/66.webp',
		name: 'Honeymoon Safari & Beach',
		days: 12,
		midrange: [0, 0], // Missing from doc
		luxury: [1029, 1029], // Missing from doc
	}),
	'lake-manyara-national-park-day-trip': new Journey({
		thumbnail: '/images/safari/6.webp',
		name: 'Lake Manyara National Park Day Trip',
		days: 1,
		midrange: [410, 0],
		luxury: [0, 0], // Only one standard for day trips
	}),
};

export default journeys;
