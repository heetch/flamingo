import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Toggle from '.';

storiesOf('Toggle', module)
  .addDecorator(storiesFn => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {storiesFn()}
    </div>
  ))
  .add(
    'Playground',
    withInfo('')(() => (
      <Toggle
        disabled={boolean('Is disabled?', false)}
        label={text('Label', 'Toggle label')}
        helper={text('Label helper', 'Label helper')}
        onChange={action(`onChange`)}
      />
    )),
  )
  .add('All states', () => (
    <>
      <div style={{ width: '100%' }}>
        <Toggle label='Toggle' helper='Normal' onChange={action(`onChange`)} />
      </div>
      <div style={{ width: '100%' }}>
        <Toggle
          checked
          label='Toggle'
          helper='On'
          onChange={action(`onChange`)}
        />
      </div>
      <div style={{ width: '100%' }}>
        <Toggle
          disabled
          label='Toggle'
          helper='Disabled'
          onChange={action(`onChange`)}
        />
      </div>
      <div style={{ width: '100%' }}>
        <Toggle
          disabled
          checked
          label='Toggle'
          helper='On & Disabled'
          onChange={action(`onChange`)}
        />
      </div>
    </>
  ));
