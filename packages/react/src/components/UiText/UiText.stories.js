import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import UiText from './UiText';
import Heading from '../Heading/Heading';
import { BORDER_RADIUS, COLOR, SPACE } from '../../constants';

const { VARIANTS } = UiText;

const variants = Object.keys(VARIANTS);
const stories = storiesOf('UiText', module);

const Wrapper = styled.div`
  background-color: ${COLOR.ELEMENT.PRIMARY};
  margin-bottom: ${SPACE.M};
  overflow: hidden;
  border-radius: ${BORDER_RADIUS.M};
`;

stories.add('All states', () => (
  <>
    <Heading>UiText</Heading>
    <Heading level={2}>Variants</Heading>
    {variants.map(variant => (
      <Wrapper key={variant}>
        <UiText variant={variant}>{variant}</UiText>
      </Wrapper>
    ))}

    <Heading level={2}>Custom component</Heading>

    <a href='#'>Hello</a>
    <Wrapper>
      <UiText as='div' variant={VARIANTS.h1}>
        As div
      </UiText>
    </Wrapper>
  </>
));

stories.add('Playground', () => (
  <UiText variant={select('Variants', variants, VARIANTS.H1)}>
    {text('Content', 'Lorem ipsum dolor sit amet')}
  </UiText>
));
