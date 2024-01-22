/**
 * This type alias is to identify CSS classes within component props,
 * which enables Tailwind IntelliSense
 */
export type CssClasses = string;

export type SvelteEvent<E extends Event = Event, T extends EventTarget = Element> = E & {
	currentTarget: EventTarget & T;
};

export type StyleVariants = {
	[name: string]: {
		colors: CssClasses[];
		border: CssClasses;
		padding: CssClasses;
		radius: CssClasses;
		typography: CssClasses;
		margin: CssClasses;
		top: CssClasses;
		maxWidth: CssClasses;
	};
};

export type IconType = string;

export type TransitionOptions = {
	top?: number;
	bottom?: number;
	once?: boolean;
	animation?: Animation | string;
	delay?: number;
	duration?: number;
	fly?:
	| {
		x: number;
		y: number;
	}
	| undefined;
	axis?: 'x' | 'y';
	threshold?: number;
};

export enum Animation {
	flyIn,
	SomeOtherAnimation
}

export type Contract = {
	id: string;
	amount: number;
	status: 'Pending' | 'Active' | 'Paid' | 'Partially';
	department: 'Accounting' | 'IT' | 'Legal';
	startDate: string;
	endDate: string;
	spendCategory: 'Testing' | 'Manufacturing' | 'Legal';
	attachment: string;
	projectCode: number;
	creator: string;
	approver: string;
	description: string;
	vendorName: string;
};