import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
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

const stories = storiesOf('Uploader', module);

stories.add('All states', () => (
  <>
    <Heading>Uploader</Heading>
    <Uploader id='uploader' onChange={noop} />

    <Heading level={2}>With default value</Heading>

    <Heading level={3}>Single image</Heading>
    <Uploader
      id='uploader-default-image'
      onChange={noop}
      value={[imageStub1]}
    />

    <Heading level={3}>Multiple images</Heading>
    <Uploader
      id='uploader-default-images'
      multiple
      onChange={noop}
      value={[imageStub1, imageStub2]}
    />

    <Heading level={3}>Single file</Heading>
    <Uploader id='uploader-default-file' onChange={noop} value={[fileStub1]} />

    <Heading level={3}>Multiple files</Heading>
    <Uploader
      id='uploader-default-files'
      multiple
      onChange={noop}
      value={[fileStub1, fileStub2]}
    />

    <Heading level={2}>States</Heading>
    <Uploader id={`uploader-idle`} state={STATES.IDLE} onChange={noop} />
    <Uploader id={`uploader-loading`} state={STATES.LOADING} onChange={noop} />
    <Uploader id={`uploader-error`} state={STATES.ERROR} onChange={noop} />

    <Heading level={2}>Validation</Heading>
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
