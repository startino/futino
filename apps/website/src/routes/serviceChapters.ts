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
		image: '/artwork/design_illustration.png',
		id: 'design',
		body: `Futino merges AI innovation with human creativity to deliver captivating web 
		experiences. By optimizing workflows and harnessing AI-driven design tools, we create 
		stunning websites with speed and beauty. Our skilled team collaborates closely with 
		clients, fusing creativity and technical expertise to craft engaging designs and intuitive
		 interfaces that are beautiful, unique, and practical.`,
	},
	{
		chapterNumber: 2,
		inView: false,
		title: 'Coding with Intuition',
		image: '/artwork/develop_illustration.png',
		id: 'develop',

		body: `We merged cutting-edge frameworks, modern languages, and AI to create
		 unmatched systems. Our approach embodies efficiency and precision, 
		 where our skilled team harnesses the power of frameworks like Svelte and 
		 TailwindCSS, along with proficiency in modern programming languages 
		 such as TypeScript, Rust, and Python. This fusion allows us to develop 
		 websites that seamlessly blend functionality with creative aesthetics.`,
	},
	{
		chapterNumber: 3,
		inView: false,
		image: '/artwork/hosting_illustration_3.png',
		title: 'Modern Hosting',
		id: 'host',
		body: `Experience Futino's sleek web hosting process that effortlessly manages all technical aspects. This enables you to prioritize your core business while relishing the assurance that your website rests in expert care.`,
	},
];
