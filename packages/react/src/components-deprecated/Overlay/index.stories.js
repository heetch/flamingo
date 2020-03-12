import React from 'react';
import { storiesOf } from '@storybook/react';

import Heading from '../Heading';
import Overlay from '.';

const stories = storiesOf('Overlay', module);

stories.add('Playground', () => (
  <>
    <Heading>Overlay</Heading>
    <Overlay />
  </>
));
