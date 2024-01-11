const colors = {
  // Primary tones
  primary: {
    DEFAULT: "rgb(var(--md-sys-color-primary))",
    on: {
      DEFAULT: "rgb(var(--md-sys-color-on-primary))",
    },
    container: {
      DEFAULT: "rgb(var(--md-sys-color-primary-container))",
      on: {
        DEFAULT: "rgb(var(--md-sys-color-on-primary-container))",
      },
    },
    inverse: {
      DEFAULT: "rgb(var(--md-sys-color-inverse-primary))",
    },
  },

  // Secondary tones
  secondary: {
    DEFAULT: "rgb(var(--md-sys-color-secondary))",
    on: {
      DEFAULT: "rgb(var(--md-sys-color-on-secondary))",
    },
    container: {
      DEFAULT: "rgb(var(--md-sys-color-secondary-container))",
      on: {
        DEFAULT: "rgb(var(--md-sys-color-on-secondary-container))",
      },
    },
  },

  // Tertiary tones
  tertiary: {
    DEFAULT: "rgb(var(--md-sys-color-tertiary))",
    on: {
      DEFAULT: "rgb(var(--md-sys-color-on-tertiary))",
    },
    container: {
      DEFAULT: "rgb(var(--md-sys-color-tertiary-container))",
      on: {
        DEFAULT: "rgb(var(--md-sys-color-on-tertiary-container))",
      },
    },
  },

  // Neutral tones (md3 names them as 'surface')
  surface: {
    DEFAULT: "rgb(var(--md-sys-color-surface))",
    on: {
      DEFAULT: "rgb(var(--md-sys-color-on-surface))",
      inverse: {
        DEFAULT: "rgb(var(--md-sys-color-inverse-on-surface))",
      },
    },
    // Neutral variant tones
    variant: {
      DEFAULT: "rgb(var(--md-sys-color-surface-variant))",
      on: {
        DEFAULT: "rgb(var(--md-sys-color-on-surface-variant))",
      },
    },
  },

  // Background tones
  background: {
    DEFAULT: "rgb(var(--md-sys-color-background))",
    on: {
      DEFAULT: "rgb(var(--md-sys-color-on-background))",
    },
  },

  outline: {
    DEFAULT: "rgb(var(--md-sys-color-outline))",
    variant: {
      DEFAULT: "rgb(var(--md-sys-color-outline-variant))",
    },
  },

  // On Error tones
  error: {
    DEFAULT: "rgb(var(--md-sys-color-error))",
    on: {
      DEFAULT: "rgb(var(--md-sys-color-on-error))",
    },
    container: {
      DEFAULT: "rgb(var(--md-sys-color-error-container))",
      on: {
        DEFAULT: "rgb(var(--md-sys-color-on-error-container))",
      },
    },
  },
};
module.exports = colors;
