
type ProjectProps = {
	name: string;
	date: number;
	thumbnail: string;
};

export class Project {
	name: string;
	thumbnail: string;
	date: number;

	public constructor(journey: ProjectProps) {
		this.name = journey.name;
		this.date = journey.date;
		this.thumbnail = journey.thumbnail;
	}
}

export type Projects = {
	[key: string]: Project;
};

const projects: Projects = {
	'hkdi-3-leaf-telescope-1': new Project({
		name: 'HKDI 3-leaf telescopic',
		date: 2022,
		thumbnail: '/projects/HKDI_3-leaf_telescopic_1.jpg',
	}),
'beacon-hill-mont-verra': new Project({
		name: 'Beacon Hill Mont Verra',
		date: 2022,
		thumbnail: '/projects/Beacon_Hill_On_Slope_clipdrop-enhance.jpeg',
	}),
'st-pauls-nursery': new Project({
		name: "St. Paul's Nursery",
		date: 2021,
		thumbnail: '/projects/Hi_Speed_Slide_Gate.jpg',
	}),
	};

export default projects;
