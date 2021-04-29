import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import Heading from '../Heading';
import Icon from '../Icon';
import IconButton from '.';
import { Code } from '../../storybook-utils';
import { theme } from '../../theme';

const { ICONS } = Icon;

const stories = storiesOf('Buttons/IconButton', module);

stories.add('All states', () => (
  <>
    <Heading>IconButton</Heading>
    <IconButton icon={ICONS.IconAlertOctagon} />

    <Heading level={2}>With custom color</Heading>
    <IconButton icon={ICONS.IconAlertOctagon} iconColor='blue' />

    <Heading level={2}>Loading</Heading>
    <IconButton icon={ICONS.IconAlertOctagon} isLoading />

    <Heading level={2}>Disabled</Heading>
    <IconButton icon={ICONS.IconAlertOctagon} disabled />

    <Heading level={2}>Sizing</Heading>
    <IconButton icon={ICONS.IconAlertOctagon} size='s' />

    <Code>{`
    <IconButton icon='IconAlertOctagon' />
    <IconButton icon='IconAlertOctagon' iconColor='blue' />
    <IconButton icon='IconAlertOctagon' isLoading />
    <IconButton icon='IconAlertOctagon' disabled />
    <IconButton icon='IconAlertOctagon' size='s' />
    `}</Code>
  </>
));

stories.add('Playground', () => (
  <>
    <IconButton
      disabled={boolean('Disabled', false)}
      icon={select('Icon', ICONS, ICONS.IconCandy)}
      isLoading={boolean('Loading', false)}
      iconColor={select('Icon Color', {
        '-default-': undefined,
        'icon.white': theme.color.icon.white,
        'icon.disabled': theme.color.icon.disabled,
        'icon.dark': theme.color.icon.dark,
        'element.primary': theme.color.element.primary,
        'element.secondary': theme.color.element.secondary,
        'element.tertiary': theme.color.element.tertiary,
        'element.inactive': theme.color.element.inactive,
        'element.error': theme.color.element.error,
        'element.success': theme.color.element.success,
        'element.overlay': theme.color.element.overlay,
      })}
    />
  </>
));
