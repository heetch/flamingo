import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import UiText from '.';
import Heading from '../Heading';

const { TYPES } = UiText;

const types = Object.keys(TYPES);
const stories = storiesOf('UiText', module);

stories.add('All states', () => (
  <>
    <Heading>UiText</Heading>
    <Heading level={2}>Types</Heading>
    {types.map(type => (
      <UiText key={type} type={type}>
        {type}
      </UiText>
    ))}

    <Heading level={2}>Custom component</Heading>
    <UiText as='div' type={TYPES.h1}>
      As div
    </UiText>
  </>
));

stories.add('Playground', () => (
  <UiText type={select('Types', types, TYPES.contentBold)}>
    {text('Content', 'Content')}
  </UiText>
));
