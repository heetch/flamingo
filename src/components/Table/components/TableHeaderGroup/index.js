import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const TableHeaderGroup = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <tr className={cx('f-Table-HeaderGroup', className)} ref={ref} {...props}>
      {children}
    </tr>
  ),
);

TableHeaderGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TableHeaderGroup;
