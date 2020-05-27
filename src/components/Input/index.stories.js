import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Input from '.';
import StoryHeading from '../StoryHeading/StoryHeading';
import Icon from '../Icon';

const ICONS = { ...Icon.ICONS, None: null };

const getId = () => `input-${Math.random()}`;
const stories = storiesOf('Form/Input', module);

stories.add('All states', () => (
  <>
    <StoryHeading>Input</StoryHeading>
    <StoryHeading level={2}>States</StoryHeading>
    <Input
      key='input-default'
      id={getId()}
      defaultValue='State: default'
      onChange={action('onChange')}
      placeholder={`¯\\_(ツ)_/¯ `}
    />
    <Input
      key='input-disabled'
      id={getId()}
      defaultValue='State: disabled'
      disabled
      onChange={action('onChange')}
    />

    <StoryHeading level={2}>Validation</StoryHeading>

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
