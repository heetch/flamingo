import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Card from '../Card';
import Heading from '../Heading';
import Helper from '../Helper';
import Input from '../Input';
import Label from '../Label';
import Icon from '.';
import { theme } from '../../theme';
import { Code } from '../../storybook-utils';

const icons = Object.keys(Icon.ICONS);
const sizes = Object.values(Icon.SIZES);

const IconsFilterer = () => {
  const [filter, setFilter] = React.useState('');

  const displayedIcons = icons.filter(icon =>
    icon.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleInputChange = e => setFilter(e.target.value);

  return (
    <div>
      <Heading>Icons</Heading>

      <Code>{`
      <Icon icon='IconStar' size='m' iconColor={theme.color.element.error} />
      `}</Code>

      <Label htmlFor='icon-search'>Search</Label>
      <Input id='icon-search' onChange={handleInputChange} type='search' />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {displayedIcons.map(icon => (
          <div
            key={icon}
            style={{
              padding: theme.space.s,
              width: '25%',
              textAlign: 'center',
            }}
          >
            <Card size={Card.SIZES.S}>
              <Icon
                key={`f-iconSize--${icon}`}
                icon={icon}
                size={Icon.SIZES.L}
              />
              <Helper style={{ marginTop: theme.space.s }}>{icon}</Helper>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

const stories = storiesOf('Icons', module);

stories.add('All', () => <IconsFilterer />);

stories.add('Playground', () => (
  <Icon
    icon={select('Icon', icons, Icon.ICONS.IconAlertOctagon)}
    size={select('Size', sizes, Icon.SIZES.M)}
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
));
