const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        bilbo: ['Bilbo Swash Caps'],
        ubuntu: ['Ubuntu'],
      },
      boxShadow: {
        glow: '0 0 4px 4px current;',
      },
      dropShadow: {
        'service-art': ['0 0 2px rgb(var(--md-sys-color-tertiary-container-dark))', '0 0 5px rgb(var(--md-sys-color-tertiary-container-dark) / 0.7)'],
        'pricing-art': ['0 0 3px rgb(var(--md-sys-color-tertiary-container-dark) / 0.7)', '0 0 3px rgb(var(--md-sys-color-tertiary-container-dark) / 0.7)'],
        'benefit-art': '0 0 1px rgb(var(--md-sys-color-primary-container-dark) / 1)',
        'benefit-art-hover': '0 0 4px rgb(var(--md-sys-color-primary-container-dark) / 0.9)',
        'star': ['0 0 7px rgb(var(--md-sys-color-tertiary-container-dark))', '0 0 7px rgb(var(--md-sys-color-tertiary-container-dark))'],
        whatsapp: ['-5px 2px 7px #064A16BB', '5px -2px 7px #064A16BB'],
        'whatsapp-hover': ['-5px 2px 10px #064A16FF', '5px -2px 10px #064A16FF'],
        instagram: ['-5px 2px 7px #04417FBB', '5px -2px 7px #700053BB'],
        'instagram-hover': ['-5px 2px 10px #04417FFF', '5px -2px 10px #700053FF'],

        phone: ['-5px 2px 7px #5C0C9DBB', '5px -2px 7px #1A24A4BB'],
        'phone-hover': ['-5px 2px 10px #5C0C9DFF', '5px -2px 10px #1A24A4FF'],
        email: ['-5px 2px 7px #D31B35BB', '5px -2px 7px #D31B35BB'],
        'email-hover': ['-5px 2px 10px #D31B35FF', '5px -2px 10px #D31B35FF'],
        'instagram-sm': ['-5px 2px 5px #04417FBB', '5px -2px 5px #700053BB'],
        'instagram-sm-hover': ['-5px 2px 6px #04417FEE', '5px -2px 6px #700053EE'],
        youtube: ['0px 0px 5px #FF0000BB'],
        'youtube-hover': ['0px 0px 7px #FF0000FF'],
        github: ['0px 0px 5px #FFFFFFBB'],
        'github-hover': ['0px 0px 7px #FFFFFFFF'],
        facebook: ['0px 0px 5px #1877F2BB'],
        'facebook-hover': ['0px 0px 7px #1877F2FF'],
        linkedin: ['0px 0px 5px #0077B5BB'],
        'linkedin-hover': ['0px 0px 7px #0077B5FF'],


        'glow-sm-dark': '0 0 5px rgb(var(--md-sys-color-primary-container-dark) / 0.5)',
        'glow-md-dark': '0 0 10px rgb(var(--md-sys-color-primary-container-dark) / 0.5)',
        'glow-lg-dark': '0 0 15px rgb(var(--md-sys-color-primary-container-dark) / 0.5)',
        'glow-xl-dark': '0 0 20px rgb(var(--md-sys-color-primary-container-dark) / 0.5)',
        'glow-2xl-dark': '0 0 25px rgb(var(--md-sys-color-primary-container-dark) / 0.5)',
      },
      spacing: {
        110: '27.5rem',
        600: '600px',
        800: '800px',
      },

      borderWidth: {
        1: '1px',
      },
      backgroundSize: {
        '50%': '50%',
        '25%': '25%',
      },

      animation: {
        shine: 'shine 0.9s ease-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
        slideDown: 'slideDown 5s ease-in-out 1',
        scroll: 'scroll 5s ease-in-out',
        carouselSlide: 'carouselSlide infinite 25s linear',
        typingtitle: 'typing 1s steps(5), blinkCursor 6 0.5s steps(5) ',
        typingsubtitle: 'typing 3s steps(64), blinkCursor infinite 0.5s steps(64) ',
        ripple: 'ripple 0.7s ',
        fadeIn: 'fadeIn 2s ',
        fadeOut: 'fadeOut 2s',
        glow: 'glow 3s infinite',
      },

      keyframes: {
        ripple: {
          to: {
            transform: 'scale(4)',
            opacity: 0,
          },
        },
        typing: {
          '0%': { width: '0' },
          '99%': { width: '100%' },
          '100%': { 'border-right-color': 'transparent' },
        },
        blinkCursor: {
          '0%': { 'border-right-color': 'white' },
          '50%': { 'border-right-color': 'transparent' },
        },
        carouselSlide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shine: {
          '100%': { left: '125%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideDown: {
          '0%, 100%': { transform: 'translate(0%,-200%)', opacity: 0 },
          '1%, 99%': { opacity: 1 },
          '20%, 70%': { transform: 'translate(0%, 0%)' },
        },
        scroll: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { transform: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { transform: 0 },
        },
        glow: {
          '0%, 100%': { transform: 'rotate3d(0)' },
          '50%': { transform: 'rotate3d(0,1,0,90deg)' },
        },
      },

      colors: {
        // Primary tones
        primary: {
           'rgb(var( <alpha-value>)',
          on: {
             'rgb(var( <alpha-value>) ',
          },
          container: {
             'rgb(var( <alpha-value>) ',
            on: {
               'rgb(var( <alpha-value>) ',
            },
          },
          inverse: {
             'rgb(var( <alpha-value>) ',
          },
        },

        // Secondary tones
        secondary: {
           'rgb(var( <alpha-value>) ',
          on: {
             'rgb(var( <alpha-value>) ',
          },
          container: {
             'rgb(var( <alpha-value>) ',
            on: {
               'rgb(var( <alpha-value>) ',
            },
          },
        },

        // Tertiary tones
        tertiary: {
           'rgb(var( <alpha-value>) ',
          on: {
             'rgb(var( <alpha-value>) ',
          },
          container: {
             'rgb(var( <alpha-value>) ',
            on: {
               'rgb(var( <alpha-value>) ',
            },
          },
        },

        // Neutral tones (md3 names them as 'surface')
        surface: {
           'rgb(var( <alpha-value>) ',
          on: {
             'rgb(var( <alpha-value>) ',
            inverse: {
               'rgb(var( <alpha-value>) ',
            },
          },
          // Neutral variant tones
          variant: {
             'rgb(var( <alpha-value>) ',
            on: {
               'rgb(var( <alpha-value>) ',
            },
          },
        },

        // Background tones
        background: {
           'rgb(var( <alpha-value>) ',
          on: {
             'rgb(var( <alpha-value>) ',
          },
        },

        outline: {
           'rgb(var( <alpha-value>) ',
          variant: {
             'rgb(var( <alpha-value>) ',
          },
        },

        // On Error tones
        error: {
           'rgb(var( <alpha-value>) ',
          on: {
             'rgb(var( <alpha-value>) ',
          },
          container: {
             'rgb(var( <alpha-value>) ',
            on: {
               'rgb(var( <alpha-value>) ',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
};

module.exports = config;
