import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Select from './index';

const states = ['default', 'hover', 'focus', 'disabled'];

const defaultProps = () => ({
  id: `select-${Math.random()}`,
  onChange: action('onChange'),
  options: [
    {
      label: 'String',
      value: 'string',
    },
    {
      label: 'Number',
      value: 3,
    },
    {
      label: 'Disabled',
      value: 'disabled',
      disabled: true,
    },
  ],
});

const stories = storiesOf('Form/Select', module);

stories.add('All states', () => (
  <>
    <Heading>Select</Heading>
    <Heading level={2}>States</Heading>

    {states.map(state => (
      <div key={`input-${state}`}>
        <Select
          {...defaultProps()}
          className={`is-${state}`}
          defaultValue={`State: ${state}`}
          disabled={state === 'disabled'}
        />
      </div>
    ))}

    <Heading level={2}>Validation</Heading>

    <Select invalid {...defaultProps()} />
    <Select valid {...defaultProps()} />
  </>
));

stories.add('Playground', () => <Select {...defaultProps()} />);
