import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TableRowGroup = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <tr className={cx('Table-RowGroup', className)} ref={ref} {...props}>
      {children}
    </tr>
  ),
);

TableRowGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableRowGroup.defaultProps = {
  className: undefined,
  children: undefined,
};

export default TableRowGroup;
