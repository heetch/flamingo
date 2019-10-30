import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TableHeaderGroup = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <tr className={cx('Table-HeaderGroup', className)} ref={ref} {...props}>
      {children}
    </tr>
  ),
);

TableHeaderGroup.displayName = 'TableHeaderGroup';

TableHeaderGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableHeaderGroup.defaultProps = {
  className: undefined,
  children: undefined,
};

export default TableHeaderGroup;
