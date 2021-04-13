import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Toast from '.';
import Heading from '../Heading';

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
        onClose={onClose}
        type={Toast.TYPES.SUCCESS}
        title={'Toast of type success.'}
      />

      <Toast
        zIndex={1}
        position={'bottom'}
        timeoutDelay={1000}
        type={Toast.TYPES.INFORMATION}
        title={'Toast of type information.'}
      />

      <Toast
        zIndex={2}
        type={Toast.TYPES.ERROR}
        title={'Toast of type error.'}
      />
    </>
  );
});
