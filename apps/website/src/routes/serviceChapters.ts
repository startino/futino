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
		image: '/artwork/sdxl_1.png',
		id: 'design',
		body: `Futino merges AI innovation with human creativity to deliver captivating web experiences. By optimizing workflows and harnessing AI-driven tools, we create stunning websites in a fraction of the time.`,
	},
	{
		chapterNumber: 2,
		inView: false,
		title: 'Coding with Intuition',
		image: '/artwork/develop_illustration.png',
		id: 'develop',
		body: `We blend cutting-edge frameworks, modern languages, and AI for unparalleled systems. Our efficient, precise approach allows us to craft highly functional yet creative websites.`,
	},
	{
		chapterNumber: 3,
		inView: false,
		image: '/artwork/hosting_illustration_3.png',
		title: 'Modern Hosting',
		id: 'host',
		body: `Experience Futino's sleek web hosting process that effortlessly manages all technical aspects. This enables you to prioritize your core business knowing that your website rests in capable hands.`,
	},
];
