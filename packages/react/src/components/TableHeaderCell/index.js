import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import UiText from '../UiText';

const TableHeaderCell = React.forwardRef(
  (
    { as, className, children, isSorted, isSortedDesc, isSortable, ...props },
    ref,
  ) => (
    <UiText
      as={as}
      className={cx('Table-HeaderCell', className, {
        'is-sortable': isSortable,
        'is-sorted': isSorted,
      })}
      type={UiText.TYPES.subContentBold}
      ref={ref}
      {...props}
    >
      {children}

      {isSortable && (
        <Icon
          className='Table-HeaderCellIcon'
          icon={
            !isSorted
              ? 'IconChevronUpDown'
              : isSortedDesc
              ? 'IconArrowUp'
              : 'IconArrowDown'
          }
        />
      )}
    </UiText>
  ),
);

TableHeaderCell.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isSorted: PropTypes.bool,
  isSortedDesc: PropTypes.bool,
  isSortable: PropTypes.bool,
};

TableHeaderCell.defaultProps = {
  as: 'th',
  className: undefined,
  children: undefined,
  isSorted: false,
  isSortedDesc: false,
  isSortable: false,
};

export default TableHeaderCell;
