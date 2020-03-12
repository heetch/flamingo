import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import FileUploader from '.';

const stories = storiesOf('Form/FileUploader', module);

stories.add('Playground', () => (
  <>
    <Heading>FileUploader</Heading>
    <FileUploader
      id='input-id'
      onChange={action('onChange')}
      isLoading={boolean('Is loading', false)}
      hasError={boolean('Has error', false)}
      multiple={boolean('Has multiple files', true)}
    />
  </>
));
