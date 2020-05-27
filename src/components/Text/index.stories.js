import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import StoryHeading from '../StoryHeading/StoryHeading';
import Text from '.';
import UiText from '../UiText';

const stories = storiesOf('Text', module);

stories.add('Playground', () => (
  <>
    <StoryHeading>Text</StoryHeading>
    <Text variant={select('Type', UiText.VARIANTS, UiText.VARIANTS.content)}>
      {text('Content', 'My custom text content')}
    </Text>
  </>
));
