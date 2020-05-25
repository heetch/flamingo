import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import UiText from '.';
import StoryHeading from '../StoryHeading/StoryHeading';

const { VARIANTS } = UiText;

const variants = Object.keys(VARIANTS);
const stories = storiesOf('UiText', module);

stories.add('All states', () => (
  <>
    <StoryHeading>UiText</StoryHeading>
    <StoryHeading level={2}>Variants</StoryHeading>
    {variants.map(variant => (
      <UiText key={variant} variant={variant}>
        {variant}
      </UiText>
    ))}

    <StoryHeading level={2}>Custom component</StoryHeading>
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
