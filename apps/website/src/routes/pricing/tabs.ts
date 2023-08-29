import { commission_plans, marketing_plans, promotions, type Plan } from './plans';

export type Tab = {
	index: number;
	label: string;
	subtitle: string;
	plans: Plan[];
	promotions: any | undefined;
};

export const tabs: Tab[] = [
	{
		label: 'Marketing Plans',
		index: 1,
		plans: marketing_plans,
		promotions: null,
		subtitle: 'Maximize Your Reach with Tailored Digital Marketing.',
	},
	{
		label: 'Commission',
		index: 2,
		plans: commission_plans,
		promotions: null,
		subtitle: "Need some work done? We'll do it.",
	},
];
