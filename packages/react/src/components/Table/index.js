import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useTable } from "react-table";

import Text from "../Text";

// eslint-disable-next-line react/prop-types
const HeaderGroup = ({ className, children, ...props }) => (
  <tr className={cx("Table-HeaderGroup", className)} {...props}>
    {children}
  </tr>
);

// eslint-disable-next-line react/prop-types
const HeaderCell = ({ className, children, ...props }) => (
  <th className={cx("Table-HeaderCell", className)} {...props}>
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

const Table = ({ className, columns, data }) => {
  const { headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table className={cx("Table", className)}>
      <thead>
        {headerGroups.map(({ getHeaderGroupProps, headers }) => (
          <HeaderGroup {...getHeaderGroupProps()}>
            {headers.map(({ getHeaderProps, render }) => (
              <HeaderCell {...getHeaderProps()}>{render("Header")}</HeaderCell>
            ))}
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
};

Table.defaultProps = {
  className: undefined,
  columns: [],
  data: [],
};

Table.HeaderCell = HeaderCell;

export default Table;
