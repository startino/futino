const colors = {
	// Primary tones
	primary: {
		DEFAULT: "rgb(var(--md-sys-color-primary))",
		on: {
			DEFAULT: "rgb(var(--md-sys-color-on-primary))"
		},
		container: {
			DEFAULT: "rgb(var(--md-sys-color-primary-container))",
			on: {
				DEFAULT: "rgb(var(--md-sys-color-on-primary-container))"
			}
		},
		inverse: {
			DEFAULT: "rgb(var(--md-sys-color-inverse-primary))"
		}
	},

	// Secondary tones
	secondary: {
		DEFAULT: "rgb(var(--md-sys-color-secondary))",
		on: {
			DEFAULT: "rgb(var(--md-sys-color-on-secondary))"
		},
		container: {
			DEFAULT: "rgb(var(--md-sys-color-secondary-container))",
			on: {
				DEFAULT: "rgb(var(--md-sys-color-on-secondary-container))"
			}
		}
	},

	// Tertiary tones
	tertiary: {
		DEFAULT: "rgb(var(--md-sys-color-tertiary))",
		on: {
			DEFAULT: "rgb(var(--md-sys-color-on-tertiary))"
		},
		container: {
			DEFAULT: "rgb(var(--md-sys-color-tertiary-container))",
			on: {
				DEFAULT: "rgb(var(--md-sys-color-on-tertiary-container))"
			}
		}
	},

	// Neutral tones (md3 names them as 'surface')
	surface: {
		DEFAULT: "rgb(var(--md-sys-color-surface))",
		on: {
			DEFAULT: "rgb(var(--md-sys-color-on-surface))",
			inverse: {
				DEFAULT: "rgb(var(--md-sys-color-inverse-on-surface))"
			}
		},
		// Neutral variant tones
		variant: {
			DEFAULT: "rgb(var(--md-sys-color-surface-variant))",
			on: {
				DEFAULT: "rgb(var(--md-sys-color-on-surface-variant))"
			}
		}
	},

	// Background tones
	background: {
		DEFAULT: "rgb(var(--md-sys-color-background))",
		on: {
			DEFAULT: "rgb(var(--md-sys-color-on-background))"
		}
	},

	outline: {
		DEFAULT: "rgb(var(--md-sys-color-outline))",
		variant: {
			DEFAULT: "rgb(var(--md-sys-color-outline-variant))"
		}
	},

	// On Error tones
	error: {
		DEFAULT: "rgb(var(--md-sys-color-error))",
		on: {
			DEFAULT: "rgb(var(--md-sys-color-on-error))"
		},
		container: {
			DEFAULT: "rgb(var(--md-sys-color-error-container))",
			on: {
				DEFAULT: "rgb(var(--md-sys-color-on-error-container))"
			}
		}
	}
};

// shadcn compat
colors.border = "rgb(var(--md-sys-color-primary) / 0.3)";
colors.input = "rgb(var(--input) )";
colors.ring = "rgb(var(--ring) )";
colors.foreground = colors.background.on.DEFAULT;
colors.primary.foreground = colors.primary.on.DEFAULT;
colors.secondary.foreground = colors.secondary.on.DEFAULT;
colors.accent = colors.tertiary.DEFAULT;
colors.accent.foreground = colors.tertiary.on.DEFAULT;
colors.destructive = colors.error.DEFAULT;
colors.destructive.foreground = colors.error.on.DEFAULT;
colors.muted = {
	DEFAULT: "rgb(var(--muted) )",
	foreground: "rgb(var(--muted-foreground) )"
};
colors.popover = {
	DEFAULT: "rgb(var(--popover) )",
	foreground: "rgb(var(--popover-foreground) )"
};
colors.card = {
	DEFAULT: "rgb(var(--card) )",
	foreground: "rgb(var(--card-foreground) )"
};
// end shadcn compat

module.exports = colors;
