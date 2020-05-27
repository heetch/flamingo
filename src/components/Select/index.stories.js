import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import StoryHeading from '../StoryHeading/StoryHeading';
import Select from '.';

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
    <StoryHeading>Select</StoryHeading>
    <StoryHeading level={2}>States</StoryHeading>

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

    <StoryHeading level={2}>Validation</StoryHeading>

    <Select invalid {...defaultProps()} />
    <Select valid {...defaultProps()} />
  </>
));

stories.add('Playground', () => <Select {...defaultProps()} />);
