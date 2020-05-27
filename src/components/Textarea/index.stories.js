import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import StoryHeading from '../StoryHeading/StoryHeading';
import Textarea from '.';

const states = ['default', 'disabled'];

const textareaProps = () => ({
  id: `textarea-${Math.random()}`,
  onChange: console.log,
});

const stories = storiesOf('Form/Textarea', module);

stories.add('All states', () => (
  <>
    <StoryHeading>Textarea</StoryHeading>
    <StoryHeading level={2}>States</StoryHeading>
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

    <StoryHeading level={2}>Validation</StoryHeading>

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
