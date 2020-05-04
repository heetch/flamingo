import * as React from 'react';
import PropTypes from 'prop-types';
import {
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
  theme,
} from '@chakra-ui/core';

const customTheme = {
  ...theme,
  radii: {
    ...theme.radii,
    xl: '1.5rem',
    l: '1rem',
    m: '0.5rem',
    s: '0.25rem',
  },
  colors: {
    ...theme.colors,
    primary: {
      400: '#ff4d95',
      500: '#ff2773',
      600: '#ff4d95', // hover
    },
    secondary: {
      400: "#252d9b",
      500: "#2b1e70",
      600: "#252d9b", // hover
    }
  },
  fontSizes: {
    ...theme.fontSizes,
    xxs: '0.625rem',
    xs: '0.75rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
  space: {
    ...theme.space,
  },
};

console.log(customTheme);

const ThemeProvider = storyFn => (
  <ChakraThemeProvider theme={customTheme}>
    <CSSReset />
    {storyFn()}
  </ChakraThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
