import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import Heading from '../Heading';
import Icon from '../Icon';
import IconButton from '.';

const { ICONS } = Icon;

const stories = storiesOf('Buttons/IconButton', module);

stories.add('Playground', () => (
  <>
    <Heading>IconButton</Heading>
    <IconButton
      disabled={boolean('Disabled', false)}
      icon={select('Icon', ICONS, ICONS.IconCandy)}
    />

    <IconButton
      disabled={boolean('Disabled', false)}
      icon={ICONS.IconAlertOctagon}
      iconColor='blue'
    />
  </>
));
