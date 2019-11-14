/* eslint-disable react/no-array-index-key */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import Grid from '.';
import Heading from '../Heading';
import UiText from '../UiText';

// eslint-disable-next-line react/prop-types
const ColInner = ({ children, style }) => (
  <div
    style={{
      padding: 'var(--f-space--m)',
      textAlign: 'center',
      color: 'var(--f-color-text--white)',
      backgroundColor: 'var(--f-color-brandPrimary)',
      borderRadius: 'var(--f-borderRadius--m)',
      ...style,
    }}
  >
    <UiText as='span' variant={UiText.VARIANTS.subContentBold}>
      {children}
    </UiText>
  </div>
);

const gridProps = {
  style: { marginBottom: 'var(--f-space--m)' },
};

const stories = storiesOf('Grid', module);

stories.add('All sizes', () => (
  <>
    <Heading>Grid</Heading>
    <Heading level={2}>Fluid columns</Heading>

    <Grid {...gridProps}>
      <Grid.Col fluid>
        <ColInner>Fluid</ColInner>
      </Grid.Col>
      <Grid.Col fluid>
        <ColInner>Fluid</ColInner>
      </Grid.Col>
      <Grid.Col fluid>
        <ColInner>Fluid</ColInner>
      </Grid.Col>
    </Grid>

    <Heading level={2}>Sized columns</Heading>

    <Grid {...gridProps}>
      <Grid.Col fluid>
        <ColInner>Fluid</ColInner>
      </Grid.Col>
      <Grid.Col s={6}>
        <ColInner>{`s={${6}}`}</ColInner>
      </Grid.Col>
      <Grid.Col fluid>
        <ColInner>Fluid</ColInner>
      </Grid.Col>
    </Grid>

    <Grid {...gridProps}>
      <Grid.Col s={2}>
        <ColInner>{`s={${2}}`}</ColInner>
      </Grid.Col>
      <Grid.Col s={10}>
        <ColInner>{`s={${10}}`}</ColInner>
      </Grid.Col>
    </Grid>

    <Heading level={2}>Responsive columns</Heading>

    <Grid {...gridProps}>
      <Grid.Col m={4} l={10}>
        <ColInner>{`m={${4}} l={${10}}`}</ColInner>
      </Grid.Col>
      <Grid.Col m={4} l={2}>
        <ColInner>{`m={${4}} l={${2}}`}</ColInner>
      </Grid.Col>
    </Grid>

    <Grid {...gridProps}>
      <Grid.Col m={2} l={2}>
        <ColInner>{`m={${2}} l={${2}}`}</ColInner>
      </Grid.Col>
      <Grid.Col>
        <ColInner>Fluid</ColInner>
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
