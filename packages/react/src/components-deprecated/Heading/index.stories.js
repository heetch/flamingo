import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Heading from '.';

const { LEVELS } = Heading;
const stories = storiesOf('Heading', module);

const Wrapper = props => (
  <div
    style={{
      backgroundColor: 'var(--f-color-element--primary)',
      marginBottom: 'var(--f-space--m)',
      overflow: 'hidden',
      borderRadius: 'var(--f-borderRadius--m)',
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

    <Heading level={2}>Custom tag</Heading>

    <Wrapper>
      <Heading level={2} as='h6'>
        h6 with h1 styles
      </Heading>
    </Wrapper>
  </>
));

stories.add('Playground', () => (
  <Heading level={select('Level', LEVELS)}>
    {text('Content', 'Heading content')}
  </Heading>
));
