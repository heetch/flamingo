import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Select from '.';
import { Code } from '../../storybook-utils';

const states = ['default', 'disabled'];

const mapStringsToSelectOptions = options =>
  options.map(option => ({ label: option, value: option }));

const defaultProps = () => ({
  id: `select-${Math.random()}`,
  onChange: action('onChange'),
  options: mapStringsToSelectOptions(['Foo', 1, 'Bar', 2]),
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

    <Code>{`
    <Select
      id='input-id'
      defaultValue='Bar'
      disabled={isDisabled}
      onChange={noop}
      options={[
        { label: 'Foo', value: 'Foo' },
        { label: 1, value: 1 },
        { label: 'Bar', value: 'Bar' },
        { label: 2, value: 2 },
      ]}
    />
    `}</Code>

    <Heading level={2}>Validation</Heading>

    <Select invalid {...defaultProps()} />
    <Select valid {...defaultProps()} />

    <Code>{`
    <Select invalid {...otherProps} />
    <Select valid {...otherProps} />
    `}</Code>

    <Heading level={2}>Placeholder</Heading>

    <Select placeholder='Please select...' {...defaultProps()} />

    <Code>{`
    <Select placeholder='Please select...' {...otherProps} />
    `}</Code>
  </>
));

stories.add('Playground', () => <Select {...defaultProps()} />);
