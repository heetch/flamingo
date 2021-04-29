import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Link from '.';
import Heading from '../Heading';
import Text from '../Text';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Link', module);

stories.add('Playground', () => {
  const content = text('Content', 'dolor');
  return (
    <>
      <Heading>Link</Heading>
      <Text>
        Lorem ipsum <Link href='/?path=/story/link--playground'>{content}</Link>{' '}
        sit amet
      </Text>
      <Code>{`
      <Link href={url}>${content}</Link>
      `}</Code>
    </>
  );
});
