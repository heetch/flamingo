import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import FileUploader from '.';
import Alert from '../Alert';

const stubFile1 = {
  name: 'stub-file-1.txt',
  type: 'text',
};

const stubFile2 = {
  name: 'stub-file-2.txt',
  type: 'text',
};

const stories = storiesOf('Form/⚠️ FileUploader', module);

stories.add('All states', () => (
  <>
    <Alert type='error'>Deprecated</Alert>

    <Heading>FileUploader</Heading>
    <FileUploader id='file-uploader' onChange={action('onChange')} />

    <Heading>With multiple files</Heading>
    <FileUploader
      id='file-uploader-multiple'
      onChange={action('onChange')}
      multiple
    />

    <Heading level={2}>With default value</Heading>
    <FileUploader
      id='file-uploader-default-value'
      onChange={action('onChange')}
      value={[stubFile1]}
    />

    <Heading level={2}>With default value and multiple files</Heading>
    <FileUploader
      id='file-uploader-default-value-multiple'
      onChange={action('onChange')}
      multiple
      value={[stubFile1, stubFile2]}
    />

    <Heading level={2}>Validation</Heading>
    <FileUploader
      id='file-uploader-invalid'
      onChange={action('onChange')}
      invalid
    />

    <FileUploader
      id='file-uploader-invalid'
      onChange={action('onChange')}
      valid
    />
  </>
));

stories.add('Playground', () => (
  <>
    <Alert type='error'>Deprecated</Alert>

    <FileUploader
      id='input-id'
      onChange={action('onChange')}
      multiple={boolean('Has multiple files', true)}
    />
  </>
));
