/* eslint-disable react/no-array-index-key */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import Grid from '.';
import Heading from '../Heading';
import UiText from '../UiText';

// eslint-disable-next-line react/prop-types
const ColInner = ({ children }) => (
  <div
    style={{
      padding: 'var(--f-space--m)',
      textAlign: 'center',
      color: 'var(--f-color-text--white)',
      backgroundColor: 'var(--f-color-brandPrimary)',
      borderRadius: 'var(--f-borderRadius--m)',
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
