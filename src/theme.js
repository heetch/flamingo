export const theme = {
  borderRadius: {
    xl: 'var(--f-borderRadius--xl)',
    l: 'var(--f-borderRadius--l)',
    m: 'var(--f-borderRadius--m)',
    s: 'var(--f-borderRadius--s)',
  },
  breakPoint: {
    sUp: '@media (min-width: 460px)',
    s: '@media (max-width: 460px)',
    m: '@media (min-width: 460px) and (max-width: 800px)',
    l: '@media (min-width: 1100px)',
  },
  color: {
    brand: {
      primary: 'var(--f-color-brandPrimary)',
      primaryLight: 'var(--f-color-brandPrimary--light)',
      primaryInactive: 'var(--f-color-brandPrimary--inactive)',
      secondary: 'var(--f-color-brandSecondary)',
      secondaryLight: 'var(--f-color-brandSecondary--light)',
    },
    icon: {
      white: 'var(--f-color-icon--white)',
      disabled: 'var(--f-color-icon--disabled)',
      dark: 'var(--f-color-icon--dark)',
    },
    element: {
      primary: 'var(--f-color-element--primary)',
      secondary: 'var(--f-color-element--secondary)',
      tertiary: 'var(--f-color-element--tertiary)',
      inactive: 'var(--f-color-element--inactive)',
      error: 'var(--f-color-element--error)',
      success: 'var(--f-color-element--success)',
      overlay: 'var(--f-color-element--overlay)',
    },
    text: {
      primary: 'var(--f-color-text--primary)',
      secondary: 'var(--f-color-text--secondary)',
      tertiary: 'var(--f-color-text--tertiary)',
      link: 'var(--f-color-text--link)',
      white: 'var(--f-color-text--white)',
      lightGrey: 'var(--f-color-text--lightGrey)',
    },
  },
  color_v3: {
    palette: {
      yellow: {
        shade1: 'var(--f-color-brand-yellow-1)',
        shade2: 'var(--f-color-brand-yellow-2)',
        shade3: 'var(--f-color-brand-yellow-3)',
        shade4: 'var(--f-color-brand-yellow-4)',
      },
      orange: {
        shade1: 'var(--f-color-brand-orange-1)',
        shade2: 'var(--f-color-brand-orange-2)',
        shade3: 'var(--f-color-brand-orange-3)',
        shade4: 'var(--f-color-brand-orange-4)',
      },
      red: {
        shade1: 'var(--f-color-brand-red-1)',
        shade2: 'var(--f-color-brand-red-2)',
        shade3: 'var(--f-color-brand-red-3)',
        shade4: 'var(--f-color-brand-red-4)',
      },
      purple: {
        shade1: 'var(--f-color-brand-purple-1)',
        shade2: 'var(--f-color-brand-purple-2)',
        shade3: 'var(--f-color-brand-purple-3)',
        shade4: 'var(--f-color-brand-purple-4)',
      },
      blue: {
        shade1: 'var(--f-color-brand-blue-1)',
        shade2: 'var(--f-color-brand-blue-2)',
        shade3: 'var(--f-color-brand-blue-3)',
        shade4: 'var(--f-color-brand-blue-4)',
      },
      green: {
        shade1: 'var(--f-color-brand-green-1)',
        shade2: 'var(--f-color-brand-green-2)',
        shade3: 'var(--f-color-brand-green-3)',
        shade4: 'var(--f-color-brand-green-4)',
      },
      cyan: {
        shade1: 'var(--f-color-brand-cyan-1)',
        shade2: 'var(--f-color-brand-cyan-2)',
        shade3: 'var(--f-color-brand-cyan-3)',
        shade4: 'var(--f-color-brand-cyan-4)',
      },
      grey: {
        shade1: 'var(--f-color-brand-grey-1)',
        shade2: 'var(--f-color-brand-grey-2)',
        shade3: 'var(--f-color-brand-grey-3)',
        shade4: 'var(--f-color-brand-grey-4)',
      },
    },
    brand: {
      pink: {
        shade1: 'var(--f-color-brand-pink-shade1)',
        shade2: 'var(--f-color-brand-pink-shade2)',
        shade3: 'var(--f-color-brand-pink-shade3)',
      },
      navy: {
        shade1: 'var(--f-color-brand-navy-shade1)',
        shade2: 'var(--f-color-brand-navy-shade2)',
        shade3: 'var(--f-color-brand-navy-shade3)',
      },
    },
    thirdparty: {
      apple: 'var(--f-color-thirdparty-apple)',
      facebook: 'var(--f-color-thirdparty-facebook)',
    },
    feedback: {
      success: 'var(--f-color-feedback-success)',
      ok: 'var(--f-color-feedback-ok)',
      error: 'var(--f-color-feedback-error)',
    },
    ride: {
      approach: 'var(--f-color-ride-approach)',
      departure: 'var(--f-color-ride-departure)',
      arrival: 'var(--f-color-ride-arrival)',
      trip: 'var(--f-color-ride-trip)',
      stopover: 'var(--f-color-ride-stopover)',
      gms: 'var(--f-color-ride-gms)',
    },
    type: {
      default: 'var(--f-color-type-default)',
      dark: 'var(--f-color-type-dark)',
      light: 'var(--f-color-type-light)',
      inactive: 'var(--f-color-type-inactive)',
      reverse: 'var(--f-color-type-reverse)',
      reverseLight: 'var(--f-color-type-reverse-light)',
      // Persona specifics by type
      passenger: {
        title: 'var(--f-color-type-title-passenger)',
        highlight: 'var(--f-color-type-highlight-passenger)',
      },
      driver: {
        title: 'var(--f-color-type-title-driver)',
        highlight: 'var(--f-color-type-highlight-driver)',
      },
    },
    ui: {
      default: 'var(--f-color-ui-default)',
      reverse: 'var(--f-color-ui-reverse)',
      tertiary: 'var(--f-color-ui-tertiary)',
      // Persona specifics by type
      passenger: {
        primary: 'var(--f-color-ui-primary-passenger)',
        secondary: 'var(--f-color-ui-secondary1-passenger)',
      },
      driver: {
        primary: 'var(--f-color-ui-primary-driver)',
        secondary: 'var(--f-color-ui-secondary-driver)',
      },
    },
    bg: {
      primary: 'var(--f-color-ui-default)',
      secondary: 'var(--f-color-ui-secondary)',
      // Persona specifics by type
      passenger: 'var(--f-color-bg-passenger)',
      driver: 'var(--f-color-bg-driver)',
    },
    // Persona specifics by persona
    passenger: {
      bg: 'var(--f-color-bg-passenger)',
      type: {
        title: 'var(--f-color-type-title-passenger)',
        section: 'var(--f-color-type-section-passenger)',
        highlight: 'var(--f-color-type-highlight-passenger)',
      },
      ui: {
        primary: 'var(--f-color-ui-primary-passenger)',
        secondary: 'var(--f-color-ui-secondary1-passenger)',
        secondary2: 'var(--f-color-ui-secondary2-passenger)',
      },
    },
    driver: {
      bg: 'var(--f-color-bg-driver)',
      type: {
        title: 'var(--f-color-type-title-driver)',
        highlight: 'var(--f-color-type-highlight-driver)',
      },
      ui: {
        primary: 'var(--f-color-ui-primary-driver)',
        secondary: 'var(--f-color-ui-secondary-driver)',
        reward: {
          gold: 'var(--f-color-ui-driver-rewards-gold)',
          silver: 'var(--f-color-ui-driver-rewards-silver)',
          bronze: 'var(--f-color-ui-driver-rewards-bronze)',
        },
      },
    },
  },
  fontSize: {
    xxs: 'var(--f-fontSize--xxs)',
    xs: 'var(--f-fontSize--xs)',
    s: 'var(--f-fontSize--s)',
    m: 'var(--f-fontSize--m)',
    l: 'var(--f-fontSize--l)',
    xl: 'var(--f-fontSize--xl)',
    xxl: 'var(--f-fontSize--xxl)',
  },
  fontWeight: {
    normal: 'var(--f-fontWeight--normal)',
    bold: 'var(--f-fontWeight--bold)',
    black: 'var(--f-fontWeight--black)',
  },
  iconSize: {
    s: 'var(--f-iconSize--s)',
    m: 'var(--f-iconSize--m)',
    l: 'var(--f-iconSize--l)',
    xl: 'var(--f-iconSize--xl)',
  },
  lineHeight: {
    s: 'var(--f-lineHeight--s)',
    m: 'var(--f-lineHeight--m)',
    l: 'var(--f-lineHeight--l)',
    xl: 'var(--f-lineHeight--xl)',
    xxl: 'var(--f-lineHeight--xxl)',
  },
  space: {
    xs: 'var(--f-space--xs)',
    s: 'var(--f-space--s)',
    m: 'var(--f-space--m)',
    l: 'var(--f-space--l)',
    xl: 'var(--f-space--xl)',
    xxl: 'var(--f-space--xxl)',
  },
  zIndex: {
    overlay: 'var(--f-zIndex--Overlay)',
  },
};
