import { create } from '@storybook/theming';
import logo from './logo.png';

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

  colorPrimary: color.brandPrimary,
  colorSecondary: color.brandSecondary,

  appBg: color.elementPrimary,
  appBorderColor: color.elementInactive,
  appBorderRadius: radius.m,

  fontBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  fontCode: 'monospace',

  textColor: color.textPrimary,

  barTextColor: color.textPrimary,
  barSelectedColor: color.brandPrimary,
  barBg: color.elementPrimary,

  inputBg: color.elementPrimary,
  inputBorder: color.elementTertiary,
  inputTextColor: color.textSecondary,
  inputBorderRadius: radius.m,

  brandTitle: 'Heetch Flamingo',
  brandUrl: 'https://www.heetch.com/',
  brandImage: logo,
});
