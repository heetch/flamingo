/* eslint-disable react/no-array-index-key */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import Grid from '.';
import Heading from '../Heading';
import UiText from '../UiText';
import { theme } from '../../theme';

// eslint-disable-next-line react/prop-types
const ColInner = ({ children, style }) => (
  <div
    style={{
      margin: `${theme.space.m} 0`,
      padding: theme.space.m,
      textAlign: 'center',
      color: theme.color.text.white,
      backgroundColor: theme.color.brand.primary,
      borderRadius: theme.borderRadius.m,
      ...style,
    }}
  >
    <UiText as='span' variant={UiText.VARIANTS.subContentBold}>
      {children}
    </UiText>
  </div>
);

const stories = storiesOf('Grid', module);

stories.add('All sizes', () => (
  <>
    <Heading>Grid</Heading>
    <Heading level={2}>Fluid by default</Heading>

    <Grid>
      <Grid.Col>
        <ColInner>Fluid</ColInner>
      </Grid.Col>
      <Grid.Col>
        <ColInner>Fluid</ColInner>
      </Grid.Col>
      <Grid.Col>
        <ColInner>Fluid</ColInner>
      </Grid.Col>
    </Grid>

    <Heading level={2}>Sized columns</Heading>

    <Grid>
      <Grid.Col>
        <ColInner>Fluid</ColInner>
      </Grid.Col>
      <Grid.Col s={6}>
        <ColInner>{`s={${6}}`}</ColInner>
      </Grid.Col>
      <Grid.Col>
        <ColInner>Fluid</ColInner>
      </Grid.Col>
    </Grid>

    <Grid>
      <Grid.Col s={2}>
        <ColInner>{`s={${2}}`}</ColInner>
      </Grid.Col>
      <Grid.Col s={10}>
        <ColInner>{`s={${10}}`}</ColInner>
      </Grid.Col>
    </Grid>

    <Heading level={2}>Responsive columns</Heading>

    <Grid>
      <Grid.Col m={6} l={10}>
        <ColInner>{`m={${6}} l={${10}}`}</ColInner>
      </Grid.Col>
      <Grid.Col m={6} l={2}>
        <ColInner>{`m={${6}} l={${2}}`}</ColInner>
      </Grid.Col>
    </Grid>

    <Grid>
      <Grid.Col m={3} l={10}>
        <ColInner>{`m={${3}} l={${10}}`}</ColInner>
      </Grid.Col>
      <Grid.Col>
        <ColInner>Fluid</ColInner>
      </Grid.Col>
    </Grid>

    <Grid>
      <Grid.Col m={12} l={6}>
        <ColInner>{`m={${12}} l={${6}}`}</ColInner>
      </Grid.Col>
      <Grid.Col m={12} l={6}>
        <ColInner>{`m={${12}} l={${6}}`}</ColInner>
      </Grid.Col>
    </Grid>
  </>
));

stories.add('Playground', () => {
  const colsCount = number('Number of columns', 3);
  const colsArr = Array.from(new Array(colsCount));

  return (
    <Grid>
      {colsArr.map((_, i) => (
        <Grid.Col key={i}>
          <ColInner>Col {i + 1}</ColInner>
        </Grid.Col>
      ))}
    </Grid>
  );
});
