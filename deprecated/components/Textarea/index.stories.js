import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Textarea from './index';

const states = ['default', 'hover', 'focus', 'disabled'];

const textareaProps = () => ({
  id: `textarea-${Math.random()}`,
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
          disabled={state === 'disabled'}
        />
      </div>
    ))}

    <Heading level={2}>Validation</Heading>

    <div>
      <Textarea {...textareaProps()} defaultValue='Props: invalid' invalid />
    </div>

    <div>
      <Textarea {...textareaProps()} defaultValue='Props: valid' valid />
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
