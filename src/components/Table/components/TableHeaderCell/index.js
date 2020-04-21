import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import UiText from '../../../UiText';
import { HeaderCell, HeaderCellIcon } from '../../styles';

const TableHeaderCell = React.forwardRef(
  ({ as, className, isSorted, isSortedDesc, isSortable, ...props }, ref) => (
    <HeaderCell
      as={as || 'th'}
      className={cx('f-Table-HeaderCell', className)}
      variant={UiText.VARIANTS.subContentBold}
      textColor={isSortable && isSorted && 'var(--f-color-brandPrimary)'}
      margin={'20px'}
      ref={ref}
      {...props}
    >
      {props.children}

      {isSortable && (
        <HeaderCellIcon
          className='f-Table-HeaderCellIcon'
          icon={
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
};

TableHeaderCell.defaultProps = {
  isSorted: false,
  isSortedDesc: false,
  isSortable: false,
};

export default TableHeaderCell;
