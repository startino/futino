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
	zanzibar: new Journey({
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
};

export default journeys;
