import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Select } from '..';

const states = ['default', 'hover', 'focus', 'disabled'];

const mapStringsToSelectOptions = options =>
  options.map(option => ({ label: option, value: option }));

const defaultProps = () => ({
  id: `select-${Math.random()}`,
  onChange: action('onChange'),
  options: mapStringsToSelectOptions(text('Options', 'Foo,Bar').split(',')),
});

const numProps = () => ({
  id: `select-${Math.random()}`,
  onChange: action('onChange'),
  options: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }],
});

storiesOf('Form controls/Select', module)
  .addDecorator(withKnobs)
  .add('With states', () =>
    states.map(state => (
      <div key={`input-${state}`}>
        <Select
          {...defaultProps()}
          className={`is-${state}`}
          defaultValue={`State: ${state}`}
          disabled={state === 'disabled'}
        />
      </div>
    )),
  )
  .add('Playground', () => <Select {...defaultProps()} />)
  .add('With Number values', () => <Select {...numProps()} />);
