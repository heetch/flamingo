import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Link from '.';
import Heading from '../Heading';
import Text from '../Text';

const stories = storiesOf('Link', module);

stories.add('Playground', () => (
  <>
    <Heading>Link</Heading>
    <Text>
      Lorem ipsum{' '}
      <Link href='/?path=/story/link--playground'>
        {text('Content', 'dolor')}
      </Link>{' '}
      sit amet
    </Text>
  </>
));
