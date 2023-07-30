const colors = {
  // Primary tones
  primary: {
    light: 'rgb(var(--md-sys-color-primary-light))',
    dark: 'rgb(var(--md-sys-color-primary-dark))',
    on: {
      light: 'rgb(var(--md-sys-color-on-primary-light))',
      dark: 'rgb(var(--md-sys-color-on-primary-dark))',
    },
    container: {
      light: 'rgb(var(--md-sys-color-primary-container-light))',
      dark: 'rgb(var(--md-sys-color-primary-container-dark))',
      on: {
        light: 'rgb(var(--md-sys-color-on-primary-container-light))',
        dark: 'rgb(var(--md-sys-color-on-primary-container-dark))',
      },
    },
    inverse: {
      light: 'rgb(var(--md-sys-color-inverse-primary-light))',
      dark: 'rgb(var(--md-sys-color-on-primary-container-dark))',
    },
  },

  // Secondary tones
  secondary: {
    light: 'rgb(var(--md-sys-color-secondary-light))',
    dark: 'rgb(var(--md-sys-color-secondary-dark))',
    on: {
      light: 'rgb(var(--md-sys-color-on-secondary-light))',
      dark: 'rgb(var(--md-sys-color-on-secondary-dark))',
    },
    container: {
      light: 'rgb(var(--md-sys-color-secondary-container-light))',
      dark: 'rgb(var(--md-sys-color-secondary-container-dark))',
      on: {
        light: 'rgb(var(--md-sys-color-on-secondary-container-light))',
        dark: 'rgb(var(--md-sys-color-on-secondary-container-dark))',
      },
    },
  },

  // Tertiary tones
  tertiary: {
    light: 'rgb(var(--md-sys-color-tertiary-light))',
    dark: 'rgb(var(--md-sys-color-tertiary-dark))',
    on: {
      light: 'rgb(var(--md-sys-color-on-tertiary-light))',
      dark: 'rgb(var(--md-sys-color-on-tertiary-dark))',
    },
    container: {
      light: 'rgb(var(--md-sys-color-tertiary-container-light))',
      dark: 'rgb(var(--md-sys-color-tertiary-container-dark))',
      on: {
        light: 'rgb(var(--md-sys-color-on-tertiary-container-light))',
        dark: 'rgb(var(--md-sys-color-on-tertiary-container-dark))',
      },
    },
  },

  // Neutral tones (md3 names them as 'surface')
  surface: {
    light: 'rgb(var(--md-sys-color-surface-light))',
    dark: 'rgb(var(--md-sys-color-surface-dark))',
    on: {
      light: 'rgb(var(--md-sys-color-on-surface-light))',
      dark: 'rgb(var(--md-sys-color-on-surface-dark))',
      inverse: {
        light: 'rgb(var(--md-sys-color-inverse-on-surface-light))',
        dark: 'rgb(var(--md-sys-color-inverse-on-surface-dark))',
      },
    },
    // Neutral variant tones
    variant: {
      light: 'rgb(var(--md-sys-color-surface-variant-light))',
      dark: 'rgb(var(--md-sys-color-surface-variant-dark))',
      on: {
        light: 'rgb(var(--md-sys-color-on-surface-variant-light))',
        dark: 'rgb(var(--md-sys-color-on-surface-variant-dark))',
      },
    },
  },

  // Background tones
  background: {
    light: 'rgb(var(--md-sys-color-background-light))',
    dark: 'rgb(var(--md-sys-color-background-dark))',
    on: {
      light: 'rgb(var(--md-sys-color-on-background-light))',
      dark: 'rgb(var(--md-sys-color-on-background-dark))',
    },
  },

  outline: {
    light: 'rgb(var(--md-sys-color-outline-light))',
    dark: 'rgb(var(--md-sys-color-outline-dark))',
    variant: {
      light: 'rgb(var(--md-sys-color-outline-variant-light))',
      dark: 'rgb(var(--md-sys-color-outline-variant-dark))',
    },
  },

  // On Error tones
  error: {
    light: 'rgb(var(--md-sys-color-error-light))',
    dark: 'rgb(var(--md-sys-color-error-dark))',
    on: {
      light: 'rgb(var(--md-sys-color-on-error-light))',
      dark: 'rgb(var(--md-sys-color-on-error-dark))',
    },
    container: {
      light: 'rgb(var(--md-sys-color-error-container-light))',
      dark: 'rgb(var(--md-sys-color-error-container-light))',
      on: {
        light: 'rgb(var(--md-sys-color-on-error-container-light))',
        dark: 'rgb(var(--md-sys-color-on-error-container-dark))',
      },
    },
  },

  tailwind: {
    // Primary tones
    primary: {
      light: 'rgb(var(--md-sys-color-primary-light)/<alpha-value>)',
      dark: 'rgb(var(--md-sys-color-primary-dark)/<alpha-value>)',
      on: {
        light: 'rgb(var(--md-sys-color-on-primary-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-primary-dark)/<alpha-value>)',
      },
      container: {
        light: 'rgb(var(--md-sys-color-primary-container-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-primary-container-dark)/<alpha-value>)',
        on: {
          light: 'rgb(var(--md-sys-color-on-primary-container-light)/<alpha-value>)',
          dark: 'rgb(var(--md-sys-color-on-primary-container-dark)/<alpha-value>)',
        },
      },
      inverse: {
        light: 'rgb(var(--md-sys-color-inverse-primary-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-primary-container-dark)/<alpha-value>)',
      },
    },

    // Secondary tones
    secondary: {
      light: 'rgb(var(--md-sys-color-secondary-light)/<alpha-value>)',
      dark: 'rgb(var(--md-sys-color-secondary-dark)/<alpha-value>)',
      on: {
        light: 'rgb(var(--md-sys-color-on-secondary-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-secondary-dark)/<alpha-value>)',
      },
      container: {
        light: 'rgb(var(--md-sys-color-secondary-container-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-secondary-container-dark)/<alpha-value>)',
        on: {
          light: 'rgb(var(--md-sys-color-on-secondary-container-light)/<alpha-value>)',
          dark: 'rgb(var(--md-sys-color-on-secondary-container-dark)/<alpha-value>)',
        },
      },
    },

    // Tertiary tones
    tertiary: {
      light: 'rgb(var(--md-sys-color-tertiary-light)/<alpha-value>)',
      dark: 'rgb(var(--md-sys-color-tertiary-dark)/<alpha-value>)',
      on: {
        light: 'rgb(var(--md-sys-color-on-tertiary-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-tertiary-dark)/<alpha-value>)',
      },
      container: {
        light: 'rgb(var(--md-sys-color-tertiary-container-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-tertiary-container-dark)/<alpha-value>)',
        on: {
          light: 'rgb(var(--md-sys-color-on-tertiary-container-light)/<alpha-value>)',
          dark: 'rgb(var(--md-sys-color-on-tertiary-container-dark)/<alpha-value>)',
        },
      },
    },

    // Neutral tones (md3 names them as 'surface')
    surface: {
      light: 'rgb(var(--md-sys-color-surface-light)/<alpha-value>)',
      dark: 'rgb(var(--md-sys-color-surface-dark)/<alpha-value>)',
      on: {
        light: 'rgb(var(--md-sys-color-on-surface-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-surface-dark)/<alpha-value>)',
        inverse: {
          light: 'rgb(var(--md-sys-color-inverse-on-surface-light)/<alpha-value>)',
          dark: 'rgb(var(--md-sys-color-inverse-on-surface-dark)/<alpha-value>)',
        },
      },
      // Neutral variant tones
      variant: {
        light: 'rgb(var(--md-sys-color-surface-variant-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-surface-variant-dark)/<alpha-value>)',
        on: {
          light: 'rgb(var(--md-sys-color-on-surface-variant-light)/<alpha-value>)',
          dark: 'rgb(var(--md-sys-color-on-surface-variant-dark)/<alpha-value>)',
        },
      },
    },

    // Background tones
    background: {
      light: 'rgb(var(--md-sys-color-background-light)/<alpha-value>)',
      dark: 'rgb(var(--md-sys-color-background-dark)/<alpha-value>)',
      on: {
        light: 'rgb(var(--md-sys-color-on-background-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-background-dark)/<alpha-value>)',
      },
    },

    outline: {
      light: 'rgb(var(--md-sys-color-outline-light)/<alpha-value>)',
      dark: 'rgb(var(--md-sys-color-outline-dark)/<alpha-value>)',
      variant: {
        light: 'rgb(var(--md-sys-color-outline-variant-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-outline-variant-dark)/<alpha-value>)',
      },
    },

    // On Error tones
    error: {
      light: 'rgb(var(--md-sys-color-error-light)/<alpha-value>)',
      dark: 'rgb(var(--md-sys-color-error-dark)/<alpha-value>)',
      on: {
        light: 'rgb(var(--md-sys-color-on-error-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-on-error-dark)/<alpha-value>)',
      },
      container: {
        light: 'rgb(var(--md-sys-color-error-container-light)/<alpha-value>)',
        dark: 'rgb(var(--md-sys-color-error-container-light)/<alpha-value>)',
        on: {
          light: 'rgb(var(--md-sys-color-on-error-container-light)/<alpha-value>)',
          dark: 'rgb(var(--md-sys-color-on-error-container-dark)/<alpha-value>)',
        },
      },
    },
  },

}
module.exports = colors;
