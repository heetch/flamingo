import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import StoryHeading from '../StoryHeading/StoryHeading';
import Uploader from '.';
import { STATES } from './constants';

const imageStub1 = {
  name: 'image-stub-1.jpg',
  type: 'image/jpg',
  preview: 'https://api.adorable.io/avatars/285/10@adorable.io.png',
};
const imageStub2 = {
  name: 'image-stub-2.jpg',
  type: 'image/jpg',
  preview: 'https://api.adorable.io/avatars/285/abott@adorable.png',
};

const fileStub1 = {
  name: 'file-stub-1.txt',
  type: 'text',
};
const fileStub2 = {
  name: 'file-stub-2.txt',
  type: 'text',
};

const noop = () => {};

const stories = storiesOf('Form/Uploader', module);

stories.add('All states', () => (
  <>
    <StoryHeading>Uploader</StoryHeading>
    <Uploader id='uploader' onChange={noop} />

    <StoryHeading level={2}>With default value</StoryHeading>

    <StoryHeading level={3}>Single image</StoryHeading>
    <Uploader
      id='uploader-default-image'
      onChange={noop}
      value={[imageStub1]}
    />

    <StoryHeading level={3}>Multiple images</StoryHeading>
    <Uploader
      id='uploader-default-images'
      multiple
      onChange={noop}
      value={[imageStub1, imageStub2]}
    />

    <StoryHeading level={3}>Single file</StoryHeading>
    <Uploader id='uploader-default-file' onChange={noop} value={[fileStub1]} />

    <StoryHeading level={3}>Multiple files</StoryHeading>
    <Uploader
      id='uploader-default-files'
      multiple
      onChange={noop}
      value={[fileStub1, fileStub2]}
    />

    <StoryHeading level={2}>States</StoryHeading>
    <Uploader id={`uploader-idle`} state={STATES.IDLE} onChange={noop} />
    <Uploader id={`uploader-loading`} state={STATES.LOADING} onChange={noop} />
    <Uploader id={`uploader-error`} state={STATES.ERROR} onChange={noop} />

    <StoryHeading level={2}>Validation</StoryHeading>
    <Uploader id='uploader-invalid' onChange={noop} invalid />
    <Uploader id='uploader-invalid' onChange={noop} valid />
  </>
));

stories.add('Playground', () => (
  <Uploader
    id='input-id'
    onChange={action('onChange')}
    multiple={boolean('Handle multiple files', true)}
  />
));
