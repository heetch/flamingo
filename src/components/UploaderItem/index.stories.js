import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import UploaderItem from '.';

const stories = storiesOf('Form/UploaderItem', module);

stories.add('Playground', () => (
  <>
    <Heading>UploaderItem</Heading>
    <UploaderItem
      handleDelete={action('handleDelete')}
      file={{
        name: text('File name', 'doc.txt'),
        type: 'text/plain',
      }}
    />
  </>
));
