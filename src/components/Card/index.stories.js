import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import Card from '.';
import Heading from '../Heading';
import Text from '../Text';
import { theme } from '../../theme';
import { Code } from '../../storybook-utils';

const { ELEVATIONS, SIZES } = Card;
const sizes = Object.values(SIZES);

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ margin: `${theme.space.xl} 0` }}>{children}</div>
);

const stories = storiesOf('Card', module);

stories.add('All states', () => (
  <>
    <Heading>Card</Heading>

    <Container>
      <Card>
        <Text>Card</Text>
      </Card>
    </Container>
    <Code>{`
    <Card>
      <Text>Card</Text>
    </Card>
    `}</Code>

    <Container>
      <Card>Card without {`'<Text />'`} component wrapping the content</Card>
    </Container>
    <Code>{`<Card>Card without {\`'<Text />'\`} component wrapping the content</Card>`}</Code>

    <Container>
      <Card isSelected>
        <Text>Card selected</Text>
      </Card>
    </Container>
    <Code>{`
    <Card isSelected>
      <Text>Card selected</Text>
    </Card>
    `}</Code>

    <Heading level={2}>Elevations</Heading>

    {ELEVATIONS.map(elevation => (
      <div key={elevation}>
        <Container>
          <Card elevation={elevation}>
            <Text>Elevation {elevation}</Text>
          </Card>
        </Container>
        <Code>{`
        <Card elevation={${elevation}}>
          <Text>Elevation ${elevation}</Text>
        </Card>
        `}</Code>
      </div>
    ))}

    <Heading level={2}>Sizes</Heading>

    {sizes.map(size => (
      <div key={size}>
        <Container>
          <Card size={size}>
            <Text>size {size}</Text>
          </Card>
        </Container>
        <Code>{`<Card size='${size}'><Text>size ${size}</Text></Card>`}</Code>
      </div>
    ))}

    <Heading level={2}>Inception</Heading>

    <Card>
      <Card>
        <Card>
          <Card />
        </Card>
      </Card>
    </Card>

    <Code>{`
    <Card>
      <Card>
        <Card>
          <Card />
        </Card>
      </Card>
    </Card>
    `}</Code>
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
