import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';

import Heading from '../Heading';
import Tabs from './index';

const stories = storiesOf('Tabs', module);

stories.add('Playground', () => (
  <>
    <Heading>Tabs</Heading>
    <Tabs
      elements={array('Tabs (separated by comma)', [
        'Cars',
        'Drivers',
        'Rides',
        'Vehicles',
        'Discounts',
        'Promotions',
      ])}
    />
  </>
));
