import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Heading from '../Heading';
import Text from '.';
import UiText from '../UiText';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Text', module);

stories.add('Playground', () => {
  const variant = select('Type', UiText.VARIANTS, UiText.VARIANTS.content);
  const content = text('Content', 'My custom text content');
  return (
    <>
      <Heading>Text</Heading>
      <Text variant={variant}>{content}</Text>
      <Code>{`
      <Text variant='${variant}'>${content}</Text>
      `}</Code>
    </>
  );
});
