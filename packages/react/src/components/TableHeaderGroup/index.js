import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { refShapes } from '../../constants';

const TableHeaderGroup = ({ className, children, forwardedRef, ...props }) => (
  <tr
    className={cx('Table-HeaderGroup', className)}
    ref={forwardedRef}
    {...props}
  >
    {children}
  </tr>
);

TableHeaderGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  forwardedRef: PropTypes.oneOfType(refShapes),
};

TableHeaderGroup.defaultProps = {
  className: undefined,
  children: undefined,
  forwardedRef: undefined,
};

export default TableHeaderGroup;
