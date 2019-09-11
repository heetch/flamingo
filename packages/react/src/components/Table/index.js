import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useTable, useSortBy } from "react-table";

import Icon from "../Icon";
import Text from "../Text";

// eslint-disable-next-line react/prop-types
const HeaderGroup = ({ className, children, ...props }) => (
  <tr className={cx("Table-HeaderGroup", className)} {...props}>
    {children}
  </tr>
);

// eslint-disable-next-line react/prop-types
const HeaderCell = ({ className, children, isSorted, ...props }) => (
  <th
    className={cx("Table-HeaderCell", className, {
      "is-sorted": isSorted,
    })}
    {...props}
  >
    {children}
  </th>
);

// eslint-disable-next-line react/prop-types
const RowGroup = ({ className, children, ...props }) => (
  <tr className={cx("Table-RowGroup", className)} {...props}>
    {children}
  </tr>
);

// eslint-disable-next-line react/prop-types
const RowCell = ({ className, children, ...props }) => (
  <td className={cx("Table-RowCell", className)} {...props}>
    {children}
  </td>
);

const Table = ({ className, columns, data, isSortable }) => {
  const { headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <table className={cx("Table", className)}>
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
                >
                  <Text>
                    {render("Header")}
                    {isSorted && isSortedDesc && <Icon icon="IconArrowUp" />}
                    {isSorted && !isSortedDesc && <Icon icon="IconArrowDown" />}
                  </Text>
                </HeaderCell>
              )
            )}
          </HeaderGroup>
        ))}
      </thead>

      <tbody>
        {rows.map(row => (
          <RowGroup {...prepareRow(row)} {...row.getRowProps()}>
            {row.cells.map(({ getCellProps, render }) => (
              <RowCell {...getCellProps()}>
                <Text>{render("Cell")}</Text>
              </RowCell>
            ))}
          </RowGroup>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
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

Table.HeaderCell = HeaderCell;

export default Table;
