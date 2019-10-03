import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ImageUploader from '.';
import Helper from '../Helper';
import Label from '../Label';

const inputName = 'input-name';
const stories = storiesOf('Uploaders/ImageUploader', module);

stories.add('Playground', () => (
  <ImageUploader
    name={inputName}
    onChange={action('onChange')}
    multiple={boolean('Has multiple files', true)}
  />
));

stories.add('Within form', () => (
  <>
    <Label htmlFor={inputName}>Image uploader label</Label>
    <ImageUploader
      name={inputName}
      onChange={action('onChange')}
      multiple={boolean('Has multiple files', true)}
    />
    <Helper>Helper text</Helper>
  </>
));
