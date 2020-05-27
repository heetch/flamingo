import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Label from '.';
import StoryHeading from '../StoryHeading/StoryHeading';

const inputId = 'input-id';

const stories = storiesOf('Form/Label', module);

stories.add('Playground', () => (
  <>
    <StoryHeading>Label</StoryHeading>
    <Label htmlFor={inputId}>{text('Label content', 'Label')}</Label>
  </>
));
