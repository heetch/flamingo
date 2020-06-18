import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';

import StoryHeading from '../StoryHeading/StoryHeading';
import Tabs from '.';

const TAB_VALUES = [
  'Cars',
  'Drivers',
  'Rides',
  'Vehicles',
  'Discounts',
  'Promotions',
];

const stories = storiesOf('Tabs', module);

stories.add('All states', () => (
  <>
    <StoryHeading>Tabs</StoryHeading>
    <StoryHeading level={2}>Default</StoryHeading>
    <Tabs elements={TAB_VALUES} />

    <StoryHeading level={2}>With default index</StoryHeading>
    <Tabs defaultIndex={1} elements={TAB_VALUES} />
  </>
));

stories.add('Playground', () => (
  <Tabs elements={array('Tabs (separated by comma)', TAB_VALUES)} />
));
