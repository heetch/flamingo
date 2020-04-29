import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Icon from '../Icon';
import Table from '.';
import Text from '../Text';

const stories = storiesOf('Table', module);

const defaultProps = {
  data: [...new Array(7)].map(() => ({
    string: Math.random(),
    number: Math.random().toFixed(2),
    custom: 'https://myrealdomain.com/images/avatar-icon-5.png',
  })),
  columns: [
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
  ],
};

stories.add('All states', () => (
  <>
    <Heading>Table</Heading>
    <Table {...defaultProps} />

    <Heading level={2}>Sortable</Heading>
    <Table {...defaultProps} isSortable />

    <Heading level={2}>With manual sorting</Heading>
    <Table
      {...defaultProps}
      manualSorting
      initialState={{ sortBy: [{ id: 'number', desc: true }] }}
    />
  </>
));

stories.add('Playground', () => (
  <>
    <Heading>Table</Heading>
    <Table
      {...defaultProps}
      isSortable={boolean('Table 1 sortable', false)}
      manualSorting={boolean('manualSorting')}
      onChangeSort={action('onChangeSort')}
      initialState={{ sortBy: [{ id: 'number', desc: true }] }}
    />
  </>
));
