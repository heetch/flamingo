import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Uploader from '.';
import { STATES } from './constants';
import { Code } from '../../storybook-utils';

const imageStub1 = {
  name: 'image-stub-1.jpg',
  type: 'image/jpg',
  preview: 'https://picsum.photos/640/480?random=1',
};
const imageStub2 = {
  name: 'image-stub-2.jpg',
  type: 'image/jpg',
  preview: 'https://picsum.photos/640/480?random=2',
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
    <Heading>Uploader</Heading>
    <Uploader id='uploader' onChange={noop} />
    <Code>{`
    <Uploader onChange={noop} />
    `}</Code>

    <Heading level={2}>With default value</Heading>

    <Heading level={3}>Single image</Heading>
    <Uploader
      id='uploader-default-image'
      onChange={noop}
      value={[imageStub1]}
    />
    <Code>{`
    <Uploader onChange={noop} value={[image]} />
    `}</Code>

    <Heading level={3}>Multiple images</Heading>
    <Uploader
      id='uploader-default-images'
      multiple
      onChange={noop}
      value={[imageStub1, imageStub2]}
    />
    <Code>{`
    <Uploader onChange={noop} value={[...images]} multiple />
    `}</Code>

    <Heading level={3}>Single file</Heading>
    <Uploader id='uploader-default-file' onChange={noop} value={[fileStub1]} />
    <Code>{`
    <Uploader onChange={noop} value={[file]} />
    `}</Code>

    <Heading level={3}>Multiple files</Heading>
    <Uploader
      id='uploader-default-files'
      multiple
      onChange={noop}
      value={[fileStub1, fileStub2]}
    />
    <Code>{`
    <Uploader onChange={noop} value={[...files]} multiple />
    `}</Code>

    <Heading level={2}>States</Heading>
    <Uploader id={`uploader-idle`} state={STATES.IDLE} onChange={noop} />
    <Uploader id={`uploader-loading`} state={STATES.LOADING} onChange={noop} />
    <Uploader id={`uploader-error`} state={STATES.ERROR} onChange={noop} />
    <Code>{`
    <Uploader state='${STATES.IDLE}' onChange={noop} />
    <Uploader state='${STATES.LOADING}' onChange={noop} />
    <Uploader state='${STATES.ERROR}' onChange={noop} />
    `}</Code>

    <Heading level={2}>Validation</Heading>
    <Uploader id='uploader-invalid' onChange={noop} invalid />
    <Uploader id='uploader-invalid' onChange={noop} valid />
    <Code>{`
    <Uploader onChange={noop} invalid />
    <Uploader onChange={noop} valid />
    `}</Code>
  </>
));

stories.add('Playground', () => {
  const state = select('State', { '- default -': undefined, ...STATES });
  const multiple = boolean('Handle multiple files', true);
  const invalid = boolean('Invalid');
  const valid = boolean('Valid');
  return (
    <Uploader
      id='input-id'
      onChange={action('onChange')}
      multiple={multiple}
      state={state}
      invalid={invalid}
      valid={valid}
    />
  );
});
