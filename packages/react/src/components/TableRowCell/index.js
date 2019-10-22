import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import UiText from '../UiText';
import { refShapes } from '../../constants';

const TableRowCell = ({ as, className, children, forwardedRef, ...props }) => (
  <UiText
    as={as}
    type={UiText.TYPES.subContent}
    className={cx('Table-RowCell', className)}
    ref={forwardedRef}
    {...props}
  >
    {children}
  </UiText>
);

TableRowCell.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  forwardedRef: PropTypes.oneOfType(refShapes),
};

TableRowCell.defaultProps = {
  as: 'td',
  className: undefined,
  children: undefined,
  forwardedRef: undefined,
};

export default TableRowCell;
