import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Link from '.';
import StoryHeading from '../StoryHeading/StoryHeading';
import Text from '../Text/Text.tsx';

const stories = storiesOf('Link', module);

stories.add('Playground', () => (
  <>
    <StoryHeading>Link</StoryHeading>
    <Text>
      Lorem ipsum{' '}
      <Link href='/?path=/story/link--playground'>
        {text('Content', 'dolor')}
      </Link>{' '}
      sit amet
    </Text>
  </>
));
