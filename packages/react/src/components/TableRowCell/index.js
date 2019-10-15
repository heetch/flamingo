import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { refShapes } from '../../constants';

const TableRowCell = ({ className, children, forwardedRef, ...props }) => (
  <td className={cx('Table-RowCell', className)} ref={forwardedRef} {...props}>
    {children}
  </td>
);

TableRowCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  forwardedRef: PropTypes.oneOfType(refShapes),
};

TableRowCell.defaultProps = {
  className: undefined,
  children: undefined,
  forwardedRef: undefined,
};

export default TableRowCell;
