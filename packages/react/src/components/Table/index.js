import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useTable, useSortBy } from "react-table";

import Icon from "../Icon";
import Text from "../Text";

const HeaderGroup = ({ className, children, ...props }) => (
  <tr className={cx("Table-HeaderGroup", className)} {...props}>
    {children}
  </tr>
);

HeaderGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

HeaderGroup.defaultProps = {
  className: undefined,
  children: undefined,
};

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

HeaderCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isSorted: PropTypes.bool,
};

HeaderCell.defaultProps = {
  className: undefined,
  children: undefined,
  isSorted: false,
};

const RowGroup = ({ className, children, ...props }) => (
  <tr className={cx("Table-RowGroup", className)} {...props}>
    {children}
  </tr>
);

RowGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

RowGroup.defaultProps = {
  className: undefined,
  children: undefined,
};

const RowCell = ({ className, children, ...props }) => (
  <td className={cx("Table-RowCell", className)} {...props}>
    {children}
  </td>
);

RowCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

RowCell.defaultProps = {
  className: undefined,
  children: undefined,
};

const Table = ({ className, columns, data, isSortable }) => {
  const { headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  React.useMemo(
    () =>
      rows.forEach(row => {
        prepareRow(row);
      }),
    [prepareRow, rows]
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

                    {isSorted &&
                      (isSortedDesc ? (
                        <Icon icon="IconArrowUp" />
                      ) : (
                        <Icon icon="IconArrowDown" />
                      ))}

                    {isSortable && !isSorted && (
                      <Icon icon="IconChevronUpDown" />
                    )}
                  </Text>
                </HeaderCell>
              )
            )}
          </HeaderGroup>
        ))}
      </thead>

      <tbody>
        {rows.map(row => (
          <RowGroup {...row.getRowProps()}>
            {row.cells.map(({ getCellProps, render }) => (
              <RowCell {...getCellProps()}>{render("Cell")}</RowCell>
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

Table.HeaderGroup = HeaderGroup;
Table.HeaderCell = HeaderCell;
Table.RowGroup = RowGroup;
Table.RowCell = RowCell;

export default Table;
