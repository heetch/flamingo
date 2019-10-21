import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Input from '.';

const getId = () => `input-${Math.random()}`;
const states = ['default', 'hover', 'focus', 'disabled'];
const stories = storiesOf('Form controls/Input', module);

stories.addDecorator(withKnobs);

stories.add('All states', () => (
  <>
    {states.map(state => (
      <Input
        key={`input-${state}`}
        id={getId()}
        className={`is-${state}`}
        defaultValue={`State: ${state}`}
        disabled={state === 'disabled'}
        onChange={action('onChange')}
      />
    ))}

    <Input
      id={getId()}
      defaultValue='Props: invalid'
      invalid
      onChange={action('onChange')}
    />

    <Input
      id={getId()}
      defaultValue='Props: valid'
      valid
      onChange={action('onChange')}
    />
  </>
));

stories.add('Playground', () => (
  <Input
    id={getId()}
    placeholder={text('Placeholder', 'Placeholder')}
    value={text('Value', 'My text input')}
    invalid={boolean('Is invalid?', false)}
    valid={boolean('Is valid?', false)}
    disabled={boolean('Is disabled?', false)}
    onChange={action('onChange')}
  />
));
