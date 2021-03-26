import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import Alert from '../Alert';
import Heading from '../Heading';
import Icon from '../Icon';
import { StyledToastWrapper } from './styles';

const TYPES = {
  INFORMATION: 'information',
  SUCCESS: 'success',
  ERROR: 'error',
};

const icons = {
  [TYPES.INFORMATION]: Icon.ICONS.IconInfo,
  [TYPES.SUCCESS]: Icon.ICONS.IconCheck,
  [TYPES.ERROR]: Icon.ICONS.IconAlertOctagon,
};

const stories = storiesOf('Toast', module);

stories.add('Playground', () => {
  const onClose = boolean('With onClose handler', true);

  return (
    <>
      <Heading>Toast</Heading>
      <StyledToastWrapper
        data-testid={'testId'}
        zIndex={1}
        position={'flex'}
        isVisible={null}
        style={{ marginTop: '40px' }}
      >
        <Alert
          onClose={onClose}
          type={TYPES.INFORMATION}
          title={'Toast of type information.'}
        ></Alert>
      </StyledToastWrapper>
      <StyledToastWrapper
        data-testid={'testId'}
        zIndex={1}
        position={'flex'}
        isVisible={null}
        style={{ marginTop: '40px' }}
      >
        <Alert
          onClose={onClose}
          type={TYPES.SUCCESS}
          title={'Toast of type success.'}
        ></Alert>
      </StyledToastWrapper>
      <StyledToastWrapper
        data-testid={'testId'}
        zIndex={1}
        position={'flex'}
        isVisible={null}
        style={{ marginTop: '40px' }}
      >
        <Alert
          onClose={onClose}
          type={TYPES.ERROR}
          title={'Toast of type error.'}
        ></Alert>
      </StyledToastWrapper>
    </>
  );
});
