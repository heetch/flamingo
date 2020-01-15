import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Selector from '.';

const defaultProps = () => ({
  id: `selector-${Math.random()}`,
  onChange: action('onChange'),
  options: [{label: 'First', value: 123}],
});

const stories = storiesOf('Form controls/Selector', module);

stories.add('All states', () => (
  <>
    <Heading>Selector</Heading>
    <Heading level={2}>States</Heading>
    <Selector {...defaultProps()}/>
  </>
));

stories.add('Playground', () => <Selector {...defaultProps()} />);
