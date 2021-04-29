import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean } from '@storybook/addon-knobs';
import Heading from '../Heading';
import Overlay from '.';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Overlay', module);

stories.add('Playground', () => {
  const isOpen = boolean('Is Open', true);
  const animateOnMount = boolean('Animate On Mount', false);
  return (
    <>
      <Heading>Overlay</Heading>
      <Overlay isOpen={isOpen} animateOnMount={animateOnMount} />

      <Code>{`<Overlay isOpen={${isOpen}} animateOnMount={${animateOnMount}}/>`}</Code>
    </>
  );
});
