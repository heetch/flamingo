import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import { theme } from '../../theme';
import UiText from '.';
import Heading from '../Heading';
import { Code } from '../../storybook-utils';

const { VARIANTS } = UiText;

const variants = Object.keys(VARIANTS);
const stories = storiesOf('UiText', module);

stories.add('All states', () => (
  <>
    <Heading>UiText</Heading>
    <Heading level={2}>Variants</Heading>
    {variants.map(variant => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <UiText
          key={variant}
          variant={variant}
          style={{ display: 'inline-block', marginRight: '20px' }}
        >
          {variant}
        </UiText>
        <Code inline>{`
        <UiText variant='${variant}'>${variant}</UiText>
        `}</Code>
      </div>
    ))}

    <Heading level={2}>Colors</Heading>
    <UiText textColor={theme.color.text.tertiary}>Another color</UiText>
    <Code>{`
    <UiText textColor={theme.color.text.tertiary}>Another color</UiText>
    `}</Code>

    <Heading level={2}>Margin</Heading>
    <UiText margin={theme.space.s}>Smaller margin</UiText>
    <Code>{`
    <UiText margin={theme.space.s}>Smaller margin</UiText>
    `}</Code>

    <Heading level={2}>Custom component</Heading>
    <UiText as='div' variant={VARIANTS.h1}>
      As a div with `h1` stylings
    </UiText>
    <Code>{`
    <UiText as='div' variant='${VARIANTS.h1}'>
      As a div with \`h1\` stylings
    </UiText>
    `}</Code>

    <UiText fontSize={'30px'} lineHeight={'100px'} fontWeight={'bold'}>
      Normal component with custom fontSize, fontWeight and lineHeight
    </UiText>
    <Code>{`
    <UiText fontSize='30px' lineHeight='100px' fontWeight='bold'>
      Normal component with custom fontSize, fontWeight and lineHeight
    </UiText>
    `}</Code>
  </>
));

stories.add('Playground', () => (
  <div style={{ border: '1px dashed lightgray' }}>
    <UiText
      variant={select('Variant', variants, VARIANTS.contentBold)}
      margin={select('Margin', {
        '- default -': undefined,
        s: theme.space.s,
        m: theme.space.m,
        l: theme.space.l,
        xl: theme.space.xl,
        xxl: theme.space.xxl,
      })}
      textColor={select('Text Color', {
        '-default-': undefined,
        primary: theme.color.text.primary,
        secondary: theme.color.text.secondary,
        tertiary: theme.color.text.tertiary,
        link: theme.color.text.link,
        white: theme.color.text.white,
        lightGrey: theme.color.text.lightGrey,
      })}
    >
      {text('Content', 'Content')}
    </UiText>
  </div>
));
