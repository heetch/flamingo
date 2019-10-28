import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from '../Button';
import Icon from '../Icon';

const IconButton = React.forwardRef(({ className, icon, ...props }, ref) => (
  <Button className={cx('Button--icon', className)} ref={ref} {...props}>
    <Icon icon={icon} size={Icon.SIZES.L} />
  </Button>
));

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Icon.NAMES).isRequired,
};

IconButton.defaultProps = {
  className: undefined,
};

export default IconButton;
