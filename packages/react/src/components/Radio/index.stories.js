import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Radio from '.';

storiesOf('Form controls/Radio', module)
  .addDecorator(withKnobs)
  .addDecorator(storiesFn => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {storiesFn()}
    </div>
  ))
  .add(
    'Playground',
    withInfo('')(() =>
      Array.from(Array(2)).map(() => (
        <Radio
          name='radio-group-1'
          disabled={boolean('Is disabled?', false)}
          helper={text('Label helper', 'Label helper')}
        >
          {text('Label', 'Label')}
        </Radio>
      )),
    ),
  )
  .add('All states', () => (
    <>
      <div style={{ width: '100%' }}>
        <Radio name='radio-group-1'>Normal</Radio>
      </div>
      <div style={{ width: '100%' }}>
        <Radio name='radio-group-2' checked>
          Checked
        </Radio>
      </div>
      <div style={{ width: '100%' }}>
        <Radio name='radio-group-3' disabled>
          Disabled
        </Radio>
      </div>
      <div style={{ width: '100%' }}>
        <Radio name='radio-group-4' disabled checked>
          Disabled & checked
        </Radio>
      </div>
    </>
  ));
