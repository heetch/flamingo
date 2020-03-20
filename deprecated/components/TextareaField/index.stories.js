import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TextareaField from './index';

const stories = storiesOf('Form/TextareaField', module);

stories.add('Playground', () => (
  <TextareaField
    id='textarea-field'
    label={text('Label (empty to hide)', 'Default label')}
    helper={text('Helper (empty to hide)', 'Default helper')}
    invalid={boolean('Is Invalid?', false)}
    valid={boolean('Is Valid?', false)}
    onChange={action('onChange')}
  />
));
