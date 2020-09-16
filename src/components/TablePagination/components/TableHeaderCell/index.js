import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import UiText from '../../../UiText';
import { HeaderCell, HeaderCellIcon } from '../../styles';
import { theme } from '../../../../theme';

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
      variant={UiText.VARIANTS.subContentBold}
      textColor={
        isSortable && isSorted && !disableColSort
          ? theme.color.brand.primary
          : theme.color.text.primary
      }
      ref={ref}
      width={colWidth}
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
