import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import UploaderField from '.';

const stories = storiesOf('UploaderField', module);

stories.add('Playground', () => (
  <UploaderField
    id='uploader-field'
    label={text('Label (empty to hide)', 'Default label')}
    helper={text('Helper (empty to hide)', 'Default helper')}
    onChange={action('onChange')}
    valid={boolean('Valid', false)}
    invalid={boolean('Invalid', false)}
  />
));
