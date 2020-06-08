import React from 'react';
import { Box, BoxProps } from '@chakra-ui/core';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Heading, { H1, H2, H3, H4, H5, H6 } from './Heading';
import StoryHeading from '../StoryHeading/StoryHeading';

const stories = storiesOf('Heading', module);

const Wrapper = (props: BoxProps) => (
  <Box bg='element.primary' mb={'m'} {...props} />
);

stories.add('All states', () => (
  <>
    <StoryHeading>Heading</StoryHeading>
    <StoryHeading level={2}>Levels</StoryHeading>

    {[H1, H2, H3, H4, H5, H6].map((HComponent, i) => (
      <Wrapper>
        <HComponent>H{i + 1}</HComponent>
      </Wrapper>
    ))}

    <StoryHeading level={2}>Custom</StoryHeading>
    <Wrapper>
      <Heading level={2} as='h6'>
        h6 with h2 styles
      </Heading>
    </Wrapper>
  </>
));

stories.add('Playground', () => (
  <Heading level={select('Level', [1, 2, 3, 4, 5, 6], 1)}>
    {text('Content', 'Heading content')}
  </Heading>
));
