import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import Card from '.';
import Heading from '../Heading';
import Text from '../Text';

const { ELEVATIONS, SIZES } = Card;
const sizes = Object.values(SIZES);

const Container = (
  { children }, // eslint-disable-line react/prop-types
) => <div style={{ margin: 'var(--f-space--xl) 0' }}>{children}</div>;

const stories = storiesOf('Card', module);

stories.add('All states', () => (
  <>
    <Heading>Card</Heading>

    <Container>
      <Card>
        <Text>Card</Text>
      </Card>
    </Container>

    <Container>
      <Card>Card without {`'<Text />'`} component wrapping the content</Card>
    </Container>

    <Container>
      <Card isSelected>
        <Text>Card selected</Text>
      </Card>
    </Container>

    <Heading level={2}>Elevations</Heading>

    {ELEVATIONS.map(elevation => (
      <Container key={elevation}>
        <Card elevation={elevation}>
          <Text>Elevation {elevation}</Text>
        </Card>
      </Container>
    ))}

    <Heading level={2}>Sizes</Heading>

    {sizes.map(size => (
      <Container key={size}>
        <Card size={size}>
          <Text>size {size}</Text>
        </Card>
      </Container>
    ))}

    <Heading level={2}>Inception</Heading>

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
    isSelected={boolean('Is selected', false)}
    elevation={select('Elevation', ELEVATIONS)}
    size={select('Size', sizes)}
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
