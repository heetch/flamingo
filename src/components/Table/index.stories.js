import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Table from '.';
import Text from '../Text';
import Link from '../Link';
import { Code } from '../../storybook-utils';

const stories = storiesOf('Tables/Table', module);

const getDefaultProps = () => ({
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
});

stories.add('All states', () => {
  const defaultProps = getDefaultProps();
  const col4header = text("Col #4's heading", 'With a link and button');

  return (
    <>
      <Heading>Table</Heading>
      <Table {...defaultProps} />
      <Code>{`
    <Table
      data={[
        ${JSON.stringify(defaultProps.data[0])},
        ...
      ]}
      columns={[
        {
          Header: '${defaultProps.columns[0].Header}',
          accessor: 'string',
        },
        {
          Header: '${defaultProps.columns[1].Header}',
          accessor: 'number',
          Cell: item => <Text isNumber>{item.cell.value}</Text>,
        },
        {
          Header: '${defaultProps.columns[2].Header}',
          accessor: 'custom',
          Cell: () => <Icon icon='${Icon.ICONS.IconMoon}' />,
        },
      ]}
    />
    `}</Code>

      <Heading level={2}>Sortable</Heading>
      <Table {...defaultProps} isSortable />
      <Code>{`
      <Table {...otherProps} isSortable />
      `}</Code>

      <Heading level={2}>With manual sorting</Heading>
      <Table
        {...defaultProps}
        manualSorting
        initialState={{ sortBy: [{ id: 'number', desc: true }] }}
      />
      <Code>{`
      <Table 
        {...otherProps} 
        manualSorting
        initialState={{ sortBy: [{ id: 'number', desc: true }] }} 
      />
      `}</Code>

      <Heading level={2}>With clickable rows</Heading>
      <Table
        {...defaultProps}
        columns={[
          ...defaultProps.columns,
          {
            Header: col4header,
            accessor: null,
            Cell: () => (
              <>
                <Link href='#link'>Click me</Link>
                <IconButton
                  icon={Icon.ICONS.IconOption}
                  onClick={e => {
                    e.stopPropagation();
                    action('onClickIconButton')(e);
                  }}
                />
              </>
            ),
          },
        ]}
        onClickRow={action('onClickRow')}
      />
      <Code>{`
      <Table 
        {...otherProps} 
        columns={[
          ...
          {
            Header: '${col4header}',
            accessor: null,
            Cell: () => (
              <>
                <Link href='#link'>Click me</Link>
                <IconButton icon='${Icon.ICONS.IconOption}' onClick={noop} />
              </>
            ),
          }
        ]}
        onClickRow={noop}
      />
      `}</Code>
    </>
  );
});

stories.add('Playground', () => (
  <>
    <Heading>Table</Heading>
    <Table
      {...getDefaultProps()}
      isSortable={boolean('Table 1 sortable', false)}
      manualSorting={boolean('manualSorting')}
      onChangeSort={action('onChangeSort')}
      onClickRow={action('onClickRow')}
      initialState={{ sortBy: [{ id: 'number', desc: true }] }}
    />
  </>
));
