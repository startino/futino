// All this text is performance heavy for some reason...
// Not sure if it's because we're importing it into the page or what. makes it go from 95->69
export const servicesChapters: {
	chapterNumber: number;
	inView: boolean;
	title: string;
	image: string;
	id: string;
	body: string;
}[] = [
	{
		chapterNumber: 1,
		inView: false,
		title: 'AI-Powered Design',
		image: '/artwork/design_2.png',
		id: 'design',
		body: `By optimizing workflows and harnessing AI-driven tools, we create stunning websites in a fraction of the time.`,
	},
	{
		chapterNumber: 2,
		inView: false,
		title: 'Coding with Intuition',
		image: '/artwork/develop_1.png',
		id: 'develop',
		body: `We blend cutting-edge frameworks, modern languages, and AI to craft highly functional yet creative websites.`,
	},
	{
		chapterNumber: 3,
		inView: false,
		image: '/artwork/server_4.png',
		title: 'Modern Hosting',
		id: 'host',
		body: `Our sleek web hosting process effortlessly manages all technical aspects, enabling you to prioritize your core business.`,
	},
];
