import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Label from '.';
import Heading from '../Heading';

const stories = storiesOf('Form/Label', module);

stories.add('Playground', () => (
  <>
    <Heading>Label</Heading>
    <Label htmlFor='input-id'>{text('Label content', 'Label')}</Label>
  </>
));
