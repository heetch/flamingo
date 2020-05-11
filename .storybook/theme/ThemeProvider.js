import React from 'react';
import PropTypes from 'prop-types';
import {
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
  theme as chakraDefaultTheme,
} from '@chakra-ui/core';

// @TODO: move this into src/components
// @TODO: speak with designers about the colors palette
const theme = {
  ...chakraDefaultTheme,
  breakpoints: ['28.75rem', '50rem', '68.75rem'],
  colors: {
    ...chakraDefaultTheme.colors,
    primary: {
      400: '#ff4d95',
      500: '#ff2773',
      600: '#ff4d95', // hover
    },
    secondary: {
      400: '#252d9b',
      500: '#2b1e70',
      600: '#252d9b', // hover
    },
  },
  fontSizes: {
    xxs: '0.625rem',
    xs: '0.75rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
  radii: {
    s: '0.25rem',
    m: '0.5rem',
    l: '1rem',
    xl: '1.5rem',
  },
  space: {
    s: '0.25rem',
    m: '0.5rem',
    l: '0.75rem',
    xl: '1rem',
    xxl: '1.5rem',
  },
};

const ThemeProvider = storyFn => (
  <ChakraThemeProvider theme={theme}>
    <CSSReset />
    {storyFn()}
  </ChakraThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
