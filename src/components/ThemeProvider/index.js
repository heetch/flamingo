import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../constants';

const Theme = props => {
  const isFunction = typeof props === 'function'; // storybook stories
  return (
    <ThemeProvider theme={theme}>
      {isFunction ? props() : props.children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
