import {writable, derived } from 'svelte/store';

type JourneyProps = {
	name: string;
	days: number;
};

export class Journey {
	name: string;
	days: number;
	duration: string = 'Daytrip';

	public constructor(journey: JourneyProps) {
		this.name = journey.name;
		this.days = journey.days;
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
	}),
	'ngorongoro-crater': new Journey({
		name: 'Ngorongoro National Park',
		days: 1,
	}),
	'tarangire-national-park': new Journey({
		name: 'Tarangire National Park',
		days: 1,
	}),
	'6-days-tanzania-safari-calving-season': new Journey({
		name: 'Tarangire National Park',
		days: 1,
	}),
	'6-days-western-corridor-migration': new Journey({
		name: 'Tarangire National Park',
		days: 1,
	}),
	'7-days-camping-safari': new Journey({
		name: 'Tarangire National Park',
		days: 1,
	}),
	'7-days-north-migration-safari': new Journey({
		name: 'Tarangire National Park',
		days: 1,
	}),
	'7-days-tanzania-safari': new Journey({
		name: 'Tarangire National Park',
		days: 1,
	}),
	'8-days-family-safari': new Journey({
		name: 'Tarangire National Park',
		days: 1,
	}),
	'8-days-north-migration-safari': new Journey({
		name: 'Tarangire National Park',
		days: 1,
	}),
	'9-days-family-tanzania-safari-&-beach': new Journey({
		name: 'Tarangire National Park',
		days: 1,
	}),
	'9-days-honeymoon-safari-&-beach': new Journey({
		name: 'Tarangire National Park',
		days: 1,
	}),
	'12-days-honeymoon-safari-&-beach': new Journey({
		name: 'Tarangire National Park',
		days: 1,
	}),
	'lake-manyara-national-park-day-trip': new Journey({
		name: 'Tarangire National Park',
		days: 1,
	}),
};


export default journeys;
