import { mergeDictionaries } from '@repo/deprecated-lorc';

const buttonVariants: any = {
	DEFAULT: {
		colors: ['bg-surface', 'bg-surface-highlight'],
		border: '',
		padding: 'px-6 py-4',
		radius: 'rounded-md',
		typography: ''
	},
	pill: {
		colors: ['bg-surface', 'bg-surface-highlight'],
		border: '',
		padding: 'px-10 py-2',
		radius: 'rounded-full',
		typography: ''
	}
};

// Configures the button theming based on variant. It can be overwritten in main "genLorc()" function.
function genButtonConfig(variant: string | undefined) {
	if (!variant) {
		return buttonVariants.DEFAULT;
	} else {
		return buttonVariants[variant];
	}
}
function genHeroConfig(variant: string) {
	return {};
}

export function genLorc() {
	// Loading variant configs
	const button = genButtonConfig('pill');
	const hero = genHeroConfig('pill');
	const variantConfigs = { button: button, hero: hero };
	const projectSpecificConfigs = {
		button: {
			// Most of these options can be generated from 'variants' to help give the main config, rare things like changing button             // color can be done separately, somehow.
			border: 'border-1',
			radius: 'rounded-md',
			padding: 'px-12 py-4',
			colors: {
				DEFAULT: 'bg-surface',
				hover: 'bg-surface-highlight',
				focus: 'bg-surface-highlight/80'
			},
			typography: {
				size: 'sm', // this is something i've added to prose (sm, md, lg sizes to accomodate for designs)
				uppercase: true
			}
		},
		hero: {
			// Theming to apply for when the user has scrolled down
			minified: {
				colors: 'bg-surface' // If no nested config is used, the value is the same as 'DEFAULT', from a nested config.
			}
		}
	};

	// Merge dictionaries. Second dictionary overrides first one.
	let finalConfig = mergeDictionaries(variantConfigs, projectSpecificConfigs);

	return finalConfig;
}
