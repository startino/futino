export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/about": [4],
		"/admin": [5],
		"/contact": [6],
		"/legal/licenses": [7],
		"/legal/privacy": [8],
		"/legal/terms": [9],
		"/our-work": [10],
		"/products": [11,[2]],
		"/products/avon-barriers": [12,[2]],
		"/products/commercial-doors": [13,[2]],
		"/products/garage-doors/canopy": [14,[2]],
		"/products/garage-doors/martin": [15,[2]],
		"/products/garage-doors/sectional": [16,[2]],
		"/products/renlita-doors": [17,[2]],
		"/products/residential-gates/folding": [18,[2]],
		"/products/residential-gates/sliding": [19,[2]],
		"/products/residential-gates/swinging": [20,[2]],
		"/products/secret-doors": [21,[2]],
		"/products/shutter-doors/fire": [22,[2]],
		"/products/shutter-doors/roller": [23,[2]],
		"/services": [24]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';