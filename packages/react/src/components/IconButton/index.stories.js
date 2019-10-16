import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import Button from '../Button';
import IconButton from '.';

import { ICONS } from '../../constants';

const { INTENTS, VARIANTS } = Button;

const stories = storiesOf('Buttons/IconButton', module);

stories.add('Playground', () => (
  <IconButton
    disabled={boolean('Disabled', false)}
    icon={select('Icon', ICONS, ICONS.IconCandy)}
    intent={select('Intent', INTENTS)}
    variant={select('Variant', VARIANTS)}
  />
));
