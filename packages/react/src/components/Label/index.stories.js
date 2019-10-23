import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Label from '.';
import Input from '../Input';

const inputId = 'input-id';

const stories = storiesOf('Form controls/Label', module);

stories.add('Playground', () => (
  <>
    <Label htmlFor={inputId}>{text('Label content', 'Label')}</Label>
    <Input id={inputId} onChange={() => {}} />
  </>
));
