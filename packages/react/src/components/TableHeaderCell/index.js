import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';
import UiText from '../UiText';

import { refShapes } from '../../constants';

const TableHeaderCell = ({
  as,
  className,
  children,
  forwardedRef,
  isSorted,
  isSortedDesc,
  isSortable,
  ...props
}) => (
  <UiText
    as={as}
    className={cx('Table-HeaderCell', className, {
      'is-sortable': isSortable,
      'is-sorted': isSorted,
    })}
    type={UiText.TYPES.subContentBold}
    ref={forwardedRef}
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
);

TableHeaderCell.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  forwardedRef: PropTypes.oneOfType(refShapes),
  isSorted: PropTypes.bool,
  isSortedDesc: PropTypes.bool,
  isSortable: PropTypes.bool,
};

TableHeaderCell.defaultProps = {
  as: 'th',
  className: undefined,
  children: undefined,
  forwardedRef: undefined,
  isSorted: false,
  isSortedDesc: false,
  isSortable: false,
};

export default TableHeaderCell;
