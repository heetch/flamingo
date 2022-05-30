import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Tabs from '.';
import { Code } from '../../storybook-utils';

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

    <Heading level={2}>Default - with container width set</Heading>
    <Tabs elements={TAB_VALUES} width='800px' />
    <Code>{`
    <Tabs elements={${JSON.stringify(TAB_VALUES)}} />
    `}</Code>

    <Heading level={2}>With default index</Heading>
    <Tabs defaultIndex={1} elements={TAB_VALUES} />
    <Code>{`
    <Tabs defaultIndex={1} elements={${JSON.stringify(TAB_VALUES)}} />
    `}</Code>

    <Heading level={2}>With objects</Heading>
    <Tabs
      elements={[
        { label: 'Foo', value: 'tab-foo' },
        { label: 'Bar', value: 'tab-bar' },
      ]}
      buildTabLabel={e => e.label}
      buildReturnObject={e => e.value}
      buildKey={e => e.value}
      onClick={action('Click')}
    />
    <Code>{`
    <Tabs
      elements={[
        { label: 'Foo', value: 'tab-foo' },
        { label: 'Bar', value: 'tab-bar' },
      ]}
      buildTabLabel={e => e.label}
      buildReturnObject={e => e.value}
      buildKey={e => e.value}
      onClick={noop}
    />
    `}</Code>
  </>
));

stories.add('Playground', () => (
  <>
    <Heading>Tabs</Heading>
    <Tabs
      elements={array('Tabs (separated by comma)', TAB_VALUES)}
      onClick={action('Click')}
    />
  </>
));
