import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { refShapes } from '../../constants';

const TableRowGroup = ({ className, children, forwardedRef, ...props }) => (
  <tr className={cx('Table-RowGroup', className)} ref={forwardedRef} {...props}>
    {children}
  </tr>
);

TableRowGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  forwardedRef: PropTypes.oneOfType(refShapes),
};

TableRowGroup.defaultProps = {
  className: undefined,
  children: undefined,
  forwardedRef: undefined,
};

export default TableRowGroup;
