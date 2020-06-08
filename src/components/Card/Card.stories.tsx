import React from 'react';
import { Box } from '@chakra-ui/core';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import Card, { CardElevations, CardSizes } from './Card';
import StoryHeading from '../StoryHeading/StoryHeading';
import Text from '../Text';

const Container = props => <Box m='xl' {...props} />;

const stories = storiesOf('Card', module);

stories.add('All states', () => (
  <>
    <StoryHeading>Card</StoryHeading>

    <Container>
      <Card>
        <Text>Card</Text>
      </Card>
    </Container>

    <Container>
      <Card isActive>
        <Text>isActive</Text>
      </Card>
    </Container>

    <StoryHeading level={2}>Elevations</StoryHeading>

    {Object.entries(CardElevations).map(([key, value]) => (
      <Container key={key}>
        <Card elevation={value}>
          <Text>Elevation {key}</Text>
        </Card>
      </Container>
    ))}

    <StoryHeading level={2}>Sizes</StoryHeading>

    {Object.entries(CardSizes).map(([key, value]) => (
      <Container key={key}>
        <Card size={value}>
          <Text>size {key}</Text>
        </Card>
      </Container>
    ))}

    <StoryHeading level={2}>Inception</StoryHeading>

    <Card>
      <Card>
        <Card>
          <Card />
        </Card>
      </Card>
    </Card>
  </>
));

stories.add('Playground', () => (
  <Card
    isActive={boolean('isActive', false)}
    elevation={select('Elevation', CardElevations, CardElevations.NONE)}
    size={select('Size', CardSizes, CardSizes.M)}
  >
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      scelerisque eros a eros tristique tempus. Donec gravida ipsum vitae nibh
      condimentum, aliquam pellentesque dolor auctor. Maecenas auctor erat arcu,
      sit amet maximus dui gravida vel. Pellentesque et ex ultricies, tempor
      felis sit amet, sodales dui. Sed venenatis, libero non volutpat
      ullamcorper, purus mauris mollis lorem, in mollis metus risus sed augue.
      Aliquam fermentum mattis varius. Cras facilisis dui vitae mi porttitor, in
      commodo eros mollis. Donec lorem arcu, sodales et felis in, maximus
      gravida leo
    </Text>
  </Card>
));
