import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import UiText from '.';
import Heading from '../Heading';

const { VARIANTS } = UiText;

const variants = Object.keys(VARIANTS);
const stories = storiesOf('UiText', module);

stories.add('All states', () => (
  <>
    <Heading>UiText</Heading>
    <Heading level={2}>Types</Heading>
    {variants.map(type => (
      <UiText key={type} type={type}>
        {type}
      </UiText>
    ))}

    <Heading level={2}>Custom component</Heading>
    <UiText as='div' type={VARIANTS.h1}>
      As div
    </UiText>
  </>
));

stories.add('Playground', () => (
  <UiText type={select('Variants', variants, VARIANTS.contentBold)}>
    {text('Content', 'Content')}
  </UiText>
));
