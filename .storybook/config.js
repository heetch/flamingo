import React from 'react';
import { addParameters, configure, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ThemeProvider from '../src/components/ThemeProvider'
import FlexWrapperDecorator from './FlexWrapperDecorator';
import theme from './theme';

import 'normalize.css';
import '../dist/styles.css';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(ThemeProvider);
addDecorator(FlexWrapperDecorator);
addDecorator(withKnobs);
addDecorator(withInfo);

addParameters({
  options: {
    theme,
    addonPanelInRight: true,
    hierarchySeparator: /\//,
  },
});

const flamingoViewports = {
  BreakpointS: {
    name: 'Flamingo Breakpoint S',
    styles: {
      width: '460px',
      height: '963px',
    },
  },
  BreakpointM: {
    name: 'Flamingo Breakpoint M',
    styles: {
      width: '800px',
      height: '963px',
    },
  },
  BreakpointL: {
    name: 'Flamingo Breakpoint L',
    styles: {
      width: '1100px',
      height: '963px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...flamingoViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
});

configure(loadStories, module);
