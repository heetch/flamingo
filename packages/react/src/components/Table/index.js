import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTable, useSortBy } from 'react-table';

import HeaderCell from '../TableHeaderCell';
import HeaderGroup from '../TableHeaderGroup';
import RowGroup from '../TableRowGroup';
import RowCell from '../TableRowCell';

const Table = React.forwardRef(
  ({ className, columns, data, isSortable }, ref) => {
    const { headerGroups, rows, prepareRow } = useTable(
      {
        columns,
        data,
      },
      useSortBy,
    );

    React.useMemo(
      () =>
        rows.forEach(row => {
          prepareRow(row);
        }),
      [prepareRow, rows],
    );

    return (
      <table
        className={cx('f-Table', className)}
        cellPadding={0}
        cellSpacing={0}
        ref={ref}
      >
        <thead>
          {headerGroups.map(({ getHeaderGroupProps, headers }) => (
            <HeaderGroup {...getHeaderGroupProps()}>
              {headers.map(
                ({
                  getHeaderProps,
                  getSortByToggleProps,
                  isSorted,
                  isSortedDesc,
                  render,
                }) => (
                  <HeaderCell
                    {...getHeaderProps(isSortable && getSortByToggleProps())}
                    isSorted={isSorted}
                    isSortedDesc={isSortedDesc}
                    isSortable={isSortable}
                  >
                    {render('Header')}
                  </HeaderCell>
                ),
              )}
            </HeaderGroup>
          ))}
        </thead>

        <tbody>
          {rows.map(row => (
            <RowGroup {...row.getRowProps()}>
              {row.cells.map(({ getCellProps, render }) => (
                <RowCell {...getCellProps()}>{render('Cell')}</RowCell>
              ))}
            </RowGroup>
          ))}
        </tbody>
      </table>
    );
  },
);

Table.displayName = 'Table';

Table.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    }),
  ),
  data: PropTypes.arrayOf(PropTypes.shape({})),
  isSortable: PropTypes.bool,
};

Table.defaultProps = {
  className: undefined,
  columns: [],
  data: [],
  isSortable: false,
};

Table.HeaderGroup = HeaderGroup;
Table.HeaderCell = HeaderCell;
Table.RowGroup = RowGroup;
Table.RowCell = RowCell;

export default Table;
