import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Heading from '.';
import { theme } from '../../theme';

const { LEVELS } = Heading;
const stories = storiesOf('Heading', module);

const Wrapper = props => (
  <div
    style={{
      backgroundColor: theme.color.element.primary,
      marginBottom: theme.space.m,
      overflow: 'hidden',
      borderRadius: theme.borderRadius.m,
    }}
    {...props}
  />
);

stories.add('All states', () => (
  <>
    <Heading>Heading</Heading>
    <Heading level={2}>Levels</Heading>
    {LEVELS.map(level => (
      <Wrapper key={`heading-${level}`}>
        <Heading level={level}>Heading {level}</Heading>
      </Wrapper>
    ))}

    <Heading level={2}>Custom</Heading>
    <Wrapper>
      <Heading level={2} as='h6'>
        h6 with h2 styles
      </Heading>
    </Wrapper>
    <Wrapper>
      <Heading
        level={2}
        textColor={'purple'}
        marginTop={'40px'}
        marginBottom={'40px'}
      >
        h2 with custom props
      </Heading>
    </Wrapper>
  </>
));

stories.add('Playground', () => (
  <Heading level={select('Level', LEVELS)}>
    {text('Content', 'Heading content')}
  </Heading>
));
