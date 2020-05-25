import React from 'react';
import { storiesOf } from '@storybook/react';

import StoryHeading from '../StoryHeading/StoryHeading';
import Overlay from '.';

const stories = storiesOf('Overlay', module);

stories.add('Playground', () => (
  <>
    <StoryHeading>Overlay</StoryHeading>
    <Overlay isOpen />
  </>
));
