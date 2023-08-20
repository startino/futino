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
		title: 'AI-Powered Design Solutions',
		image: "/artwork/design_illustration.png",
		id: 'design',
		body: `Futino merges AI innovation with human creativity, delivering captivating web experiences. By optimizing workflows and harnessing AI-driven design tools, we create stunning websites with speed and precision. Our skilled team collaborates closely with clients, fusing creativity and technical expertise to craft engaging designs and intuitive interfaces that captivate users.`
	},
	{
		chapterNumber: 2,
		inView: false,
		title: 'Development with Intuition',
		image: '/artwork/develop_illustration.png',
		id: 'develop',
		
		body: `We merged cutting-edge frameworks with modern languages. Our team utilizes Svelte and TailwindCSS for efficient, responsive websites, offering smooth interactivity and brand-aligned designs. Proficient in TypeScript, Python, HTML, and CSS, we swiftly develop robust and scalable web solutions, ensuring efficiency and speed.`,
	},
	{
		chapterNumber: 3,
		inView: false,
		image: '/artwork/hosting_illustration_2.png',
		title: 'Modern Hosting',
		id: 'host',
	
		body: `Futino's streamlined web hosting process takes care of all the technical aspects, allowing you to focus on your core business while enjoying the peace of mind that your website is in capable hands.`,
	},
	{
		chapterNumber: 4,
		inView: false,
		title: 'Personal Marketing',
		image: '/artwork/develop_illustration.png',
		id: 'marketing',
		
		body: `Our team works closely with you to understand your brand, target audience, and marketing goals. We craft personalized social media strategies that align with your objectives, leveraging data-driven insights and AI-powered analytics to optimize campaign performance.`,
	},
];
