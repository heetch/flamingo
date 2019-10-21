import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Alert from '.';

const { TYPES } = Alert;

const stories = storiesOf('Alert', module);

stories.add('All states', () =>
  Object.values(TYPES).map(type => (
    <Alert
      key={type}
      title={`Inline alert of type ${type}`}
      onClose={action(`Alert ${type} closed!`)}
      type={type}
    >
      Alert message
    </Alert>
  )),
);

stories.add(
  'Playground',
  withInfo('')(() => {
    const withOnClose = boolean('With onClose handler', true);
    const onClose = withOnClose ? action('Alert closed!') : null;

    return (
      <Alert
        title={text('Title', 'Title of alert')}
        onClose={onClose}
        type={select('Alert type', TYPES, TYPES.INFORMATION)}
      >
        {text('Message', 'Alert message')}
      </Alert>
    );
  }),
);