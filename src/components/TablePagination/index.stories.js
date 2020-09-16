import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Heading from '../Heading';
import Icon from '../Icon';
import Pagination from '../Pagination';
import Table from '.';
import Text from '../Text';

const stories = storiesOf('Tables/Pagination', module);

const defaultProps = {
  data: [...new Array(74)].map(() => ({
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

const TablePagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsCount = defaultProps.data.length;
  const itemsPerPage = 7;
  const totalPages = Math.ceil(itemsCount / itemsPerPage);
  const pageSize = itemsPerPage <= itemsCount ? itemsPerPage : itemsCount;

  return (
    <>
      <Heading>Table</Heading>
      <Table
        {...defaultProps}
        initialState={{
          pageIndex: currentPage,
          pageSize,
        }}
      />
      <div>{`Page: ${currentPage + 1}/${totalPages}`}</div>
      <Pagination
        goPrev={() => setCurrentPage(p => p - 1)}
        goNext={() => setCurrentPage(p => p + 1)}
        prevDisabled={currentPage === 0}
        nextDisabled={currentPage === totalPages - 1}
        position='flex-start'
      />
    </>
  );
};

const TableSorted = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsCount = defaultProps.data.length;
  const itemsPerPage = 7;
  const totalPages = Math.ceil(itemsCount / itemsPerPage);
  const pageSize = itemsPerPage <= itemsCount ? itemsPerPage : itemsCount;

  return (
    <>
      <Heading level={2}>Sortable</Heading>
      <Table
        {...defaultProps}
        isSortable
        initialState={{
          pageIndex: currentPage,
          pageSize,
        }}
      />
      <div>{`Page: ${currentPage + 1}/${totalPages}`}</div>
      <Pagination
        goPrev={() => setCurrentPage(p => p - 1)}
        goNext={() => setCurrentPage(p => p + 1)}
        prevDisabled={currentPage === 0}
        nextDisabled={currentPage === totalPages - 1}
        position='flex-start'
      />
    </>
  );
};

const TableManual = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsCount = defaultProps.data.length;
  const itemsPerPage = 7;
  const totalPages = Math.ceil(itemsCount / itemsPerPage);
  const pageSize = itemsPerPage <= itemsCount ? itemsPerPage : itemsCount;

  return (
    <>
      <Heading level={2}>With manual sorting</Heading>
      <Table
        {...defaultProps}
        manualSorting
        initialState={{
          sortBy: [{ id: 'number', desc: true }],
          pageIndex: currentPage,
          pageSize,
        }}
      />
      <div>{`Page: ${currentPage + 1}/${totalPages}`}</div>
      <Pagination
        goPrev={() => setCurrentPage(p => p - 1)}
        goNext={() => setCurrentPage(p => p + 1)}
        prevDisabled={currentPage === 0}
        nextDisabled={currentPage === totalPages - 1}
        position='flex-start'
      />
    </>
  );
};

stories.add('All states', () => (
  <>
    <TablePagination />
    <TableSorted />
    <TableManual />
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
