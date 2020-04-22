import { create } from '@storybook/theming';
import logo from './heetch-logo.png';

// https://github.com/storybookjs/storybook/blob/next/lib/theming/src/themes/light.ts

const vars = {
  colors: {
    brandPrimary: '#ff2773',
    brandSecondary: '#ff4d95',
    elementPrimary: '#fff',
    elementTertiary: '#b3abbc',
    elementInactive: '#f2f2f2',
    textPrimary: '#190134',
    textSecondary: '#685879',
  },
  radius: {
    m: 4,
  },
};

const { colors, radius } = vars;

export default create({
  base: 'light',

  colorPrimary: colors.brandPrimary,
  colorSecondary: colors.brandSecondary,

  appBg: colors.elementPrimary,
  appBorderColor: colors.elementInactive,
  appBorderRadius: radius.m,

  fontBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  fontCode: 'monospace',

  textColor: colors.textPrimary,

  barTextColor: colors.textPrimary,
  barSelectedColor: colors.brandPrimary,
  barBg: colors.elementPrimary,

  inputBg: colors.elementPrimary,
  inputBorder: colors.elementTertiary,
  inputTextColor: colors.textSecondary,
  inputBorderRadius: radius.m,

  brandTitle: 'Heetch Flamingo',
  brandUrl: 'https://www.heetch.com/',
  brandImage: logo,
});
