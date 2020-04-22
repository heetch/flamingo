import PropTypes from 'prop-types';

export const refShapes = [
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
];

export const theme = {
  borderRadius: {
    xl: 'var(--f-borderRadius--xl)',
    l: 'var(--f-borderRadius--l)',
    m: 'var(--f-borderRadius--m)',
    s: 'var(--f-borderRadius--s)',
  },
  breakPoint: {
    s: 'var(--f-breakpoint--s)',
    m: 'var(--f-breakpoint--m)',
    l: 'var(--f-breakpoint--l)',
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
  },
  lineHeight: {
    s: 'var(--f-lineHeight--s)',
    m: 'var(--f-lineHeight--m)',
    l: 'var(--f-lineHeight--l)',
    xl: 'var(--f-lineHeight--xl)',
  },
  space: {
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
