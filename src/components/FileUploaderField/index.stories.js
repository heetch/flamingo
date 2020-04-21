import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import FileUploaderField from '.';

const stories = storiesOf('Form/FileUploaderField', module);

stories.add('Playground', () => (
  <FileUploaderField
    id='file-uploader-field'
    label={text('Label (empty to hide)', 'Default label')}
    helper={text('Helper (empty to hide)', 'Default helper')}
    onChange={action('onChange')}
    valid={boolean('Valid', false)}
    invalid={boolean('Invalid', false)}
  />
));
