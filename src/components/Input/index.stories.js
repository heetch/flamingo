import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Input from '.';
import Heading from '../Heading';
import Icon from '../Icon';
import { Code } from '../../storybook-utils';

const ICONS = { ...Icon.ICONS, None: null };

const getId = () => `input-${Math.random()}`;
const stories = storiesOf('Form/Input', module);

stories.add('All states', () => (
  <>
    <Heading>Input</Heading>
    <Heading level={2}>States</Heading>
    <Input
      key='input-default'
      id={getId()}
      defaultValue='State: default'
      onChange={action('onChange')}
      placeholder='¯\_(ツ)_/¯'
    />
    <Input
      key='input-disabled'
      id={getId()}
      defaultValue='State: disabled'
      disabled
    />

    <Code>{`
    <Input id='input1' defaultValue='State: default' onChange={noop} placeholder='¯\\_(ツ)_/¯' />
    <Input id='input2' defaultValue='State: disabled' disabled />
    `}</Code>

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

    <Code>{`
    <Input id='input2' defaultValue='Props: invalid' invalid />
    <Input id='input2' defaultValue='Props: valid' valid />
    `}</Code>

    <Heading level={2}>Icon</Heading>

    <Input
      id={getId()}
      defaultValue='Props: icon'
      icon='IconEmojiSmile'
      iconColor='orange'
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
