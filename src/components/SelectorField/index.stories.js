import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import SelectorField from '.';

const stories = storiesOf('Form/SelectorField', module);

stories.add('Playground', () => (
  <SelectorField
    id='selector-field'
    label={text('Label (empty to hide)', 'Default label')}
    helper={text('Helper (empty to hide)', 'Default helper')}
    onChange={action('onChange')}
    isInvalid={boolean('isInvalid')}
    isValid={boolean('isValid')}
    options={[
      { label: 'Foo', value: 'foo' },
      { label: 'Bar', value: 'bar' },
      { label: 'Baz', value: 'baz' },
    ]}
  />
));
