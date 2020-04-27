import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTable, useSortBy } from 'react-table';

import HeaderCell from './components/TableHeaderCell';
import RowCell from './components/TableRowCell';
import { StyledTable } from './styles';

const Table = React.forwardRef(
  (
    {
      className,
      columns,
      data,
      isSortable,
      manualSorting,
      onChangeSort,
      initialState,
    },
    ref,
  ) => {
    const {
      headerGroups,
      rows,
      prepareRow,
      state: { sortBy },
    } = useTable(
      {
        columns,
        data,
        manualSorting,
        initialState,
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

    React.useEffect(() => {
      onChangeSort(sortBy);
    }, [onChangeSort, sortBy]);

    return (
      <StyledTable
        className={cx('f-Table', className)}
        cellPadding={0}
        cellSpacing={0}
        ref={ref}
      >
        <thead>
          {headerGroups.map(({ getHeaderGroupProps, headers }) => (
            <tr className={'f-Table-HeaderGroup'} {...getHeaderGroupProps()}>
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
            </tr>
          ))}
        </thead>

        <tbody>
          {rows.map(row => (
            <tr className={'f-Table-RowGroup'} {...row.getRowProps()}>
              {row.cells.map(({ getCellProps, render }) => (
                <RowCell {...getCellProps()}>{render('Cell')}</RowCell>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    );
  },
);

Table.displayName = 'Table';

Table.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      accessor: PropTypes.string,
    }),
  ),
  data: PropTypes.arrayOf(PropTypes.shape({})),
  isSortable: PropTypes.bool,
  manualSorting: PropTypes.bool,
  onChangeSort: PropTypes.func,
  initialState: PropTypes.shape({
    sortBy: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        desc: PropTypes.bool,
      }),
    ),
  }),
};

Table.defaultProps = {
  columns: [],
  data: [],
  onChangeSort: () => {},
};

Table.HeaderCell = HeaderCell;
Table.RowCell = RowCell;

export default Table;
