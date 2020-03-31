import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Icon from '../Icon';
import Table from '.';
import Text from '../Text';

const data = [...new Array(7)].map(() => ({
  string: Math.random(),
  number: Math.random().toFixed(2),
  custom: 'https://myrealdomain.com/images/avatar-icon-5.png',
}));

const stories = storiesOf('Table', module);

stories.add('Playground', () => (
  <>
    <Heading>Table</Heading>
    <Table
      columns={[
        {
          Header: text("Col #1's heading", 'With string'),
          accessor: 'string',
        },
        {
          Header: text("Col #2's heading", 'With number'),
          accessor: 'number',
          Cell: item => <Text isNumber>{item.cell.value}</Text>,
        },
        {
          Header: text("Col #3's heading", 'With custom rendering'),
          accessor: 'custom',
          Cell: () => <Icon icon={Icon.ICONS.IconMoon} />,
        },
      ]}
      data={data}
      isSortable={boolean('Table 1 sortable', false)}
    />

    <Heading>Table with manual sorting</Heading>
    <Table
      columns={[
        {
          Header: text("Col #1's heading", 'With string'),
          accessor: 'string',
        },
        {
          Header: text("Col #2's heading", 'With number'),
          accessor: 'number',
          Cell: item => <Text isNumber>{item.cell.value}</Text>,
        },
        {
          Header: text("Col #3's heading", 'With custom rendering'),
          accessor: 'custom',
          Cell: () => <Icon icon={Icon.ICONS.IconMoon} />,
        },
      ]}
      data={data}
      isSortable={boolean('Table 2 sortable', true)}
      manualSorting
      onChangeSort={action('onChangeSort')}
      initialState={{ sortBy: [{ id: 'number', desc: true }] }}
    />
  </>
));
