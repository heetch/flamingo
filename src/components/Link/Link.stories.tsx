import React from 'react';
import { storiesOf } from '@storybook/react';

import Link from './Link';
import StoryHeading from '../StoryHeading/StoryHeading';
import Text from '../Text/Text.tsx';

const stories = storiesOf('Link', module);

stories.add('Playground', () => (
  <div id='#story'>
    <StoryHeading>Link</StoryHeading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est tellus,{' '}
      <Link href='#story'>imperdiet sed justo</Link> a, condimentum interdum
      leo. Integer varius massa vitae molestie rutrum.
    </Text>
  </div>
));
