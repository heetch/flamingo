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
    <Heading level={2}>Variants</Heading>
    {variants.map(variant => (
      <UiText key={variant} variant={variant}>
        {variant}
      </UiText>
    ))}

    <Heading level={2}>Custom component</Heading>
    <UiText as='div' variant={VARIANTS.h1}>
      As a div with `h1` stylings
    </UiText>
    <UiText fontSize={'30px'} lineHeight={'100px'} fontWeight={'bold'}>
      Normal component with custom fontSize, fontWeight and lineHeight
    </UiText>
  </>
));

stories.add('Playground', () => (
  <UiText variant={select('Variants', variants, VARIANTS.contentBold)}>
    {text('Content', 'Content')}
  </UiText>
));
