import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Heading from '.';

const { LEVELS } = Heading;

const levels = Object.keys(LEVELS);
const stories = storiesOf('Heading', module);

stories.add('With levels', () =>
  levels.map(level => (
    <Heading key={`heading-${level}`} as={level}>
      Heading {level}
    </Heading>
  )),
);

stories.add('Playground', () => (
  <Heading as={select('Level', levels)}>
    {text('Content', 'Heading content')}
  </Heading>
));
