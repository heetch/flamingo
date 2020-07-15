import * as React from 'react';
import { Box, SimpleGrid, useTheme } from '@chakra-ui/core';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Card from '../Card/Card';
import StoryHeading from '../StoryHeading/StoryHeading';
import Helper from '../Helper';
import Icon from './Icon';
import Input from '../Input';
import Label from '../Label';

type IconsFiltererProps = {
  children: (icons: string[]) => React.ReactNode;
  filter?: string;
};

const IconsLister = ({ children, filter = '' }: IconsFiltererProps) => {
  const theme = useTheme();
  const icons = Object.keys(theme.icons).filter(icon =>
    icon.toLowerCase().includes(filter.toLowerCase()),
  );
  return <>{children(icons)}</>;
};

const sizes = ['s', 'm', 'l'];
const customSize = '2rem';

const stories = storiesOf('Icons', module);

stories.add('All', () => {
  const [filter, setFilter] = React.useState('');
  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilter(e.target.value);

  return (
    <>
      <StoryHeading>Icons</StoryHeading>
      <Label htmlFor='icon-search'>Search</Label>
      <Input id='search-input' onChange={onFilterChange} type='search' />
      <IconsLister filter={filter}>
        {icons => (
          <SimpleGrid columns={[2, 2, 4]}>
            {icons.map(icon => (
              <Box key={icon} p='s' textAlign='center'>
                <Card size='s'>
                  <Icon key={icon} name={icon} mb='s' />
                  <Helper>{icon}</Helper>
                </Card>
              </Box>
            ))}
          </SimpleGrid>
        )}
      </IconsLister>
    </>
  );
});

stories.add('Playground', () => (
  <IconsLister>
    {icons => (
      <Icon
        name={select('Icon', icons, icons[0])}
        size={select('Size', [...sizes, customSize], 'm')}
      />
    )}
  </IconsLister>
));
