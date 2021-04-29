import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Label from '.';
import Heading from '../Heading';
import { Code } from '../../storybook-utils';

const inputId = 'input-id';

const stories = storiesOf('Form/Label', module);

stories.add('Playground', () => {
  const label = text('Label content', 'Label');
  return (
    <>
      <Heading>Label</Heading>
      <Label htmlFor={inputId}>{label}</Label>
      <Code>{`
      <Label htmlFor='${inputId}'>${label}</Label>
      `}</Code>
    </>
  );
});
