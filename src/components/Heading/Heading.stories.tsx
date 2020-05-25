import React from 'react';
import { Box } from '@chakra-ui/core';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Heading, { H1, H2, H3, H4, H5, H6 } from './Heading';

const stories = storiesOf('Heading', module);

const Wrapper: React.FC = props => (
  <Box bg='element.primary' mb={'m'} {...props} />
);

stories.add('All states', () => (
  <>
    <Heading>Heading</Heading>
    <Heading level={2}>Levels</Heading>

    {[H1, H2, H3, H4, H5, H6].map((HComponent, i) => (
      <Wrapper>
        <HComponent>H{i + 1}</HComponent>
      </Wrapper>
    ))}

    <Heading level={2}>Custom</Heading>
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
