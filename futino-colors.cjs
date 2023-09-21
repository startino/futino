const colors = {
	// Primary tones
	primary: {
		DEFAULT: 'rgb(var(--md-sys-color-primary))',

		on: {
			DEFAULT: 'rgb(var(--md-sys-color-on-primary))',
		},
		container: {
			DEFAULT: 'rgb(var(--md-sys-color-primary-container))',

			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-primary-container))',
			},
		},
		inverse: {
			DEFAULT: 'rgb(var(--md-sys-color-inverse-primary))',
		},
	},

	// Secondary tones
	secondary: {
		DEFAULT: 'rgb(var(--md-sys-color-secondary))',

		on: 'rgb(var(--md-sys-color-on-secondary))',

		container: {
			DEFAULT: 'rgb(var(--md-sys-color-secondary-container))',

			on: 'rgb(var(--md-sys-color-on-secondary-container))',
		},
	},

	// Tertiary tones
	tertiary: {
		DEFAULT: 'rgb(var(--md-sys-color-tertiary))',

		on: 'rgb(var(--md-sys-color-on-tertiary))',

		container: {
			DEFAULT: 'rgb(var(--md-sys-color-tertiary-container))',

			on: 'rgb(var(--md-sys-color-on-tertiary-container))',
		},
	},

	// Neutral tones (md3 names them as 'surface')
	surface: {
		DEFAULT: 'rgb(var(--md-sys-color-surface))',
		on: {
			DEFAULT: 'rgb(var(--md-sys-color-on-surface))',
			inverse: {
				DEFAULT: 'rgb(var(--md-sys-color-inverse-on-surface))',
			},
		},
		// Neutral variant tones
		variant: {
			DEFAULT: 'rgb(var(--md-sys-color-surface-variant))',
			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-surface-variant))',
			},
		},
	},

	// Background tones
	background: {
		DEFAULT: 'rgb(var(--md-sys-color-background))',
		on: {
			DEFAULT: 'rgb(var(--md-sys-color-on-background))',
		},
	},

	outline: {
		DEFAULT: 'rgb(var(--md-sys-color-outline))',
		variant: {
			DEFAULT: 'rgb(var(--md-sys-color-outline-variant))',
		},
	},

	// On Error tones
	error: {
		DEFAULT: 'rgb(var(--md-sys-color-error))',
		on: {
			DEFAULT: 'rgb(var(--md-sys-color-on-error))',
		},
		container: {
			DEFAULT: 'rgb(var(--md-sys-color-error-container))',
			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-error-container))',
			},
		},
	},

	tailwind: {
		// Primary tones
		primary: {
			DEFAULT: 'rgb(var(--md-sys-color-primary)/<alpha-value>)',
			
			on:  'rgb(var(--md-sys-color-on-primary)/<alpha-value>)',
		
			container: {
				DEFAULT: 'rgb(var(--md-sys-color-primary-container)/<alpha-value>)',
				
				on: {
					DEFAULT: 'rgb(var(--md-sys-color-on-primary-container)/<alpha-value>)',
					
				},
			},
			inverse: {
				DEFAULT: 'rgb(var(--md-sys-color-inverse-primary)/<alpha-value>)',
				
			},
		},

		// Secondary tones
		secondary: {
			DEFAULT: 'rgb(var(--md-sys-color-secondary)/<alpha-value>)',
			
			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-secondary)/<alpha-value>)',
			
			},
			container: {
				DEFAULT: 'rgb(var(--md-sys-color-secondary-container)/<alpha-value>)',
				on: {
					DEFAULT: 'rgb(var(--md-sys-color-on-secondary-container)/<alpha-value>)',
					
				},
			},
		},

		// Tertiary tones
		tertiary: {
			DEFAULT: 'rgb(var(--md-sys-color-tertiary)/<alpha-value>)',
			
			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-tertiary)/<alpha-value>)',
				
			},
			container: {
				DEFAULT: 'rgb(var(--md-sys-color-tertiary-container)/<alpha-value>)',
				
				on: {
					DEFAULT: 'rgb(var(--md-sys-color-on-tertiary-container)/<alpha-value>)',
					
				},
			},
		},

		// Neutral tones (md3 names them as 'surface')
		surface: {
			DEFAULT: 'rgb(var(--md-sys-color-surface)/<alpha-value>)',
			
			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-surface)/<alpha-value>)',
				
				inverse: {
					DEFAULT: 'rgb(var(--md-sys-color-inverse-on-surface)/<alpha-value>)',
					
				},
			},
			// Neutral variant tones
			variant: {
				DEFAULT: 'rgb(var(--md-sys-color-surface-variant)/<alpha-value>)',
				
				on: {
					DEFAULT: 'rgb(var(--md-sys-color-on-surface-variant)/<alpha-value>)',
					
				},
			},
		},

		// Background tones
		background: {
			DEFAULT: 'rgb(var(--md-sys-color-background)/<alpha-value>)',
			
			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-background)/<alpha-value>)',
				
			},
		},

		outline: {
			DEFAULT: 'rgb(var(--md-sys-color-outline)/<alpha-value>)',
			
			variant: {
				DEFAULT: 'rgb(var(--md-sys-color-outline-variant)/<alpha-value>)',
			},
		},

		// On Error tones
		error: {
			DEFAULT: 'rgb(var(--md-sys-color-error)/<alpha-value>)',
			on: {
				DEFAULT: 'rgb(var(--md-sys-color-on-error)/<alpha-value>)',
			},
			container: {
				DEFAULT: 'rgb(var(--md-sys-color-error-container)/<alpha-value>)',
				on: {
					DEFAULT: 'rgb(var(--md-sys-color-on-error-container)/<alpha-value>)',
				},
			},
		},
	},
};
module.exports = colors;
