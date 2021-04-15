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
        type={Toast.TYPES.SUCCESS}
        title={'Toast of type success, on the top of the page.'}
        children={"I'm a subtitle"}
        position={'top'}
        onClose={onClose}
      />

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
        children={"I'm a subtitle"}
      />
    </>
  );
});
