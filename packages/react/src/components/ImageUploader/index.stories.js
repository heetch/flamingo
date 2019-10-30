import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import ImageUploader from '.';

const inputName = 'input-name';
const stories = storiesOf('Uploaders/ImageUploader', module);

stories.add('Playground', () => (
  <>
    <Heading>ImageUploader</Heading>
    <ImageUploader
      name={inputName}
      onChange={action('onChange')}
      multiple={boolean('Has multiple files', true)}
    />
  </>
));
