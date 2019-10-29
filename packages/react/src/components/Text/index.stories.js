import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Heading from '../Heading';
import Text from '.';
import UiText from '../UiText';

const stories = storiesOf('Text', module);

stories.add('Playground', () => (
  <>
    <Heading>Text</Heading>
    <Text type={select('Type', UiText.VARIANTS, UiText.VARIANTS.content)}>
      {text('Content', 'My custom text content')}
    </Text>
  </>
));
