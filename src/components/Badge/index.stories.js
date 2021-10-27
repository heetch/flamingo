import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import Badge from '.';
import Heading from '../Heading';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Badge', module);

const textColor = {
  '- default -': undefined,
  lightGrey: theme.color.text.lightGrey,
  link: theme.color.text.link,
  primary: theme.color.text.primary,
  secondary: theme.color.text.secondary,
  tertiary: theme.color.text.tertiary,
  white: theme.color.text.white,
};

const backgroundColor = {
  '- default -': undefined,
  error: theme.color.element.error,
  inactive: theme.color.element.inactive,
  overlay: theme.color.element.overlay,
  primary: theme.color.element.primary,
  secondary: theme.color.element.secondary,
  success: theme.color.element.success,
  tertiary: theme.color.element.tertiary,
};

const fontSize = {
  '- default -': undefined,
  xxs: theme.fontSize.xxs,
  xs: theme.fontSize.xs,
  s: theme.fontSize.s,
  m: theme.fontSize.m,
  l: theme.fontSize.l,
  xl: theme.fontSize.xl,
  xxl: theme.fontSize.xxl,
};

const fontWeight = {
  '- default -': undefined,
  black: theme.fontWeight.black,
  bold: theme.fontWeight.bold,
  normal: theme.fontWeight.normal,
};

const borderRadius = {
  '- default -': undefined,
  s: theme.borderRadius.s,
  m: theme.borderRadius.m,
  l: theme.borderRadius.l,
  xl: theme.borderRadius.xl,
};

stories.add('All states', () => (
  <>
    <Heading>Badge</Heading>

    <Heading level={2}>Basic</Heading>
    <Badge>Badge</Badge>
    <Code>{`<Badge>Badge</Badge>`}</Code>

    <Heading level={2}>Background colored</Heading>
    <Badge backgroundColor={theme.color.text.tertiary}>
      Colored in color tertiary
    </Badge>
    <Code>{`
    <Badge backgroundColor={theme.color.text.tertiary}>
      Colored in color tertiary
    </Badge>
    `}</Code>

    <Heading level={2}>Text colored</Heading>
    <Badge color={theme.color.text.tertiary}>Colored in color tertiary</Badge>
    <Code>{`<Badge color={theme.color.text.tertiary}>Colored in color tertiary</Badge>`}</Code>

    <Heading level={2}>Font Weight</Heading>
    <Badge fontWeight={theme.fontWeight.bold}>Font weight bold</Badge>
    <Code>{`<Badge fontWeight={theme.fontWeight.bold}>Font weight bold</Badge>`}</Code>

    <Heading level={2}>Font Size</Heading>
    <Badge fontSize={theme.fontSize.xl}>Font size XL</Badge>
    <Code>{`<Badge fontSize={theme.fontSize.xl}>Font size XL</Badge>`}</Code>

    <Heading level={2}>Border Radius</Heading>
    <Badge borderRadius={theme.borderRadius.xl}>Border radius XL</Badge>
    <Code>{`<Badge borderRadius={theme.borderRadius.xl}>Border radius S</Badge>`}</Code>
  </>
));

stories.add('Playground', () => {
  return (
    <Badge
      color={select('color', textColor)}
      backgroundColor={select('backgroundColor', backgroundColor)}
      fontWeight={select('fontWeight', fontWeight)}
      fontSize={select('fontSize', fontSize)}
      borderRadius={select('borderRadius', borderRadius)}
    >
      {text('Content', 'Badge content')}
    </Badge>
  );
});
