import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Toast from '.';
import Heading from '../Heading';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Toast', module);

stories.add('Playground', () => {
  const withOnClose = boolean('With onClose handler', true);
  const onClose = withOnClose ? action('Toast closed!') : null;

  return (
    <>
      <Heading>Toast</Heading>
      <Toast
        zIndex={1}
        timeoutDelay={60000}
        type={Toast.TYPES.SUCCESS}
        title={'Toast of type success, on the top of the page.'}
        position={'top'}
        onClose={onClose}
      >
        {"I'm a subtitle"}
      </Toast>
      <Toast
        zIndex={1}
        timeoutDelay={8000}
        type={Toast.TYPES.ERROR}
        title={'Toast of type error.'}
      />
      <Toast
        zIndex={2}
        timeoutDelay={4000}
        type={Toast.TYPES.INFORMATION}
        title={'Toast of type information.'}
      >
        {"I'm a subtitle"}
      </Toast>

      <Code>{`
      <Toast
        zIndex={1}
        timeoutDelay={60000}
        type='${Toast.TYPES.SUCCESS}'
        title='Toast of type success, on the top of the page.'
        position='top'
        onClose={onClose}
      >
        {"I'm a subtitle"}
      </Toast>
      <Toast
        zIndex={1}
        timeoutDelay={8000}
        type='${Toast.TYPES.ERROR}'
        title='Toast of type error.'
      />
      <Toast
        zIndex={2}
        timeoutDelay={4000}
        type='${Toast.TYPES.INFORMATION}'
        title='Toast of type information.'
      >
        {"I'm a subtitle"}
      </Toast>
      `}</Code>
    </>
  );
});
