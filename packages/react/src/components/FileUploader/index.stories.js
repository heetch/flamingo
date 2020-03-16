import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import FileUploader from '.';

const stubFile1 = {
  name: 'stub-file-1.txt',
  type: 'text',
};

const stubFile2 = {
  name: 'stub-file-2.txt',
  type: 'text',
};

const stories = storiesOf('Form/FileUploader', module);

stories.add('Playground', () => (
  <>
    <Heading>FileUploader</Heading>
    <FileUploader
      id='input-id'
      onChange={action('onChange')}
      isLoading={boolean('Is loading', false)}
      hasError={boolean('Has error', false)}
      multiple={boolean('Has multiple files', true)}
    />

    <Heading level={2}>With default value</Heading>
    <FileUploader
      id='input-id'
      onChange={action('onChange')}
      isLoading={boolean('Is loading', false)}
      hasError={boolean('Has error', false)}
      multiple={false}
      value={[stubFile1]}
    />

    <Heading level={2}>With default values</Heading>
    <FileUploader
      id='input-id'
      onChange={action('onChange')}
      isLoading={boolean('Is loading', false)}
      hasError={boolean('Has error', false)}
      multiple
      value={[stubFile1, stubFile2]}
    />
  </>
));
