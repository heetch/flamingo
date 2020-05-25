import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Helper from '.';
import StoryHeading from '../StoryHeading/StoryHeading';

const stories = storiesOf('Form/Helper', module);

stories.add('Playground', () => (
  <>
    <StoryHeading>Helper</StoryHeading>
    <Helper>{text('Content', 'Input helper')}</Helper>
  </>
));
