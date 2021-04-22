import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import Badge from '.';
import Heading from '../Heading';

const stories = storiesOf('Badge', module);

const textColor = [
  theme.color.text.lightGrey,
  theme.color.text.link,
  theme.color.text.primary,
  theme.color.text.secondary,
  theme.color.text.tertiary,
  theme.color.text.white,
];

const backgroundColor = [
  theme.color.element.error,
  theme.color.element.inactive,
  theme.color.element.overlay,
  theme.color.element.primary,
  theme.color.element.secondary,
  theme.color.element.success,
  theme.color.element.tertiary,
];

const fontSize = [
  theme.fontSize.xxs,
  theme.fontSize.xs,
  theme.fontSize.s,
  theme.fontSize.m,
  theme.fontSize.l,
  theme.fontSize.xl,
  theme.fontSize.xxl,
];

const fontWeight = [
  theme.fontWeight.black,
  theme.fontWeight.bold,
  theme.fontWeight.normal,
];

const borderRadius = [
  theme.borderRadius.s,
  theme.borderRadius.m,
  theme.borderRadius.l,
  theme.borderRadius.xl,
];

stories.add('All states', () => (
  <>
    <Heading>Badge</Heading>
    <Heading level={2}>Basic</Heading>
    <Badge>Badge</Badge>
    <Heading level={2}>Colored</Heading>
    <Badge backgroundColor={theme.color.text.tertiary}>
      Colored in color tertiary
    </Badge>
    <Heading level={2}>Font Weight</Heading>
    <Badge fontWeight={theme.fontWeight.bold}>Font weight bold</Badge>
    <Heading level={2}>Font Size</Heading>
    <Badge fontSize={theme.fontSize.xl}>Font size XL</Badge>
    <Heading level={2}>Border Radius</Heading>
    <Badge borderRadius={theme.borderRadius.s}>Border radius S</Badge>
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
