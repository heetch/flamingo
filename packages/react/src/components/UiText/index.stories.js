import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import UiText from '.';
import Input from '../Input';
import Text from '../Text';

const { TYPES } = UiText;

const types = Object.keys(TYPES);
const stories = storiesOf('UiText', module);

stories.addDecorator(withKnobs);

stories.add('With types', () =>
  types.map(type => (
    <UiText key={type} type={type}>
      {type}
    </UiText>
  )),
);

stories.add('With custom component', () => (
  <>
    <UiText as='div' type={TYPES.Heading1}>
      As div
    </UiText>
    <UiText as={Text} type={TYPES.Heading1}>
      As Text
    </UiText>
    <UiText as={Input} defaultValue='as Input' type={TYPES.Heading1} />
  </>
));

stories.add('Playground', () => (
  <UiText type={select('Types', types)}>{text('Content', 'Content')}</UiText>
));
