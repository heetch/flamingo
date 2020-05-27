import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import StoryHeading from '../StoryHeading/StoryHeading';
import Icon from '../Icon';
import IconButton from '.';

const { ICONS } = Icon;

const stories = storiesOf('Buttons/IconButton', module);

stories.add('All states', () => (
  <>
    <StoryHeading>IconButton</StoryHeading>
    <IconButton icon={ICONS.IconAlertOctagon} />

    <StoryHeading level={2}>With custom color</StoryHeading>
    <IconButton icon={ICONS.IconAlertOctagon} iconColor='blue' />
  </>
));

stories.add('Playground', () => (
  <>
    <IconButton
      disabled={boolean('Disabled', false)}
      icon={select('Icon', ICONS, ICONS.IconCandy)}
    />
  </>
));
