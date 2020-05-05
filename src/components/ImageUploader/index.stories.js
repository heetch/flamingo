import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import ImageUploader from '.';

const stubFile1 = {
  name: 'image-stub-1',
  type: 'image/jpg',
  preview: 'https://api.adorable.io/avatars/285/10@adorable.io.png',
};

const stubFile2 = {
  name: 'image-stub-2',
  type: 'image/jpg',
  preview: 'https://api.adorable.io/avatars/285/abott@adorable.png',
};

const stories = storiesOf('Form/ImageUploader', module);

stories.add('All states', () => (
  <>
    <Heading>ImageUploader</Heading>
    <ImageUploader id='image-uploader' onChange={action('onChange')} />

    <Heading>With multiple files</Heading>
    <ImageUploader
      id='image-uploader-multiple'
      onChange={action('onChange')}
      multiple
    />

    <Heading level={2}>With default value</Heading>
    <ImageUploader
      id='image-uploader-default-value'
      onChange={action('onChange')}
      value={[stubFile1]}
    />

    <Heading level={2}>With default value and multiple files</Heading>
    <ImageUploader
      id='image-uploader-default-value-multiple'
      onChange={action('onChange')}
      multiple
      value={[stubFile1, stubFile2]}
    />

    <Heading level={2}>Validation</Heading>
    <ImageUploader
      id='image-uploader-invalid'
      onChange={action('onChange')}
      invalid
    />

    <ImageUploader
      id='image-uploader-invalid'
      onChange={action('onChange')}
      valid
    />
  </>
));

stories.add('Playground', () => (
  <ImageUploader
    id='input-id'
    onChange={action('onChange')}
    onBadFormat={action('onBadFormat')}
    multiple={boolean('Has multiple files', true)}
  />
));
