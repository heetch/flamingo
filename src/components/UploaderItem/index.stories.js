import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import UploaderItem from '.';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Form/UploaderItem', module);

stories.add('Playground', () => {
  const name = text('File name', 'doc.txt');
  return (
    <>
      <Heading>UploaderItem</Heading>
      <UploaderItem
        handleDelete={action('handleDelete')}
        file={{
          name,
          type: 'text/plain',
        }}
      />
      <Code>{`
      <UploaderItem
        handleDelete={noop}
        file={{
          name: '${name}',
          type: 'text/plain',
        }}
      />
      `}</Code>
    </>
  );
});
