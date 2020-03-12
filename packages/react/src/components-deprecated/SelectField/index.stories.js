import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import SelectField from '.';

const stories = storiesOf('Form/SelectField', module);

stories.add('Playground', () => (
  <SelectField
    id='select-field'
    label={text('Label (empty to hide)', 'Default label')}
    helper={text('Helper (empty to hide)', 'Default helper')}
    invalid={boolean('Is Invalid?', false)}
    valid={boolean('Is Valid?', false)}
    onChange={action('onChange')}
    options={[
      { label: 'Foo', value: 'foo' },
      { label: 'Bar', value: 'bar' },
    ]}
  />
));
