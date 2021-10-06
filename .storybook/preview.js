import { addParameters, addDecorator } from '@storybook/react';
import { addons } from '@storybook/addons';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import theme from './theme/';
import StoryWrapper from './theme/StoryWrapper';

import './styles.css';
import 'normalize.css';
import 'react-datepicker/dist/react-datepicker.css';

addons.setConfig({
  theme,
});

addDecorator(StoryWrapper);
addDecorator(withKnobs);
addDecorator(withInfo);

export const parameters = {
  backgrounds: {
    default: 'grey',
    values: [
      {
        name: 'grey',
        value: '#ECEFF8'
      },
      {
        name: 'pink',
        value: '#fe679c',
      },
      {
        name: 'blue',
        value: '#6e9ddf',
      },
    ],
  },
};

addParameters({
  viewport: {
    viewports: {
      flamingo_s: {
        name: 'Flamingo breakpoint S',
        styles: {
          width: '460px',
          height: '963px',
        },
      },
      BreakpointM: {
        name: 'Flamingo breakpoint M',
        styles: {
          width: '800px',
          height: '963px',
        },
      },
      BreakpointL: {
        name: 'Flamingo breakpoint L',
        styles: {
          width: '1100px',
          height: '963px',
        },
      },
    },
  },
});
