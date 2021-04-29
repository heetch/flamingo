import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Helper from '.';
import Heading from '../Heading';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Form/Helper', module);

stories.add('Playground', () => {
  const content = text('Content', 'Input helper');
  return (
    <>
      <Heading>Helper</Heading>
      <Helper>{content}</Helper>
      <Code>{`
      <Helper>${content}</Helper>
    `}</Code>
    </>
  );
});
