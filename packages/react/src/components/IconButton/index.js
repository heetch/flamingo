import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from '../Button';
import Icon from '../Icon';

import { refShapes } from '../../constants';

const IconButton = ({ className, forwardedRef, icon, ...props }) => (
  <Button
    className={cx('Button--icon', className)}
    ref={forwardedRef}
    {...props}
  >
    <Icon icon={icon} size={Icon.SIZES.L} />
  </Button>
);

IconButton.propTypes = {
  className: PropTypes.string,
  forwardedRef: PropTypes.oneOfType(refShapes),
  icon: PropTypes.oneOf(Icon.NAMES).isRequired,
};

IconButton.defaultProps = {
  className: undefined,
  forwardedRef: undefined,
};

export default IconButton;
