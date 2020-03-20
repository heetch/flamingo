import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Input from './index';
import Heading from '../Heading';
import Icon from '../Icon';

const ICONS = { ...Icon.ICONS, None: null };

const getId = () => `input-${Math.random()}`;
const states = ['default', 'hover', 'focus', 'disabled'];
const stories = storiesOf('Form/Input', module);

stories.add('All states', () => (
  <>
    <Heading>Input</Heading>
    <Heading level={2}>States</Heading>
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

    <Heading level={2}>Validation</Heading>

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
    icon={select('Icon', ICONS, ICONS.None)}
    onChange={action('onChange')}
  />
));
