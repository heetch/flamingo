import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import Heading from '../Heading';
import Icon from '../Icon';
import IconButton from '.';

const { ICONS } = Icon;

const stories = storiesOf('Buttons/IconButton', module);

stories.add('All states', () => (
  <>
    <Heading>IconButton</Heading>
    <IconButton icon={ICONS.IconAlertOctagon} />

    <Heading level={2}>With custom color</Heading>
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
