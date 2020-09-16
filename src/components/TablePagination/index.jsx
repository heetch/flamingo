import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useTable, useSortBy, usePagination } from 'react-table';

import HeaderCell from './components/TableHeaderCell';
import RowCell from './components/TableRowCell';

import { StyledTable } from './styles';

const TablePagination = React.forwardRef(
  (
    {
      className,
      columns,
      data,
      isSortable,
      manualSorting,
      onChangeSort,
      initialState,
      onRowClick,
    },
    ref,
  ) => {
    const tableProps = useTable(
      {
        columns,
        data,
        manualSorting,
        initialState,
      },
      useSortBy,
      usePagination,
    );

    const {
      gotoPage,
      headerGroups,
      page,
      prepareRow,
      state: { sortBy },
    } = tableProps;

    useMemo(
      () =>
        page.forEach(row => {
          prepareRow(row);
        }),
      [prepareRow, page],
    );

    useEffect(() => {
      onChangeSort(sortBy);
    }, [onChangeSort, sortBy]);

    useEffect(() => {
      gotoPage(initialState.pageIndex);
    }, [gotoPage, initialState.pageIndex]);

    return (
      <StyledTable
        className={cx('f-Table', className)}
        cellPadding={0}
        cellSpacing={0}
        ref={ref}
      >
        <thead>
          {headerGroups.map(({ getHeaderGroupProps, headers }) => (
            <tr className='f-Table-HeaderGroup' {...getHeaderGroupProps()}>
              {headers.map(
                ({
                  getHeaderProps,
                  getSortByToggleProps,
                  isSorted,
                  isSortedDesc,
                  render,
                  colWidth,
                  disableColSort,
                }) => (
                  <HeaderCell
                    {...getHeaderProps(isSortable && getSortByToggleProps())}
                    isSorted={isSorted}
                    isSortedDesc={isSortedDesc}
                    isSortable={isSortable}
                    colWidth={colWidth}
                    disableColSort={disableColSort}
                  >
                    {render('Header')}
                  </HeaderCell>
                ),
              )}
            </tr>
          ))}
        </thead>

        <tbody>
          {page.map(row => (
            <tr
              className='f-Table-RowGroup'
              {...row.getRowProps()}
              onClick={() => onRowClick(row)}
            >
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

TablePagination.displayName = 'Table';

TablePagination.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string,
      accessor: PropTypes.string,
      colWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      disableColSort: PropTypes.bool,
    }),
  ),
  data: PropTypes.arrayOf(PropTypes.shape({})),
  isSortable: PropTypes.bool,
  manualSorting: PropTypes.bool,
  onChangeSort: PropTypes.func,
  initialState: PropTypes.shape({
    pageIndex: PropTypes.number,
    pageSize: PropTypes.number,
    sortBy: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        desc: PropTypes.bool,
      }),
    ),
  }),
  onRowClick: PropTypes.func,
};

TablePagination.defaultProps = {
  columns: [],
  data: [],
  onChangeSort: () => {},
  onRowClick: () => {},
  initialState: { pageIndex: 0, pageSize: 10 },
};

TablePagination.HeaderCell = HeaderCell;
TablePagination.RowCell = RowCell;

export default TablePagination;
