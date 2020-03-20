import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import InputField from './index';

const stories = storiesOf('Form controls/InputField', module);

stories.add('Playground', () => (
  <InputField
    id='input-field'
    label={text('Label (empty to hide)', 'Default label')}
    helper={text('Helper (empty to hide)', 'Default helper')}
    invalid={boolean('Is Invalid?', false)}
    valid={boolean('Is Valid?', false)}
    onChange={action('onChange')}
  />
));
