import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import InlineAlert from '.';
import { INLINE_ALERT_TYPES } from '../../constants';

storiesOf('Alerts/InlineAlert', module)
  .add(
    'Playground',
    withInfo('')(() => (
      <InlineAlert
        title={text('Title', 'Title of alert')}
        onClose={action('Alert closed!')}
        type={select(
          'Alert type',
          INLINE_ALERT_TYPES,
          INLINE_ALERT_TYPES.INFORMATION,
        )}
      >
        {text('Message', 'Alert message')}
      </InlineAlert>
    )),
  )
  .add('All states', () =>
    Object.values(INLINE_ALERT_TYPES).map(type => (
      <InlineAlert
        title={`Inline alert of type ${type}`}
        onClose={action(`Alert ${type} closed!`)}
        type={type}
      >
        Alert message
      </InlineAlert>
    )),
  );
