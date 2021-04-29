import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Textarea from '.';
import { Code } from '../../storybook-utils';

const states = ['default', 'disabled'];

const textareaProps = () => ({
  id: `textarea-${Math.random()}`,
  // eslint-disable-next-line no-console
  onChange: console.log,
});

const stories = storiesOf('Form/Textarea', module);

stories.add('All states', () => (
  <>
    <Heading>Textarea</Heading>
    <Heading level={2}>States</Heading>
    {states.map(state => (
      <div key={`textarea-${state}`}>
        <Textarea
          {...textareaProps()}
          className={`is-${state}`}
          defaultValue={`State: ${state}`}
          placeholder='Type something...'
          disabled={state === 'disabled'}
        />
        <Code>{`
        <Textarea defaultValue='State: ${state}'${
          state === 'disabled' ? ' disabled' : ''
        } placeholder='Type something...' />
        `}</Code>
      </div>
    ))}

    <Heading level={2}>Validation</Heading>

    <div>
      <Textarea {...textareaProps()} defaultValue='Props: invalid' invalid />
      <Code>{`
      <Textarea {...otherProps} invalid />
      `}</Code>
    </div>

    <div>
      <Textarea {...textareaProps()} defaultValue='Props: valid' valid />
      <Code>{`
      <Textarea {...otherProps} valid />
      `}</Code>
    </div>
  </>
));

stories.add('Playground', () => (
  <Textarea
    id='playground'
    placeholder={text('Placeholder', 'Placeholder')}
    value={text('Value', 'Content')}
    invalid={boolean('Is invalid?', false)}
    valid={boolean('Is valid?', false)}
    disabled={boolean('Is disabled?', false)}
    onChange={action('onChange')}
  />
));
