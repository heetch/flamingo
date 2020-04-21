import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TableRowGroup = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <tr className={cx('f-Table-RowGroup', className)} ref={ref} {...props}>
      {children}
    </tr>
  ),
);

TableRowGroup.displayName = 'TableRowGroup';

TableRowGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TableRowGroup;
