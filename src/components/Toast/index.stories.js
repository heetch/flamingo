import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Alert from '../Alert';
import Heading from '../Heading';

import { StyledToastWrapper } from './styles';

const TYPES = {
  INFORMATION: 'information',
  SUCCESS: 'success',
  ERROR: 'error',
};

const stories = storiesOf('Toast', module);

stories.add('Playground', () => {
  const withOnClose = boolean('With onClose handler', true);
  const onClose = withOnClose ? action('Toast closed!') : null;

  return (
    <>
      <Heading>Toast</Heading>
      <StyledToastWrapper
        zIndex={1}
        position={'flex'}
        onClose={onClose}
        timeout={6000}
        style={{ marginTop: '40px' }}
      >
        <Alert
          onClose={onClose}
          type={TYPES.INFORMATION}
          title={'Toast of type information.'}
        />
      </StyledToastWrapper>
      <StyledToastWrapper
        zIndex={1}
        position={'flex'}
        style={{ marginTop: '40px' }}
      >
        <Alert
          onClose={onClose}
          type={TYPES.SUCCESS}
          title={'Toast of type success.'}
        />
      </StyledToastWrapper>
      <StyledToastWrapper
        zIndex={1}
        position={'flex'}
        style={{ marginTop: '40px' }}
      >
        <Alert
          onClose={onClose}
          type={TYPES.ERROR}
          title={'Toast of type error.'}
        />
      </StyledToastWrapper>
    </>
  );
});
