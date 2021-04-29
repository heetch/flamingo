import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Heading from '.';
import { theme } from '../../theme';
import { Code } from '../../storybook-utils';

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
    <Code>{`
    <Heading level={level}>Heading {level}</Heading>
    `}</Code>

    <Heading level={2}>Custom</Heading>
    <Wrapper>
      <Heading level={2} as='h6'>
        h6 with h2 styles
      </Heading>
    </Wrapper>
    <Code>{`
    <Heading level={2} as='h6'>h6 with h2 styles</Heading>
    `}</Code>

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
    <Code>{`
    <Heading
      level={2}
      textColor={'purple'}
      marginTop={'40px'}
      marginBottom={'40px'}
    >
      h2 with custom props
    </Heading>
    `}</Code>
  </>
));

stories.add('Playground', () => (
  <Wrapper>
    <Heading
      level={select('Level', LEVELS)}
      textColor={select('Text Color', {
        '-default-': undefined,
        primary: theme.color.text.primary,
        secondary: theme.color.text.secondary,
        tertiary: theme.color.text.tertiary,
        link: theme.color.text.link,
        white: theme.color.text.white,
        lightGrey: theme.color.text.lightGrey,
      })}
      marginTop={select('Margin Top', {
        '-default-': undefined,
        s: theme.space.s,
        m: theme.space.m,
        l: theme.space.l,
        xl: theme.space.xl,
        xxl: theme.space.xxl,
      })}
      marginBottom={select('Margin Bottom', {
        '-default-': undefined,
        s: theme.space.s,
        m: theme.space.m,
        l: theme.space.l,
        xl: theme.space.xl,
        xxl: theme.space.xxl,
      })}
    >
      {text('Content', 'Heading content')}
    </Heading>
  </Wrapper>
));
