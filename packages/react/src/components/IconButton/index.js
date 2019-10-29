import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from '../Button';
import Icon from '../Icon';

const sizes = Object.keys(Icon.SIZES);

const IconButton = React.forwardRef(
  ({ className, icon, size, ...props }, ref) => (
    <Button
      className={cx('Button--icon', className)}
      ref={ref}
      intent={Button.INTENTS.SECONDARY}
      variant={Button.VARIANTS.MINIMAL}
      size={size}
      {...props}
    >
      <Icon icon={icon} size={size} />
    </Button>
  ),
);

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Icon.NAMES).isRequired,
  size: PropTypes.oneOf(sizes),
};

IconButton.defaultProps = {
  className: undefined,
  size: Icon.SIZES.L,
};

export default IconButton;
