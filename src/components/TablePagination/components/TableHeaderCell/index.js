import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import UiText from '../../../UiText';
import { HeaderCell, HeaderCellIcon } from '../../styles';

const TableHeaderCell = React.forwardRef(
  (
    {
      as,
      className,
      isSorted,
      isSortedDesc,
      isSortable,
      colWidth,
      disableColSort,
      ...props
    },
    ref,
  ) => (
    <HeaderCell
      as={as || 'th'}
      className={cx('f-Table-HeaderCell', className)}
      variant={UiText.VARIANTS.subContentBlack}
      ref={ref}
      width={colWidth}
      isSorted={isSorted}
      disableColSort={disableColSort}
      {...props}
    >
      {props.children}

      {isSortable && !disableColSort && (
        <HeaderCellIcon
          className='f-Table-HeaderCellIcon'
          icon={
            // eslint-disable-next-line no-nested-ternary
            !isSorted
              ? 'IconChevronUpDown'
              : isSortedDesc
              ? 'IconArrowUp'
              : 'IconArrowDown'
          }
          isSortable={isSortable}
          isSorted={isSorted}
          size='xl'
        />
      )}
    </HeaderCell>
  ),
);

TableHeaderCell.displayName = 'TableHeaderCell';

TableHeaderCell.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
  isSorted: PropTypes.bool,
  isSortedDesc: PropTypes.bool,
  isSortable: PropTypes.bool,
  colWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disableColSort: PropTypes.bool,
};

export default TableHeaderCell;
