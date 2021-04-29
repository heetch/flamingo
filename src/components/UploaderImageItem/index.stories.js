import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import UploaderImageItem from '.';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Form/UploaderImageItem', module);

stories.add('Playground', () => {
  const image = {
    name: text('File name', 'image-stub-1.jpg'),
    type: 'image/jpg',
    preview: text('Image URL', 'https://picsum.photos/640/480?random=1'),
  };

  return (
    <>
      <Heading>UploaderImageItem</Heading>
      <UploaderImageItem handleDelete={action('handleDelete')} file={image} />
      <Code>{`
      <UploaderImageItem
        handleDelete={noop}
        file={{
          name: '${image.name}',
          type: '${image.type}',
          preview: '${image.preview}',
        }}
      />
      `}</Code>
    </>
  );
});
