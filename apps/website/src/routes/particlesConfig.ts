export const particlesConfig = {
	background: {},
	fpsLimit: 120,
	interactivity: {
		events: {
			onClick: {
				enable: true,
				//mode: 'push'
			},
			resize: true,
		},
		modes: {
			bubble: {
				distance: 400,
				duration: 2,
				opacity: 0.8,
				size: 40,
			},
			push: {
				quantity: 2,
			},
		},
	},
	particles: {
		color: {
			value: '#FFF',
		},
		links: {
			color: '#45dfa4',
			distance: 500,
			enable: true,
			opacity: 0.7,
			width: 1,
		},
		collisions: {
			enable: true,
		},
		move: {
			direction: 'none',
			enable: true,
			outMode: 'bounce',
			random: false,
			speed: 3,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				area: 400,
			},
			value: 3,
		},
		opacity: {
			value: 1,
		},
		shape: {
			type: 'circle',
		},
		size: {
			random: true,
			value: 5,
		},
	},
	detectRetina: true,
	fullScreen: false,
};