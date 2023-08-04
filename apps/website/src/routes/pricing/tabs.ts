import { commission_plans, hosting_plans, marketing_plans, partnership_plans, promotions, type Plan } from "./plans";

export type Tab = {
    index: number;
    label: string;
    subtitle: string,
    plans: Plan[],
    promotions: any | undefined;
}

export const tabs: Tab[] = [
    { label: 'Hosting Plans', index: 0, plans: hosting_plans, promotions: promotions, subtitle: "Experience Lightning-Fast Website Hosting with Our Reliable and Secure Services." },
    { label: 'Marketing Plans', index: 1, plans: marketing_plans, promotions: null, subtitle: "Maximize Your Reach with Tailored Digital Marketing." },
    { label: 'Commission', index: 2, plans: commission_plans, promotions: null, subtitle:"Need some work done? We'll do it."},
    { label: 'Partnership', index: 3, plans: partnership_plans, promotions: null, subtitle: "Shooting for the stars? You'll reach the stars with us." },
];