import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import StoryHeading from '../StoryHeading/StoryHeading';
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

stories.add('All states', () => (
  <>
    <StoryHeading>FileUploader</StoryHeading>
    <FileUploader id='file-uploader' onChange={action('onChange')} />

    <StoryHeading>With multiple files</StoryHeading>
    <FileUploader
      id='file-uploader-multiple'
      onChange={action('onChange')}
      multiple
    />

    <StoryHeading level={2}>With default value</StoryHeading>
    <FileUploader
      id='file-uploader-default-value'
      onChange={action('onChange')}
      value={[stubFile1]}
    />

    <StoryHeading level={2}>With default value and multiple files</StoryHeading>
    <FileUploader
      id='file-uploader-default-value-multiple'
      onChange={action('onChange')}
      multiple
      value={[stubFile1, stubFile2]}
    />

    <StoryHeading level={2}>Validation</StoryHeading>
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
  <FileUploader
    id='input-id'
    onChange={action('onChange')}
    multiple={boolean('Has multiple files', true)}
  />
));
