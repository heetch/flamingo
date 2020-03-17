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

stories.add('Playground', () => (
  <>
    <Heading>ImageUploader</Heading>
    <ImageUploader
      id='input-id'
      onChange={action('onChange')}
      multiple={boolean('Has multiple files', true)}
    />

    <Heading level={2}>With default value</Heading>
    <ImageUploader
      id='input-default-value'
      onChange={action('onChange')}
      multiple={false}
      value={[stubFile1]}
    />

    <Heading level={2}>With default values</Heading>
    <ImageUploader
      id='input-default-values'
      onChange={action('onChange')}
      multiple
      value={[stubFile1, stubFile2]}
    />
  </>
));
