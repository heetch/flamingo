import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { refShapes } from '../../constants';

const TableHeaderCell = ({
  className,
  children,
  forwardedRef,
  isSorted,
  ...props
}) => (
  <th
    className={cx('Table-HeaderCell', className, {
      'is-sorted': isSorted,
    })}
    ref={forwardedRef}
    {...props}
  >
    {children}
  </th>
);

TableHeaderCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  forwardedRef: PropTypes.oneOfType(refShapes),
  isSorted: PropTypes.bool,
};

TableHeaderCell.defaultProps = {
  className: undefined,
  children: undefined,
  forwardedRef: undefined,
  isSorted: false,
};

export default TableHeaderCell;
