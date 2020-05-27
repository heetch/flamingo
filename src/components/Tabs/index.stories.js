import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';

import StoryHeading from '../StoryHeading/StoryHeading';
import Tabs from '.';

const stories = storiesOf('Tabs', module);

stories.add('Playground', () => (
  <>
    <StoryHeading>Tabs</StoryHeading>
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
