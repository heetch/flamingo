import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';

import Heading from '../Heading';
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
    <Heading>Tabs</Heading>
    <Heading level={2}>Default</Heading>
    <Tabs elements={TAB_VALUES} />
    <Heading level={2}>With default index</Heading>
    <Tabs defaultIndex={1} elements={TAB_VALUES} />
  </>
));

stories.add('Playground', () => (
  <>
    <Heading>Tabs</Heading>
    <Tabs elements={array('Tabs (separated by comma)', TAB_VALUES)} />
  </>
));
